import {type ArtWork, type ArtWorkByYear} from '$lib/models/ArtWork';

export const paintings: ArtWork[] = [
	{
		title: 'Mes fantômes',
		description:
			'Avez-vous chez vous un objet qui vous fait penser à quelqu’un ? Qui vous évoque un souvenir précis dès l’instant où vous y posez le regard ? Ce bureau que l’on devine dans ce petit format en est empli. Ces souvenirs sont si prégnants qu’ils m’apparaissent comme des fantômes coincés dans une boucle de souvenir sans fin.',
		year: 2025, // à adapter
		preview: '/assets/paintings/mes-fantomes.jpg',
		link: '18-mes-fantomes',
		views: ['/assets/paintings/mes-fantomes.jpg'],
		technique: 'Acrylique sur carton gris',
		dimensions: { height: 15, width: 15 }
	},
	{
		title: 'Un reflet III',
		description:
			'Le médium utilisé pour cette toile porte en lui un mystère. Issu du cellier de ma grand-mère, qui l’avait elle-même hérité de sa propre mère, il traverse les générations comme un fragment d’histoire familiale. C’est sur ce support chargé de mémoire que j’inscris mon souvenir, celui d’une rencontre marquante qui a profondément influencé ma pratique architecturale.',
		year: 2025,
		preview: '/assets/paintings/un-reflet-III_main.png',
		link: 'un-reflet-III',
		views: ['/assets/paintings/un-reflet-III_main.png'],
		technique: 'Huile sur toile',
		dimensions: { height: 70, width: 50 }
	},
	{
		title: 'Céleste',
		description:
			"Ce tableau entremêle deux souvenirs : un regard chargé de passion et l’image d’une lamelle de météorite observée au microscope. Les formes et les couleurs se superposent, évoquant à la fois l’infiniment petit et l’infiniment grand, le minéral et l’émotion. Entre abstraction et figuration, le regard apparaît et disparaît, comme une trace persistante dans la mémoire.\n",
		year: 2024,
		preview: '/assets/paintings/celeste_main.png',
		link: 'celeste',
		views: ['/assets/paintings/celeste_main.png'],
		technique: 'Acrylique, papier sur toile',
		dimensions: { height: 80, width: 80 }
	},
	{
		title: 'La falaise au matin',
		description: '', // description absente dans le document
		year: 2024,
		preview: '/assets/tmp-shapes.png', // Empty
		link: '5-falaise-au-matin',
		views: ['/assets/tmp-shapes.png'], // Empty
		technique: 'Acrylique sur toile',
		dimensions: { height: 24, width: 18 }
	},
	{
		title: 'Elévation',
		description:
			"Parfois, l’esprit s'élève et devient un tout. Dans ces moments flottants presque mystiques où la perception est altérée, le moindre détail devient une aventure.",
		year: 2024,
		preview: '/assets/paintings/elevation_main.jpg',
		link: 'elevation',
		views: ['/assets/paintings/elevation_main.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 29, width: 29 }
	},
	{
		title: 'Levée du rideau de brume',
		description: 'Ce tableau a été peint à un moment critique, il symbolise la libération d’une situation qui semblait perdue et insolvable.',
		year: 2024,
		preview: '/assets/tmp-shapes.png', // Empty
		link: '7-levee-rideau-brume',
		views: ['/assets/tmp-shapes.png'], // Empty
		technique: 'Huile et acrylique sur toile',
		dimensions: { height: 50, width: 40 }
	},
	{
		title: 'Piégée',
		description: 'La liberté chérie au travers d’une fenêtre à barreaux.',
		year: 2024,
		preview: '/assets/tmp-shapes.png',  // EMPTY
		link: '14-piegee',
		views: ['/assets/tmp-shapes.png'],  // EMPTY
		technique: 'Huile et acrylique sur toile',
		dimensions: {
			height: 0,
			width: 0
		} // dimensions non précisées
	},
	{
		title: 'Un reflet I',
		description:
			"Lors d'un repas entre amis dans leur salon, les images se déformaient sur une surface cylindrique. Elles me faisaient penser à l’altération des images de la mémoire. Voici l'altération de l’altération.",
		year: 2024,
		preview: '/assets/paintings/un-reflet-I_main.jpg',
		link: 'un-reflet-I',
		views: ['/assets/paintings/un-reflet-I_main.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 165, width: 30 }
	},
	{
		title: 'Les cimes',
		description:
			'Ce tableau transcrit un moment pivot pour quelqu’un qui m’est cher. Il inspire à la rêverie et la contemplation de l’instant présent comme prendre le temps de s’allonger en forêt pour observer danser les cimes des arbres animées par le vent.',
		year: 2023,
		preview: '/assets/paintings/les-cimes_main.jpg',
		link: 'les-cimes',
		views: ['/assets/paintings/les-cimes_main.jpg'],
		technique: 'Acrylique sur toile',
		dimensions: {
			height: 0,
			width: 0
		} // dimensions non précisées
	},
	{
		title: 'Discordance',
		description:
			'Les corps se déhanchaient sous le rythme de la musique, une demi-pénombre régnait en ces lieux. Quelques spots, çà et là, venaient caresser ton visage. L’ambiance était festive, tout semblait s’animer autour de toi, pourtant ton regard était fermé, tu semblais en dehors de ce temps, perdu dans une profonde mélancolie d’une époque qui jamais plus ne reviendra.',
		year: 2023,
		preview: '/assets/paintings/discordance_main.png',
		link: 'discordance',
		views: ['/assets/paintings/discordance_main.png'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: 'Une idée au loin dans le tumulte du quotidien',
		description: "Ci-gît la cristallisation d’une idée fixe au loin. Un but dont le parcours est semé d'embûches.",
		year: 2023,
		preview: '/assets/tmp-shapes.png', // Empty
		link: 'idee-au-loin',
		views: ['/assets/tmp-shapes.png'], // Empty
		technique: 'Huile et mycelium sur grain de millet collé sur toile',
		dimensions: { height: 60, width: 50 }
	},
	{
		title: 'Bitter',
		description:
			'Il fait chaud ce jour-là, pour se désaltérer, il se sert un verre de Campari Tonic, les mixtures dansent, virevoltent et se transforment sous le prisme de la forme.',
		year: 2020,
		preview: '/assets/paintings/bitter_main.jpg',
		link: 'bitter',
		views: ['/assets/paintings/bitter_main.jpg'],
		technique: 'Peinture à l’huile sur toile',
		dimensions: { height: 70, width: 70 }
	},
	{
		title: 'Esprit Embrumé',
		description: 'Un regard qui disparaît dans le froid mordant des regrets.',
		year: 2020,
		preview: '/assets/paintings/esprit-embrume_main.jpg',
		link: 'esprit-embrume',
		views: ['/assets/paintings/esprit-embrume_main.jpg'],
		technique: 'Peinture acrylique et huile sur toile',
		dimensions: { height: 100, width: 40 }
	},
	{
		title: 'Toise de croissance',
		description:
			'Entre deux confinements, j’ai voulu faire pousser un arbre dans la maison. Un arbre pour grimper, rêver, s’évader. Une cabane tout en haut comme repaire secret, et une échelle pour suivre les enfants qui grandissent. Dans les branches, j’ai caché des animaux : un petit jeu à deux, pour apprendre leurs noms et inventer des histoires au fil du temps.',
		year: 2020,
		preview: '/assets/paintings/toise-de-croissance_main.jpg',
		link: '17-toise-de-croissance',
		views: ['/assets/paintings/toise-de-croissance_main.jpg', '/assets/paintings/toise-de-croissance_detail-1.jpg', '/assets/paintings/toise-de-croissance_detail-2.jpg'],
		technique: 'Peinture acrylique sur mur',
		dimensions: {
			height: 0,
			width: 0
		} // dimensions non précisées (œuvre murale)
	},
	{
		title: 'Submergée',
		description:
			'En 2019, une découverte fortuite : un nodule thyroïdien, révélant la fragilité du corps et la fugacité de l’existence. Deux ans plus tôt, en 2017, l’expérience de la maternité avait chamboulé mon univers de doutes et d’un amour incommensurable. Entre la vie qui naît et la conscience de la fragilité de nos corps, ce tableau est le reflet d’un tiraillement intime, une oscillation entre émerveillement et inquiétude et la prise de conscience de ma propre mortalité. Chaque trait, chaque nuance traduit l’écho de ces émotions entremêlées, entre création et disparition, entre angoisse et beauté. (Bien plus tard, j’ai appris que la grossesse pouvait favoriser l’apparition de ces nodules… Comme si, dans l’élan même de la vie, s’inscrivait déjà la conscience de sa fin.)',
		year: 2019,
		preview: '/assets/paintings/submergee_main.jpg',
		link: 'submergee',
		views: ['/assets/paintings/submergee_main.jpg'],
		technique: 'Acrylique sur toile, broderie et chutes de tissus',
		dimensions: { height: 50, width: 40 }
	},
	{
		title: 'Errance',
		description:
			'Un souvenir de la rue des Foulons, la nuit est éclairée par la lune. Tel fut le tableau changeant au fil des saisons qu’offrait la fenêtre de ma chambre.',
		year: 2019,
		preview: '/assets/paintings/errance_main.png',
		link: '13-errance',
		views: ['/assets/paintings/errance_main.png'],
		technique: 'Acrylique sur toile',
		dimensions: {
			height: 0,
			width: 0
		} // dimensions non précisées
	},
	{
		title: 'Ambrée',
		description:
			"L'expérimentation a débuté enfant, je collectais de la sève d’abricotier pour y inventer des bijoux avec du branchage. En 2015, alors qu’elle s’écoulait du tronc sous une chaleur de plomb, l’idée me vint de la faire fondre sur un support et d’attendre qu’elle soit plus stable.",
		year: 2015,
		preview: '/assets/tmp-shapes.png',  // Empty
		link: 'ambree',
		views: ['/assets/tmp-shapes.png'],  // Empty
		technique: "Gomme d'abricotier avec acrylique sur bois",
		dimensions: { height: 42, width: 30 }
	},

	{
		title: '14',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		year: 2000,
		preview: '/assets/paintings/14.jpg',
		link: '14',
		views: ['/assets/paintings/14.jpg', '/assets/paintings/14.jpg', '/assets/paintings/14.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 },
	},
	{
		title: '15',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		year: 2000,
		preview: '/assets/paintings/15.jpg',
		link: '15',
		views: ['/assets/paintings/15.jpg', '/assets/paintings/15.jpg', '/assets/paintings/15.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 },
	},
	{
		title: '17',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		year: 2000,
		preview: '/assets/paintings/17.jpg',
		link: '17',
		views: ['/assets/paintings/17.jpg', '/assets/paintings/17.jpg', '/assets/paintings/17.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 },
	},
];

export const paintingsByYear: ArtWorkByYear = paintings
	.reduce<ArtWorkByYear>((acc, painting) => {
		(acc[painting.year] ||= []).push(painting);
		return acc;
	}, {});