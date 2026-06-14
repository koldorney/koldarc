import { business } from '$lib/config';

// Add more entries here as you add pages (e.g. /services/trailer-repair,
// /knoxville-mobile-welding). Each one is a fresh URL Google can rank.
const routes = ['/'];

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
