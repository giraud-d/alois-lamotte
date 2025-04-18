export type Language = 'fr' | 'en';

export interface Translations {
    nav: {
        home: string;
        paintings: string;
        illustrations: string;
        about: string;
        contact: string;
    };
    artWork: {
        date: {
            months: string[];
        };
        navigation: {
            next: string;
            previous: string;
            close: string;
            back: string;
        };
        notFound: string;
    };
    painting: {
        title: string;
    },
    illustration: {
        title: string;
    };
}

export const translations: Record<Language, Translations> = {
    fr: {
        nav: {
            home: 'Accueil',
            paintings: 'Peintures',
            illustrations: 'Illustrations',
            about: 'À propos',
            contact: 'Contact'
        },
        artWork: {
            date: {
                months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
            },
            navigation: {
                next: 'Suivant',
                previous: 'Précédent',
                close: 'Fermer',
                back: 'Retour'
            },
            notFound: 'Peinture non trouvée'
        },
        painting: {
            title: 'Peinture'
        },
        illustration: {
            title: 'Illustration'
        }
    },
    en: {
        nav: {
            home: 'Home',
            paintings: 'Paintings',
            illustrations: 'Illustrations',
            about: 'About',
            contact: 'Contact'
        },
        artWork: {
            date: {
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            },
            navigation: {
                next: 'Next',
                previous: 'Previous',
                close: 'Close',
                back: 'Back'
            },
            notFound: 'Painting not found'
        },
        painting: {
            title: 'Painting'
        },
        illustration: {
            title: 'Illustration'
        }
    }
}; 