import { business } from '$lib/config';
import { servicePages, locationPages } from '$lib/content';
import { guides } from '$lib/guides';

// All indexable routes, built from the content data so new service/location/
// guide pages are added to the sitemap automatically.
const routes = [
	'/',
	'/services',
	'/service-areas',
	'/guides',
	...servicePages.map((s) => `/services/${s.slug}`),
	...locationPages.map((l) => `/service-areas/${l.slug}`),
	...guides.map((g) => `/guides/${g.slug}`)
];

export const prerender = true;

export function GET() {
	const base = business.siteUrl.replace(/\/$/, '');
	const lastmod = new Date().toISOString().slice(0, 10);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(path) => `	<url>
		<loc>${base}${path}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${path === '/' ? '1.0' : '0.8'}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
