import { writable, derived } from 'svelte/store';
import type { Language } from '$lib/data/translations';
import { translations } from '$lib/data/translations';

function getBrowserLanguage(): Language {
    if (typeof window === 'undefined') return 'en';
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
}

export const language = writable<Language>(getBrowserLanguage());
export const t = derived(language, ($language) => translations[$language]); 