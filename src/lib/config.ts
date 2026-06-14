/**
 * Koldarc business info — EDIT THESE VALUES.
 *
 * Everything visitor-facing (phone, email, service area, hours) lives here so
 * you can update the whole site from one file. Replace the placeholders below
 * with the real business details.
 */

export const business = {
	name: 'Koldarc',
	legalName: 'Koldarc LLC', // used in schema; set to the registered name
	tagline: 'Mobile Welding',
	city: 'Knoxville, TN',

	// --- CONTACT: replace with real values --------------------------------
	phone: '(865) 555-0142', // displayed number
	phoneHref: '+18655550142', // tel:/sms: link (E.164, no spaces)
	email: 'hello@koldarc.com',
	// ----------------------------------------------------------------------

	// --- SEO / structured data (used by LocalBusiness schema) --------------
	// The live domain, no trailing slash. Currently the Vercel URL — swap this
	// to your custom domain (e.g. https://koldarc.com) once it's connected.
	siteUrl: 'https://koldarc.vercel.app',
	priceRange: '$$',
	foundingYear: 2024,
	// Knoxville city-center coordinates — fine for a mobile/service-area
	// business. Adjust if you want to center on your home base.
	geo: { lat: 35.9606, lng: -83.9207 },
	// Region/state for NAP. Service-area businesses don't publish a street
	// address, but locality + region still help.
	region: 'TN',
	postalCode: '37902',
	// Profiles that reference this business — used as schema `sameAs` and for
	// trust/consistency. Add your Google Business Profile, Facebook, etc.
	sameAs: [] as string[],
	// ----------------------------------------------------------------------

	// Headline pitch shown under the hero title.
	pitch:
		'On-site welding and metal repair across Knoxville and East Tennessee. We bring the truck, the rig, and the arc straight to your job.',

	// Hours / availability line.
	hours: 'Mon–Sat, 7am–7pm · Emergency calls welcome',

	// Towns you cover — shown in the service-area section.
	serviceArea: [
		'Knoxville',
		'Farragut',
		'Maryville',
		'Oak Ridge',
		'Alcoa',
		'Sevierville',
		'Powell',
		'Clinton',
		'Lenoir City',
		'Halls'
	],

	// Optional social link — leave '' to hide.
	facebook: ''
};

/**
 * What we do. Each card is a real capability of a mobile welding rig.
 */
export const services = [
	{
		icon: 'spark',
		title: 'On-Site Repair Welding',
		body: 'Cracked frames, broken brackets, snapped hitches — we weld it where it sits. No towing, no hauling, no downtime.'
	},
	{
		icon: 'beam',
		title: 'Structural & Steel',
		body: 'Railings, stairs, gates, fencing, and structural steel fabricated and installed on location to spec.'
	},
	{
		icon: 'trailer',
		title: 'Trailer & Equipment',
		body: 'Trailer repairs, gooseneck and bumper hitches, equipment buckets, and farm gear patched up in the field.'
	},
	{
		icon: 'custom',
		title: 'Custom Fabrication',
		body: 'One-off brackets, racks, guards, and custom metalwork built to fit your project the first time.'
	},
	{
		icon: 'aluminum',
		title: 'Aluminum & Stainless',
		body: 'TIG and MIG work on aluminum, stainless, and mild steel — clean welds that hold and look right.'
	},
	{
		icon: 'clock',
		title: 'Emergency Calls',
		body: "Equipment down and costing you money? Call and we'll get a rig rolling to you as fast as we can."
	}
];

/**
 * Trust signals shown in the "Why Koldarc" strip.
 * Replace with what's true for the business.
 */
export const trust = [
	{ stat: 'Insured', label: 'Fully insured & ready to work on your site' },
	{ stat: 'Mobile', label: 'Truck-mounted rig — we come to you' },
	{ stat: 'Fast', label: 'Same-week scheduling, emergency calls answered' },
	{ stat: 'Local', label: 'Knoxville owned & operated' }
];

/**
 * FAQ — answers common search questions AND feeds FAQ schema (rich results).
 * Written to naturally include the phrases people search for: "mobile welding
 * repair," "Knoxville," "come to me," pricing, materials. Edit answers to match
 * how you actually run the business.
 */
export const faqs = [
	{
		q: 'Do you come to my location for welding repairs?',
		a: 'Yes — Koldarc is a fully mobile welding service. We bring a truck-mounted rig to your home, farm, shop, or job site anywhere in Knoxville and East Tennessee, so there’s no need to haul your equipment to us.'
	},
	{
		q: 'What areas around Knoxville do you serve?',
		a: 'We cover Knoxville and the surrounding towns including Farragut, Maryville, Oak Ridge, Alcoa, Sevierville, Powell, Clinton, Lenoir City, and Halls. If you’re a little outside that list, just ask.'
	},
	{
		q: 'What kinds of welding and metal repair do you do?',
		a: 'On-site repair welding (cracked frames, brackets, hitches), structural steel, railings and gates, trailer and equipment repair, and custom fabrication. We work with mild steel, stainless, and aluminum using MIG and TIG.'
	},
	{
		q: 'How much does mobile welding repair cost?',
		a: 'Pricing depends on the job, materials, and travel, but we always give a clear quote before any work starts — no surprise invoices. Call or text a few details and we’ll get you a price fast.'
	},
	{
		q: 'Do you handle emergency or same-day welding calls?',
		a: 'When equipment is down and costing you money, call us and we’ll get a rig rolling to you as fast as we can. Same-week scheduling is the norm and we answer emergency calls.'
	},
	{
		q: 'Are you licensed and insured?',
		a: 'Yes, Koldarc is fully insured and ready to work on your site. We’re locally owned and operated out of Knoxville, TN.'
	}
];
