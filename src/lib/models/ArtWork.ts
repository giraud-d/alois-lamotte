export interface ArtWorkByYear {
	[year: number]: ArtWork[];
}

export interface ArtWork {
	title: string;
	description: string;
	year: number;
	preview: string;
	link: string;
	views: string[];
	status?: ArtWorkStatus;
	printAvailable?: boolean;
	technique: string;
	dimensions?: {
		height: number;
		width: number;
	};
}

export enum ArtWorkType {
	PAINTING = 'painting',
	ILLUSTRATION = 'illustration'
}

export enum ArtWorkStatus {
	SOLD = 'sold',
	BOOKED = 'booked',
	TO_SELL = 'unsold'
}
