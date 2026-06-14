import { error } from '@sveltejs/kit';
import { getService, servicePages } from '$lib/content';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => servicePages.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const service = getService(params.slug);
	if (!service) error(404, 'Service not found');
	return { service };
};
