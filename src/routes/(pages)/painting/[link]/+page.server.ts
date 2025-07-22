export const prerender = true;

import { paintings } from '$lib/data/paintings'; // Vos données de peintures

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	return [
		...paintings.map((artWork) => ({
			link: artWork.link
		}))
	];
}
