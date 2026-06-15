import { business, services, faqs } from './config';

/** Primary keyword-tuned page metadata. */
export const seo = {
	title: 'Mobile Welding Repair in Knoxville, TN | Koldarc',
	description:
		'Koldarc is Knoxville’s mobile welding service — on-site welding and metal repair for trailers, equipment, structural steel, gates, and custom fabrication across East Tennessee. Call or text for a fast quote.',
	keywords:
		'mobile welding Knoxville, welding repair Knoxville TN, on-site welding, trailer repair welding, mobile welder near me, structural welding Knoxville, East Tennessee welding',
	ogImage: '/og.png'
};

/** Absolute URL helper. */
export const url = (path = '/') => `${business.siteUrl.replace(/\/$/, '')}${path}`;

/**
 * LocalBusiness JSON-LD. A service-area (mobile) business: we publish locality
 * + region + geo and an explicit `areaServed`, but no street address.
 */
export function localBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': url('/#business'),
		name: business.name,
		legalName: business.legalName,
		description: seo.description,
		url: business.siteUrl,
		telephone: business.phoneHref,
		email: business.email,
		image: url(seo.ogImage),
		logo: url('/favicon.svg'),
		priceRange: business.priceRange,
		foundingDate: String(business.foundingYear),
		knowsAbout: [
			'Mobile welding',
			'Welding repair',
			'Trailer repair',
			'Structural steel welding',
			'Aluminum welding',
			'Custom metal fabrication'
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Knoxville',
			addressRegion: business.region,
			postalCode: business.postalCode,
			addressCountry: 'US'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: business.geo.lat,
			longitude: business.geo.lng
		},
		areaServed: business.serviceArea.map((name) => ({
			'@type': 'City',
			name
		})),
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Mobile welding services',
			itemListElement: services.map((s) => ({
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: s.title, description: s.body }
			}))
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '19:00'
		},
		...(business.sameAs.length ? { sameAs: business.sameAs } : {})
	};
}

/** FAQPage JSON-LD built from the shared FAQ list. */
export function faqSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
}

/** BreadcrumbList JSON-LD. `items` = [{name, path}] from home to current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((it, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: it.name,
			item: url(it.path)
		}))
	};
}

/** Service JSON-LD for a service landing page, tied to the LocalBusiness. */
export function serviceSchema(opts: {
	name: string;
	description: string;
	path: string;
	areaServed: string[];
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: opts.name,
		name: opts.name,
		description: opts.description,
		url: url(opts.path),
		provider: { '@id': url('/#business') },
		areaServed: opts.areaServed.map((name) => ({ '@type': 'City', name })),
		availableChannel: {
			'@type': 'ServiceChannel',
			servicePhone: business.phoneHref,
			serviceUrl: url('/#quote')
		}
	};
}

/** Article (BlogPosting) JSON-LD for a guide page. */
export function articleSchema(opts: {
	headline: string;
	description: string;
	path: string;
	datePublished: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: opts.headline,
		description: opts.description,
		datePublished: opts.datePublished,
		dateModified: opts.datePublished,
		image: url(seo.ogImage),
		mainEntityOfPage: { '@type': 'WebPage', '@id': url(opts.path) },
		author: { '@type': 'Organization', name: business.name, '@id': url('/#business') },
		publisher: { '@id': url('/#business') }
	};
}

/** Serialize an object to a safe <script type="application/ld+json"> body. */
export function jsonLd(obj: unknown) {
	// Escape '<' to avoid breaking out of the <script> context.
	return JSON.stringify(obj).replace(/</g, '\\u003c');
}
