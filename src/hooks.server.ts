import type { Handle } from '@sveltejs/kit';
import { PUBLIC_STATIC_ASSET_BASE_URL } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	const url = event.url.toString();

	if (url.startsWith(PUBLIC_STATIC_ASSET_BASE_URL)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}
	if (event.url.pathname.startsWith('/_app/immutable/')) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}

	return response;
};
