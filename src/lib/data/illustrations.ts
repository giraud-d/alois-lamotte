import { type ArtWork, type ArtWorkByYear } from '$lib/models/ArtWork';
import { PUBLIC_STATIC_ASSET_BASE_URL } from '$env/static/public';

export const illustrations: ArtWork[] = [
	{
		title: 'Souvenir de juin',
		description: '', // description absente
		year: 2024,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/souvenir-de-juin_main.png`,
		link: 'souvenir-de-juin',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/souvenir-de-juin_main.png`],
		technique: 'Crayon de couleur',
		dimensions: { height: 21, width: 14.8 } // format A5
	},
	{
		title: 'Fading away',
		description:
			'J’ai toujours eu du mal à appréhender mes émotions et mes relations – avec mes amis, ma famille, mes amants. Pour y voir plus clair, j’ai construit une demeure mentale : une réplique de la maison de mes grands-parents, où chaque pièce incarne un pan de mes liens aux autres. Le salon accueille mes amis proches, la terrasse mes connaissances. Le bureau abrite mes amours passés, tandis que la cuisine fige mes grands-parents dans un petit-déjeuner éternel depuis le départ de ma grand-mère en 2020. Seule ma fille, en dehors de moi, peut circuler librement dans cette demeure figée. Dans la première chambre, le reste de ma famille ; dans la seconde, mes amours présents. Cette illustration représente cette dernière. Elle retranscrit un rêve où un amour passé devient souvenir, s’effaçant peu à peu au contact de la réalité. Sous le lit, des boîtes s’empilent, symbolisant ces souvenirs douloureux que l’on tente d’enfouir au plus profond de sa conscience.',
		year: 2023,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/fading-away_main.jpg`,
		link: 'fading-away',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/fading-away_main.jpg`],
		technique: 'Technique mixte, Staedler, colorisation numérique',
		dimensions: { height: 29.7, width: 21 } // format A4
	},
	{
		title: 'Birth or death',
		description: 'Les bananes seins, hommages à ces bananes scotchées aux murs',
		year: 2023,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/birth-and-death_main.jpg`,
		link: 'birth-or-death',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/birth-and-death_main.jpg`],
		technique: 'Technique mixte, acrylique, feutre et numérique. Format A4',
		dimensions: { height: 21, width: 29.7 } // format A4
	},
	{
		title: 'L’aviateur et le lion',
		description: 'Une aventure qui tourne au vinaigre ?',
		year: 2016,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/l-aviateur-et-le-lion_main.jpg`,
		link: '4-aviateur-lion',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/l-aviateur-et-le-lion_main.jpg`],
		technique: 'Acrylique et découpe papier sur A5',
		dimensions: { height: 21, width: 14.8 } // format A5
	},
	{
		title: 'Chou hibou',
		description: '', // description absente
		year: 2014,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/chou-hibou_main.png`,
		link: '2-chou-hibou',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/chou-hibou_main.png`],
		technique: 'Staedler sur papier A0',
		dimensions: { height: 118.9, width: 84.1 } // format A0
	},
	{
		title: 'Genèse inspiration de Matis',
		description: '', // description absente
		year: 2010,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/genese-inspiration-de-matis_main.png`,
		link: 'genese-inspiration-de-matis',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/genese-inspiration-de-matis_main.png`],
		technique: 'Acrylique sur dos de papier peint',
		dimensions: {
			height: 0,
			width: 0
		} // dimensions non précisées
	},

	{
		title: '1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
		year: 2000,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/1.jpg`,
		link: '1',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/1.jpg`
		],
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	},
	{
		title: '2',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
		year: 2000,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/2.jpg`,
		link: '2',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/2.jpg`],
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	},
	{
		title: '4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
		year: 2000,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/4.jpg`,
		link: '4',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/4.jpg`],
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	},
	{
		title: '5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
		year: 2000,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/5.jpg`,
		link: '5',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/5.jpg`],
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	},
	{
		title: '7',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
		year: 2000,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/7.jpg`,
		link: '7',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/7.jpg`],
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	}
];

export const illustrationsByYear: ArtWorkByYear = illustrations.reduce<ArtWorkByYear>((acc, illustration) => {
	(acc[illustration.year] ||= []).push(illustration);
	return acc;
}, {});
