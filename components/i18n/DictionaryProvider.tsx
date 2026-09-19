'use client';

import { createContext, useContext, type PropsWithChildren } from 'react';

import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

type DictionaryContextValue = {
    dictionary: Dictionary;
    locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({ children, dictionary, locale }: PropsWithChildren<DictionaryContextValue>) {
    return (
        <DictionaryContext.Provider value={{ dictionary, locale }}>
            {children}
        </DictionaryContext.Provider>
    );
}

export function useDictionary(): DictionaryContextValue {
    const value = useContext(DictionaryContext);

    if (value === null) {
        throw new Error('useDictionary must be used within DictionaryProvider.');
    }

    return value;
}
