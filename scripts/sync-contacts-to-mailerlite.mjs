// One-off bulk sync: pushes every row from the `zapisy` table into MailerLite.
// Usage:
//   node --env-file=.env scripts/sync-contacts-to-mailerlite.mjs --dry-run
//   node --env-file=.env scripts/sync-contacts-to-mailerlite.mjs
//
// Requires in .env: VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, MAILERLITE_API_KEY
// SUPABASE_SERVICE_ROLE_KEY bypasses RLS and is not used anywhere else in this repo -
// only add it to your local .env, never commit it.

const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const DRY_RUN = process.argv.includes('--dry-run')

for (const [name, value] of Object.entries({ SUPABASE_URL, SERVICE_ROLE_KEY, MAILERLITE_API_KEY })) {
  if (!value) {
    console.error(`Missing ${name} - set it in .env before running.`)
    process.exit(1)
  }
}

async function fetchAllContacts() {
  const pageSize = 1000
  let from = 0
  const rows = []

  while (true) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/zapisy?select=imie,nazwisko,email`,
      {
        headers: {
          apikey: SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
          Range: `${from}-${from + pageSize - 1}`,
        },
      }
    )
    if (!res.ok) {
      throw new Error(`Supabase fetch failed: ${res.status} ${await res.text()}`)
    }
    const page = await res.json()
    rows.push(...page)
    if (page.length < pageSize) break
    from += pageSize
  }

  return rows
}

async function pushToMailerLite(contact) {
  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: contact.email,
      fields: {
        name: contact.imie,
        last_name: contact.nazwisko,
      },
    }),
  })

  if (res.status === 429) {
    const retryAfter = Number(res.headers.get('retry-after') ?? '5')
    await new Promise((r) => setTimeout(r, retryAfter * 1000))
    return pushToMailerLite(contact)
  }

  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

const contacts = (await fetchAllContacts()).filter((c) => c.email)
console.log(`Found ${contacts.length} contact(s) in "zapisy" with an email.`)

if (DRY_RUN) {
  console.log('Dry run - not sending anything. First 5:')
  console.table(contacts.slice(0, 5))
  process.exit(0)
}

let success = 0
const failures = []

for (const contact of contacts) {
  const result = await pushToMailerLite(contact)
  if (result.ok) {
    success++
  } else {
    failures.push({ email: contact.email, status: result.status, error: result.data })
  }
  await new Promise((r) => setTimeout(r, 350))
}

console.log(`Done. ${success}/${contacts.length} synced.`)
if (failures.length) {
  console.log(`${failures.length} failed:`)
  console.table(failures.map((f) => ({ email: f.email, status: f.status })))
}
