'use client';

import { useMemo } from 'react';
import { useDictionary } from '@/components/i18n/DictionaryProvider';
import { certifications as baseCertifications, contactFacts as baseContactFacts, education as baseEducation, hobbies as baseHobbies, hobbyExtras as baseHobbyExtras, journey as baseJourney, projects as baseProjects, statistics as baseStatistics } from '@/data/portfolio';

export function useLocalizedPortfolio() {
    const { dictionary } = useDictionary();

    return useMemo(() => ({
        projects: baseProjects.map((project, index) => ({ ...project, ...dictionary.projects.items[index] })),
        statistics: baseStatistics.map((statistic, index) => ({ ...statistic, ...dictionary.about.statistics[index] })),
        contactFacts: baseContactFacts.map((fact, index) => ({ ...fact, label: dictionary.contact.facts[index] ?? fact.label })),
        education: baseEducation.map((entry, index) => ({ ...entry, ...dictionary.education.entries[index] })),
        certifications: baseCertifications.map((entry, index) => ({ ...entry, ...dictionary.education.certifications[index] })),
        journey: baseJourney.map((entry, index) => ({ ...entry, ...dictionary.journey.entries[index] })),
        hobbies: baseHobbies.map((hobby, index) => ({ ...hobby, ...dictionary.hobbies.items[index] })),
        hobbyExtras: baseHobbyExtras.map((extra, index) => ({ ...extra, label: dictionary.hobbies.extras[index] ?? extra.label })),
    }), [dictionary]);
}
