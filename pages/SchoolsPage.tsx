// src/pages/SchoolsPage.tsx
import React from 'react';
import { PartnerSchools } from '../components/PartnerSchools';

export const SchoolsPage: React.FC = () => {
    // Dodajemy padding-top (pt-32), żeby navbar nie zasłaniał treści
    return (
        <div className="pt-32 min-h-screen bg-charcoal">
            <PartnerSchools />
        </div>
    );
};