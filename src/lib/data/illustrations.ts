import { type ArtWork, type ArtWorkByYear, ArtWorkStatus } from '$lib/models/ArtWork';
import { PUBLIC_STATIC_ASSET_BASE_URL } from '$env/static/public';

export const illustrations: ArtWork[] = [
	{
		title: 'Mes fantômes',
		description:
			'Avez-vous chez vous un objet qui vous fait penser à quelqu’un ? Qui vous évoque un souvenir précis dès l’instant où vous y posez le regard ? Ce bureau que l’on devine dans ce petit format en est empli. Ces souvenirs sont si prégnants qu’ils m’apparaissent comme des fantômes coincés dans une boucle de souvenir sans fin.',
		year: 2025, // à adapter
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/mes-fantomes_preview.jpg`,
		link: 'mes-fantomes',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/mes-fantomes_main.jpg`],
		status: ArtWorkStatus.BOOKED,
		technique: 'Acrylique sur carton gris',
		dimensions: { height: 15, width: 15 }
	},
	{
		title: 'Le hammam de la grande mosquée de Paris',
		description:
			'Cette illustration est dédiée à une chère amie avec qui j’ai découvert ma passion pour les hammams et notamment ce lieu suspendu dans le temps d’une somptueuse beauté. ',
		year: 2025,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/le-hammam-de-la-grande-mosquee-de-paris_preview.jpg`,
		link: 'le-hammam-de-la-grande-mosquee-de-paris',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/le-hammam-de-la-grande-mosquee-de-paris_main.jpg`],
		status: ArtWorkStatus.BOOKED,
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	},
	{
		title: 'Souvenir de juin',
		description: '', // description absente
		year: 2024,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/souvenir-de-juin_main.jpg`,
		link: 'souvenir-de-juin',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/souvenir-de-juin_main.jpg`],
		status: ArtWorkStatus.BOOKED,
		technique: 'Crayon de couleur',
		dimensions: { height: 21, width: 14.8 }
	},
	{
		title: 'Fading away',
		description:
			'J’ai toujours eu du mal à appréhender mes émotions et mes relations – avec mes amis, ma famille, mes amants. Pour y voir plus clair, j’ai construit une demeure mentale : une réplique de la maison de mes grands-parents, où chaque pièce incarne un pan de mes liens aux autres. Le salon accueille mes amis proches, la terrasse mes connaissances. Le bureau abrite mes amours passés, tandis que la cuisine fige mes grands-parents dans un petit-déjeuner éternel depuis le départ de ma grand-mère en 2020. Seule ma fille, en dehors de moi, peut circuler librement dans cette demeure figée. Dans la première chambre, le reste de ma famille ; dans la seconde, mes amours présents. Cette illustration représente cette dernière. Elle retranscrit un rêve où un amour passé devient souvenir, s’effaçant peu à peu au contact de la réalité. Sous le lit, des boîtes s’empilent, symbolisant ces souvenirs douloureux que l’on tente d’enfouir au plus profond de sa conscience.',
		year: 2023,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/fading-away_preview.jpg`,
		link: 'fading-away',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/fading-away_main.jpg`],
		status: ArtWorkStatus.BOOKED,
		technique: 'Technique mixte, Staedler, colorisation numérique',
		dimensions: { height: 29.7, width: 21 }
	},
	{
		title: 'Birth or death',
		description: 'Les bananes seins, hommages à ces bananes scotchées aux murs',
		year: 2023,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/birth-and-death_main.jpg`,
		link: 'birth-or-death',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/birth-and-death_main.jpg`],
		status: ArtWorkStatus.BOOKED,
		technique: 'Technique mixte, acrylique, feutre et numérique. Format A4',
		dimensions: { height: 21, width: 29.7 }
	},
	{
		title: 'L’aviateur et le lion',
		description: 'Une aventure qui tourne au vinaigre ?',
		year: 2016,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/l-aviateur-et-le-lion_main.jpg`,
		link: 'l-aviateur-et-le-lion',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/l-aviateur-et-le-lion_main.jpg`],
		status: ArtWorkStatus.BOOKED,
		technique: 'Acrylique et découpe papier sur A5',
		dimensions: { height: 21, width: 14.8 }
	}
	/*
		{
		 title: 'Chou hibou',
		 description: '', // description absente
		 year: 2014,
		 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/chou-hibou_main.png`,
		 link: '2-chou-hibou',
		 views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/chou-hibou_main.png`],
		 status: ArtWorkStatus.BOOKED,
		 technique: 'Staedler sur papier A0',
		 dimensions: { height: 118.9, width: 84.1 }
		},
	 */
	// Regard éclairé
	// A la croisee des chemins
	// Entre deux
	// La vengeance de l’arbre
];

export const illustrationsByYear: ArtWorkByYear = illustrations.reduce<ArtWorkByYear>((acc, illustration) => {
	(acc[illustration.year] ||= []).push(illustration);
	return acc;
}, {});
