import { type ArtWork, type ArtWorkByYear } from '$lib/models/ArtWork';
import { PUBLIC_STATIC_ASSET_BASE_URL } from '$env/static/public';

export const paintings: ArtWork[] = [
	{
		title: 'Un reflet III',
		description:
			'Le médium utilisé pour cette toile porte en lui un mystère. Issu du cellier de ma grand-mère, qui l’avait elle-même hérité de sa propre mère, il traverse les générations comme un fragment d’histoire familiale. C’est sur ce support chargé de mémoire que j’inscris mon souvenir, celui d’une rencontre marquante qui a profondément influencé ma pratique architecturale.',
		year: 2025,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-III_preview.jpg`,
		link: 'un-reflet-III',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-III_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-III_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-III_detail-2.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-III_detail-3.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-III_detail-4.jpg`
		],
		technique: 'Huile sur toile',
		dimensions: { height: 70, width: 50 }
	},
	{
		title: 'Celeste II',
		description:
			'Ce tableau entremêle deux souvenirs : un regard chargé de passion et l’image d’une lamelle de météorite observée au microscope. Les formes et les couleurs se superposent, évoquant à la fois l’infiniment petit et l’infiniment grand, le minéral et l’émotion. Entre abstraction et figuration, le regard apparaît et disparaît, comme une trace persistante dans la mémoire.',
		year: 2025,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/celeste-II_preview.jpg`,
		link: 'celeste-II',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/celeste-II_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/celeste-II_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/celeste-II_detail-2.jpg`
		],
		technique: 'Acrylique, papier sur toile',
		dimensions: { height: 80, width: 80 }
	},
	{
		title: 'Céleste',
		description:
			'Ce tableau entremêle deux souvenirs : un regard chargé de passion et l’image d’une lamelle de météorite observée au microscope. Les formes et les couleurs se superposent, évoquant à la fois l’infiniment petit et l’infiniment grand, le minéral et l’émotion. Entre abstraction et figuration, le regard apparaît et disparaît, comme une trace persistante dans la mémoire.\n',
		year: 2024,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/celeste_preview.jpg`,
		link: 'celeste',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/celeste_main.jpg`],
		technique: 'Acrylique, papier sur toile',
		dimensions: { height: 80, width: 80 }
	},
	{
		title: 'Un reflet I',
		description:
			"Lors d'un repas entre amis dans leur salon, les images se déformaient sur une surface cylindrique. Elles me faisaient penser à l’altération des images de la mémoire. Voici l'altération de l’altération.",
		year: 2024,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-I_preview.jpg`,
		link: 'un-reflet-I',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-I_main.jpg`, `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-reflet-I_detail-1.jpg`],
		technique: 'Huile sur toile',
		dimensions: { height: 165, width: 30 }
	},
	{
		title: 'Elévation',
		description:
			"Parfois, l’esprit s'élève et devient un tout. Dans ces moments flottants presque mystiques où la perception est altérée, le moindre détail devient une aventure.",
		year: 2024,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/elevation_preview.jpg`,
		link: 'elevation',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/elevation_main.jpg`, `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/elevation_detail-1.jpg`],
		technique: 'Huile sur toile',
		dimensions: { height: 29, width: 29 }
	},
	{
		title: 'Levée du rideau de brume',
		description: 'Ce tableau a été peint à un moment critique, il symbolise la libération d’une situation qui semblait perdue et insolvable.',
		year: 2024,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/levee-du-rideau-de-brume_preview.jpg`,
		link: 'levee-du-rideau-de-brume',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/levee-du-rideau-de-brume_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/levee-du-rideau-de-brume_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/levee-du-rideau-de-brume_detail-2.jpg`
		],
		technique: 'Huile et acrylique sur toile',
		dimensions: { height: 50, width: 40 }
	},
	{
		title: 'Discordance',
		description:
			'Les corps se déhanchaient sous le rythme de la musique, une demi-pénombre régnait en ces lieux. Quelques spots, çà et là, venaient caresser ton visage. L’ambiance était festive, tout semblait s’animer autour de toi, pourtant ton regard était fermé, tu semblais en dehors de ce temps, perdu dans une profonde mélancolie d’une époque qui jamais plus ne reviendra.',
		year: 2023,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/discordance_preview.jpg`,
		link: 'discordance',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/discordance_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/discordance_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/discordance_detail-2.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/discordance_detail-3.jpg`
		],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: 'Les cimes',
		description:
			'Ce tableau transcrit un moment pivot pour quelqu’un qui m’est cher. Il inspire à la rêverie et la contemplation de l’instant présent comme prendre le temps de s’allonger en forêt pour observer danser les cimes des arbres animées par le vent.',
		year: 2023,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/les-cimes_preview.jpg`,
		link: 'les-cimes',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/les-cimes_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/les-cimes_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/les-cimes_detail-2.jpg`
		],
		technique: 'Acrylique sur toile',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	/*
	 {
	 title: 'Une idée au loin dans le tumulte du quotidien',
	 description: "Ci-gît la cristallisation d’une idée fixe au loin. Un but dont le parcours est semé d'embûches.",
	 year: 2023,
	 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/une-idee-au-loin-dans-le-tumulte-quotidien.jpg`, // Empty
	 link: 'idee-au-loin',
	 views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/une-idee-au-loin-dans-le-tumulte-quotidien.jpg`], // Empty
	 technique: 'Huile et mycelium sur grain de millet collé sur toile',
	 dimensions: { height: 60, width: 50 }
	},
	 */
	{
		title: 'Toise de croissance',
		description:
			'Entre deux confinements, j’ai voulu faire pousser un arbre dans la maison. Un arbre pour grimper, rêver, s’évader. Une cabane tout en haut comme repaire secret, et une échelle pour suivre les enfants qui grandissent. Dans les branches, j’ai caché des animaux: un petit jeu à deux, pour apprendre leurs noms et inventer des histoires au fil du temps.',
		year: 2020,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/toise-de-croissance_preview.jpg`,
		link: '17-toise-de-croissance',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/toise-de-croissance_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/toise-de-croissance_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/toise-de-croissance_detail-2.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/toise-de-croissance_detail-3.jpg`
		],
		technique: 'Peinture acrylique sur mur',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	/*
	{
	 title: 'Esprit Embrumé',
	 description: 'Un regard qui disparaît dans le froid mordant des regrets.',
	 year: 2020,
	 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/esprit-embrume_preview.jpg`,
	 link: 'esprit-embrume',
	 views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/esprit-embrume_main.jpg`],
	 technique: 'Peinture acrylique et huile sur toile',
	 dimensions: { height: 100, width: 40 }
	},
	*/
	{
		title: 'Bitter',
		description:
			'Il fait chaud ce jour-là, pour se désaltérer, il se sert un verre de Campari Tonic, les mixtures dansent, virevoltent et se transforment sous le prisme de la forme.',
		year: 2020,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/bitter_preview.jpg`,
		link: 'bitter',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/bitter_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/bitter_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/bitter_detail-2.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/bitter_detail-3.jpg`
		],
		technique: 'Peinture à l’huile sur toile',
		dimensions: { height: 70, width: 70 }
	},
	{
		title: 'Immergé',
		description:
			'En 2019, une découverte fortuite : un nodule thyroïdien, révélant la fragilité du corps et la fugacité de l’existence. Deux ans plus tôt, en 2017, l’expérience de la maternité avait chamboulé mon univers de doutes et d’un amour incommensurable. Entre la vie qui naît et la conscience de la fragilité de nos corps, ce tableau est le reflet d’un tiraillement intime, une oscillation entre émerveillement et inquiétude et la prise de conscience de ma propre mortalité. Chaque trait, chaque nuance traduit l’écho de ces émotions entremêlées, entre création et disparition, entre angoisse et beauté.',
		year: 2019,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/immerge_preview.jpg`,
		link: 'immerge',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/immerge_main.jpg`],
		technique: 'Acrylique, papier sur toile',
		dimensions: { height: 80, width: 80 }
	},
	{
		title: 'Errance',
		description:
			'Un souvenir de la rue des Foulons, la nuit est éclairée par la lune. Tel fut le tableau changeant au fil des saisons qu’offrait la fenêtre de ma chambre.',
		year: 2019,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/errance_preview.jpg`,
		link: 'errance',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/errance_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/errance_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/errance_detail-2.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/errance_detail-3.jpg`
		],
		technique: 'Acrylique sur toile',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	{
		title: 'Descendant',
		description: 'Portraits de famille, une devinette sur l’avenir. ',
		year: 2019,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/descendant_preview.jpg`,
		link: 'descendant',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/descendant_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/descendant_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/descendant_detail-2.jpg`
		],
		technique: 'Huile sur toile',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	{
		title: 'Perception',
		description: '',
		year: 2019,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/descendant_preview.jpg`,
		link: 'perception',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/perception_main.jpg`, `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/perception_detail-1.jpg`],
		technique: 'Huile sur toile',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	{
		title: 'Thumos',
		description:
			'Un soir d’été dans un bar suréclairé, les spots dansent sur ta peau. J’ai tenté de préserver ce souvenir en le peignant le lendemain à la lueur de la bougie pour ne révéler qu’à l’aube les couleurs que j’avaient peintes. ',
		year: 2019,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/thumos_preview.jpg`,
		link: 'thumos',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/thumos_main.jpg`, `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/thumos_detail-1.jpg`],
		technique: 'Huile sur toile',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	{
		title: 'Un printemps sans nom',
		description: 'Mon jardin renaît au printemps et j’entend le rire des enfants jouant dans la cour,c’est un moment paisible dans la campagne Surzuroise.',
		year: 2019,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-printemps-sans-nom_preview.jpg`,
		link: 'un-printemps-sans-nom',
		views: [
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-printemps-sans-nom_main.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-printemps-sans-nom_detail-1.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-printemps-sans-nom_detail-2.jpg`,
			`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/un-printemps-sans-nom_detail-3.jpg`
		],
		technique: 'Huile sur toile',
		dimensions: {
			height: 0,
			width: 0
		}
	},
	/*
	 {
	 title: 'Insomnie',
	 description:
		'',
	 year: 2019,
	 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/insomnie_preview.jpg`,
	 link: 'insomnie',
	 views: [
		`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/insomnie_main.jpg`,
		`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/insomnie_detail-1.jpg`,
	 ],
	 technique: '',
	 dimensions: { height: 0, width: 0 }
	},
	{
	 title: 'Tourments',
	 description:
		'',
	 year: 2019,
	 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/tourments_preview.jpg`,
	 link: 'tourments',
	 views: [
		`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/tourments_main.jpg`,
		`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/tourments_detail-1.jpg`,
	 ],
	 technique: 'Huile sur toile',
	 dimensions: { height: 0, width: 0 }
	},
	 */
	/*
	{
	 title: 'Ambrée',
	 description:
		"L'expérimentation a débuté enfant, je collectais de la sève d’abricotier pour y inventer des bijoux avec du branchage. En 2015, alors qu’elle s’écoulait du tronc sous une chaleur de plomb, l’idée me vint de la faire fondre sur un support et d’attendre qu’elle soit plus stable.",
	 year: 2015,
	 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/tmp-shapes.png`, // Empty
	 link: 'ambree',
	 views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/tmp-shapes.png`], // Empty
	 technique: "Gomme d'abricotier avec acrylique sur bois",
	 dimensions: { height: 42, width: 30 }
	},
	*/
	{
		title: 'Mask',
		description: 'Tableau peint lors d’un moment charnière sur la définition de soi. La quête du soi, le moi en mouvement, qui sommes-nous ?',
		year: 2013,
		preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/mask_preview.jpg`,
		link: 'mask',
		views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/mask_main.jpg`, `${PUBLIC_STATIC_ASSET_BASE_URL}/paintings/mask_detail-1.jpg`],
		technique: 'Acrylique et plâtre',
		dimensions: {
			height: 0,
			width: 0
		}
	}
	/*
	{
	 title: 'Genèse inspiration de Matis',
	 description: '',
	 year: 2010,
	 preview: `${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/genese-inspiration-de-matis_preview.png`,
	 link: 'genese-inspiration-de-matis',
	 views: [`${PUBLIC_STATIC_ASSET_BASE_URL}/illustrations/genese-inspiration-de-matis_main.png`],
	 technique: 'Acrylique sur dos de papier peint',
	 dimensions: {
		height: 0,
		width: 0
	 }
	},
	*/
];

export const paintingsByYear: ArtWorkByYear = paintings.reduce<ArtWorkByYear>((acc, painting) => {
	(acc[painting.year] ||= []).push(painting);
	return acc;
}, {});
