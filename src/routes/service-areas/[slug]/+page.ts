import { error } from '@sveltejs/kit';
import { getLocation, locationPages } from '$lib/content';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => locationPages.map((l) => ({ slug: l.slug }));

export const load: PageLoad = ({ params }) => {
	const location = getLocation(params.slug);
	if (!location) error(404, 'Service area not found');
	return { location };
};
