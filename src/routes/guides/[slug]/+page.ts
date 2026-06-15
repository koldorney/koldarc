import { error } from '@sveltejs/kit';
import { getGuide, guides } from '$lib/guides';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => guides.map((g) => ({ slug: g.slug }));

export const load: PageLoad = ({ params }) => {
	const guide = getGuide(params.slug);
	if (!guide) error(404, 'Guide not found');
	return { guide };
};
