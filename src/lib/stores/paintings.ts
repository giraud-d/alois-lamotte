export interface Painting {
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

export const paintings: Painting[] = [
	{
		title: '10',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
		date: '2022-10-01',
		preview: '/assets/paintings/10.jpg',
		link: '10',
		views: ['/assets/paintings/10.jpg', '/assets/paintings/10.jpg', '/assets/paintings/10.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 80, width: 60 }
	},
	{
		title: '11',
		description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta dictum sapien, sit amet eleifend nisi aliquam eu. Nulla in laoreet turpis. Suspendisse finibus diam vitae dui pellentesque viverra. Nam. ',
		date: '2022-10-01',
		preview: '/assets/paintings/11.jpg',
		link: '11',
		views: ['/assets/paintings/11.jpg', '/assets/paintings/11.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 100, width: 80 }
	},
	{
		title: '12',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum ornare neque, dapibus placerat magna finibus ut. Nunc et metus.\n',
		date: '2022-10-01',
		preview: '/assets/paintings/12.jpg',
		link: '12',
		views: ['/assets/paintings/12.jpg', '/assets/paintings/12.jpg', '/assets/paintings/12.jpg', '/assets/paintings/12.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 90, width: 70 }
	},
	{
		title: '13',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		date: '2022-10-01',
		preview: '/assets/paintings/13.jpg',
		link: '13',
		views: ['/assets/paintings/13.jpg', '/assets/paintings/13.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 120, width: 80 }
	},
	{
		title: '14',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		date: '2022-01-01',
		preview: '/assets/paintings/14.jpg',
		link: '14',
		views: ['/assets/paintings/14.jpg', '/assets/paintings/14.jpg', '/assets/paintings/14.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: '15',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		date: '2022-01-01',
		preview: '/assets/paintings/15.jpg',
		link: '15',
		views: ['/assets/paintings/15.jpg', '/assets/paintings/15.jpg', '/assets/paintings/15.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: '16',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		date: '2022-01-01',
		preview: '/assets/paintings/16.png',
		link: '16',
		views: ['/assets/paintings/16.png', '/assets/paintings/16.png', '/assets/paintings/16.png'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: '17',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		date: '2022-01-01',
		preview: '/assets/paintings/17.jpg',
		link: '17',
		views: ['/assets/paintings/17.jpg', '/assets/paintings/17.jpg', '/assets/paintings/17.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: '18',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim felis, mollis at nulla et, maximus blandit eros. Phasellus malesuada consequat odio nec feugiat. Duis dictum eleifend faucibus. Donec faucibus nisl ac turpis gravida, eu dapibus velit faucibus. Fusce condimentum. ',
		date: '2022-01-01',
		preview: '/assets/paintings/18.jpg',
		link: '18',
		views: ['/assets/paintings/18.jpg', '/assets/paintings/18.jpg', '/assets/paintings/18.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 60, width: 40 }
	},
	{
		title: '19',
		description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta dictum sapien, sit amet eleifend nisi aliquam eu. Nulla in laoreet turpis. Suspendisse finibus diam vitae dui pellentesque viverra. Nam. ',
		date: '2025-10-01',
		preview: '/assets/paintings/19.jpg',
		link: '19',
		views: ['/assets/paintings/19.jpg', '/assets/paintings/19.jpg', '/assets/paintings/19.jpg', '/assets/paintings/19.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 200, width: 150 }
	},
	{
		title: '20',
		description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta dictum sapien, sit amet eleifend nisi aliquam eu. Nulla in laoreet turpis. Suspendisse finibus diam vitae dui pellentesque viverra. Nam. ',
		date: '2025-10-01',
		preview: '/assets/paintings/20.jpg',
		link: '20',
		views: ['/assets/paintings/20.jpg', '/assets/paintings/20.jpg', '/assets/paintings/20.jpg', '/assets/paintings/20.jpg'],
		technique: 'Huile sur toile',
		dimensions: { height: 200, width: 150 }
	},
	{
		title: 'Toise de croissance',
		description: 'Entre deux confinements, j\'ai voulu faire pousser un arbre dans la maison. Un arbre pour grimper, rêver, s\'évader. Une cabane tout en haut comme repaire secret, et une échelle pour suivre les enfants qui grandissent. Dans les branches, j\'ai caché des animaux : un petit jeu à deux, pour apprendre leurs noms et inventer des histoires au fil du temps.',
		date: '2022-10-01',
		preview: '/assets/paintings/toise-de-croissance_main.jpg',
		link: 'toise-de-croissance',
		views: ['/assets/paintings/toise-de-croissance_main.jpg', '/assets/paintings/toise-de-croissance_detail-1.jpg', '/assets/paintings/toise-de-croissance_detail-2.jpg'],
		technique: 'Peinture acrylique sur mur',
		dimensions: { height: 200, width: 150 }
	},
	{
		title: 'Mes Fantômes',
		description: 'Avez-vous chez vous un objet qui vous fait penser à quelqu\'un qui vous évoque un souvenir précis dès l\'instant où vous y posez le regard ? Ce bureau que l\'on devine dans  ce petit format en est empli. Ces souvenirs sont si prégnants qu\'ils m\'apparaissent comme des fantômes coincés dans une boucle de souvenir sans fin.',
		date: '2025-10-01',
		preview: '/assets/paintings/mes-fantomes.jpg',
		link: 'mes-fantomes',
		views: ['/assets/paintings/mes-fantomes.jpg'],
		technique: 'Acrylique sur carton gris',
		dimensions: { height: 30, width: 20 }
	}
]; 