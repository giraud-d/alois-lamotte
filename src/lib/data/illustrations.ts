import {type ArtWork, type ArtWorkByYear} from '$lib/models/ArtWork';

// Sort by date ASC
export const illustrations: ArtWork[] = [
    {
        title: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2022-10-01',
        preview: '/assets/illustrations/1.jpg',
        link: '1',
        views: ['/assets/illustrations/1.jpg', '/assets/illustrations/1.jpg', '/assets/illustrations/1.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
    {
        title: '2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2023-10-01',
        preview: '/assets/illustrations/2.jpg',
        link: '2',
        views: ['/assets/illustrations/2.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
    {
        title: '3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2024-10-01',
        preview: '/assets/illustrations/3.jpg',
        link: '3',
        views: ['/assets/illustrations/3.jpg', '/assets/illustrations/3.jpg', '/assets/illustrations/3.jpg', '/assets/illustrations/3.jpg', '/assets/illustrations/3.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
    {
        title: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2025-10-01',
        preview: '/assets/illustrations/4.jpg',
        link: '4',
        views: ['/assets/illustrations/4.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
    {
        title: '5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2023-10-01',
        preview: '/assets/illustrations/5.jpg',
        link: '5',
        views: ['/assets/illustrations/5.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
    {
        title: '6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2024-10-01',
        preview: '/assets/illustrations/6.jpg',
        link: '6',
        views: ['/assets/illustrations/6.jpg', '/assets/illustrations/6.jpg', '/assets/illustrations/6.jpg', '/assets/illustrations/6.jpg', '/assets/illustrations/6.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
    {
        title: '7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor, dui id vulputate viverra, lectus orci faucibus lacus, a facilisis metus urna eu lectus. Nulla vitae gravida justo, quis consectetur.',
        date: '2025-10-01',
        preview: '/assets/illustrations/7.jpg',
        link: '7',
        views: ['/assets/illustrations/7.jpg'],
        technique: 'Huile sur toile',
        dimensions: { height: 80, width: 60 },
    },
];

export const illustrationsByYear: ArtWorkByYear = illustrations
    .reduce<ArtWorkByYear>((acc, illustration) => {
        const year = new Date(illustration.date).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(illustration);
        return acc;
    }, {});

Object.keys(illustrationsByYear).forEach((year) => {
    illustrationsByYear[Number(year)].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});