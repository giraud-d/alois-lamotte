export interface ArtWorkByYear {
    [year: number]: ArtWork[];
}

export interface ArtWork {
    title: string;
    description: string;
    date: string;
    preview: string;
    link: string;
    views: string[];
    technique: string;
    dimensions: {
        height: number;
        width: number;
    };
}

export enum ArtWorkType {
    PAINTING = 'painting',
    ILLUSTRATION = 'illustration',
}