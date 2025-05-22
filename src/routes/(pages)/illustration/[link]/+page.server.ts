export const prerender = true;

import { illustrations } from '$lib/data/illustrations';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	return [
		...illustrations.map(artWork => ({
			link: artWork.link,
		}))
	];
}