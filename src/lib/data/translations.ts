import { derived } from 'svelte/store';
import { language, type Language } from '$lib/language';

export const t = derived(language, ($language) => {
		return (path: string): string => {
				const keys = path.split('.');
				let result: unknown = translations;
				for (const k of keys) {
						if (typeof result === 'object' && result !== null && k in result) {
								result = (result as Record<string, unknown>)[k];
						} else {
								return '';
						}
				}
				if (typeof result === 'object' && result !== null && $language in (result as Record<string, string>)) {
						return (result as Record<Language, string>)[$language];
				}
				return '';
		};
});

export const translations = {
		nav: {
				home: { fr: 'Accueil', en: 'Home' },
				paintings: { fr: 'Peintures', en: 'Paintings' },
				illustrations: { fr: 'Illustrations', en: 'Illustrations' },
				projects: { fr: 'Projets', en: 'Projects' },
				about: { fr: 'À propos', en: 'About' },
				contact: { fr: 'Contact', en: 'Contact' }
		},
		artWork: {
				date: {
						months: {
								fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
								en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
						}
				},
				navigation: {
						next: { fr: 'Suivant', en: 'Next' },
						previous: { fr: 'Précédent', en: 'Previous' },
						close: { fr: 'Fermer', en: 'Close' },
						back: { fr: 'Retour', en: 'Back' }
				},
				notFound: { fr: 'Œuvre non trouvée', en: 'Art work not found' }
		},
		painting: {
				title: { fr: 'Peinture', en: 'Painting' }
		},
		illustration: {
				title: { fr: 'Illustration', en: 'Illustration' }
		}
};
