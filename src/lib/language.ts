import { writable } from 'svelte/store';

export type Language = 'fr' | 'en';

// function getBrowserLanguage(): Language {
//     if (typeof window === 'undefined') return 'en';
//     const browserLang = navigator.language.toLowerCase();
//     return browserLang.startsWith('fr') ? 'fr' : 'en';
// }
//export const language = writable<Language>(getBrowserLanguage());

// Only french for now
export const language = writable<Language>('fr');
