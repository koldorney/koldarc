/**
 * SEO landing-page content — service pages and city/location pages.
 *
 * Each entry becomes its own prerendered, indexable page with a unique
 * title, meta description, and body copy. The copy here is written to be
 * genuinely useful and distinct per page (no spun boilerplate, which Google
 * penalizes as "doorway pages").
 *
 * SAFE-CLAIMS RULE: this copy only states things that are safe and true for a
 * mobile welding business (insured, mobile, Knoxville-based, MIG/TIG, comes to
 * you). It deliberately avoids invented specifics — years in business, prices,
 * certifications, named jobs. Add those yourself to make each page even stronger.
 */

export type Section = { h2: string; body: string };

export type ServicePage = {
	slug: string;
	name: string; // nav / card label
	metaTitle: string;
	metaDescription: string;
	h1: string;
	lead: string;
	intro: string;
	sections: Section[];
	jobs: string[]; // "common jobs" bullets
};

export type LocationPage = {
	slug: string;
	name: string; // "Farragut"
	metaTitle: string;
	metaDescription: string;
	h1: string;
	lead: string;
	intro: string;
	context: string; // unique, town-specific paragraph
};

export const servicePages: ServicePage[] = [
	{
		slug: 'trailer-welding-repair',
		name: 'Trailer & Equipment Welding',
		metaTitle: 'Trailer Welding Repair in Knoxville, TN | Koldarc Mobile Welding',
		metaDescription:
			'Mobile trailer and equipment welding repair in Knoxville. We come to you to fix cracked frames, broken hitches, ramps, and bent tongues. Call or text for a fast quote.',
		h1: 'Trailer & Equipment Welding Repair',
		lead: 'Cracked trailer frame or busted hitch? We bring the rig to you and weld it back stronger than new — no hauling required.',
		intro:
			'Trailers take a beating, and the failures always seem to happen at the worst time. Koldarc is a fully mobile welding service, so instead of dragging a damaged trailer across Knoxville to a shop, we drive to wherever it sits — your driveway, the farm, a job site, or the side of the road — and make the repair on the spot.',
		sections: [
			{
				h2: 'What we repair',
				body: 'We handle the welds that keep a trailer safe and legal: cracked or rusted frame rails, broken cross members, bent tongues, snapped coupler and hitch mounts, gooseneck and bumper-pull connections, fender and ramp repairs, and worn gate hinges. If it carries a load, we can put it back in service.'
			},
			{
				h2: 'Why on-site matters for trailers',
				body: 'A trailer with a cracked frame often is not safe (or legal) to tow to a shop in the first place. Mobile repair removes that risk entirely — we assess and weld it where it stands, so you are not putting yourself or other drivers in danger just to get the work done.'
			},
			{
				h2: 'Built to hold',
				body: 'Trailer welds carry real weight and constant vibration, so we prep the metal properly, weld to penetration, and reinforce the repair where it makes sense. The goal is a fix that outlasts the original, not a quick tack that fails again next season.'
			}
		],
		jobs: [
			'Cracked or rusted frame rails',
			'Broken or bent hitch & coupler mounts',
			'Gooseneck & bumper-pull repairs',
			'Ramp, gate & hinge welds',
			'Utility, equipment & livestock trailers',
			'Fender and cross-member replacement'
		]
	},
	{
		slug: 'structural-steel-welding',
		name: 'Structural Steel Welding',
		metaTitle: 'Structural Steel Welding in Knoxville, TN | Mobile Welder — Koldarc',
		metaDescription:
			'On-site structural steel welding in Knoxville and East Tennessee — beams, columns, supports, stairs, and repairs fabricated and welded to spec where you need them.',
		h1: 'Structural Steel Welding',
		lead: 'Beams, columns, supports, and steel repairs welded on location and built to hold the load.',
		intro:
			'When the steel matters, the welds matter more. Koldarc provides on-site structural welding across Knoxville and East Tennessee for contractors, property owners, and anyone who needs steel joined, reinforced, or repaired without trucking it off-site. We weld where the work is.',
		sections: [
			{
				h2: 'Where we help',
				body: 'New construction and remodels, post and beam connections, steel stair stringers and landings, lintels and headers, column base plates, equipment supports, and reinforcement of existing structures. We work alongside your crew or handle the steel scope start to finish.'
			},
			{
				h2: 'Repair & reinforcement',
				body: 'Older steel cracks, rusts, and gets overloaded. We cut out failed sections, weld in new material, and add gussets or plates to bring a structure back to strength — a far cheaper path than replacement when it is done right.'
			},
			{
				h2: 'Done to spec',
				body: 'Structural work is not the place for guesswork. We prep, fit, and weld to the requirements of the job, and we are fully insured so contractors and property owners can bring us onto a site with confidence.'
			}
		],
		jobs: [
			'Beam & column connections',
			'Steel stairs, stringers & landings',
			'Lintels, headers & supports',
			'Base plates & anchor repairs',
			'Reinforcing & retrofitting existing steel',
			'Equipment & rooftop supports'
		]
	},
	{
		slug: 'railing-gate-fabrication',
		name: 'Railings, Gates & Fencing',
		metaTitle: 'Railing, Gate & Fence Welding in Knoxville, TN | Koldarc',
		metaDescription:
			'Custom railings, gates, and metal fencing welded and installed on-site in Knoxville. Handrails, stair rails, driveway gates, and repairs — fabricated to fit. Get a quote.',
		h1: 'Railings, Gates & Fence Welding',
		lead: 'Custom handrails, stair rails, driveway gates, and fencing — fabricated and installed to fit your space.',
		intro:
			'Railings and gates are equal parts safety and curb appeal, and the difference between a good one and a bad one is the fit. Koldarc fabricates and welds metal railings, gates, and fencing on-site in Knoxville, measuring and building to your actual openings instead of forcing in something off the shelf.',
		sections: [
			{
				h2: 'What we build',
				body: 'Interior and exterior handrails, deck and porch railings, stair rails to code, driveway and walk-through gates, metal fence sections and posts, and security grilles. We also repair sagging gates, loose railings, and rusted-through posts.'
			},
			{
				h2: 'Measured and welded to fit',
				body: 'Because we fabricate on location, your railing or gate is built to the real dimensions of your stairs, deck, or driveway — square, level, and solidly anchored. No gaps, no wobble, no "close enough."'
			},
			{
				h2: 'Function and finish',
				body: 'A railing has to be safe to grab and a gate has to swing true for years. We build for strength first, then clean up the welds so the finished piece looks as good as it holds.'
			}
		],
		jobs: [
			'Handrails & stair rails to code',
			'Deck & porch railings',
			'Driveway & walk-through gates',
			'Metal fencing & posts',
			'Gate & hinge repairs',
			'Security grilles & guards'
		]
	},
	{
		slug: 'aluminum-stainless-welding',
		name: 'Aluminum & Stainless Welding',
		metaTitle: 'Aluminum & Stainless Welding in Knoxville, TN | TIG & MIG — Koldarc',
		metaDescription:
			'Mobile aluminum and stainless steel welding in Knoxville. TIG and MIG work on boats, trailers, railings, food-service, and equipment — clean welds that hold. Call for a quote.',
		h1: 'Aluminum & Stainless Welding',
		lead: 'TIG and MIG welding on aluminum and stainless — for the jobs that need clean, precise, corrosion-resistant welds.',
		intro:
			'Aluminum and stainless are less forgiving than mild steel — they need the right process, the right prep, and a steady hand. Koldarc brings mobile TIG and MIG welding to Knoxville for the projects where a clean, strong, good-looking weld actually matters.',
		sections: [
			{
				h2: 'Aluminum work',
				body: 'Boat hulls and transoms, aluminum trailers and ramps, truck toolboxes and tanks, brackets, and equipment housings. Aluminum pulls heat and oxidizes fast, so we clean and weld it properly to avoid the porous, weak welds it is famous for when rushed.'
			},
			{
				h2: 'Stainless work',
				body: 'Railings, food-service and commercial kitchen equipment, handrails, and outdoor fixtures where corrosion resistance and a clean finish are the whole point. TIG gives us the control to keep the welds tight and the metal looking right.'
			},
			{
				h2: 'The right process, on-site',
				body: 'We bring the equipment and the experience to you, matching the process and filler to the base metal so the repair holds up to weather, vibration, and use — not just long enough to get out of the driveway.'
			}
		],
		jobs: [
			'Aluminum boats, hulls & transoms',
			'Aluminum trailers, ramps & toolboxes',
			'Stainless railings & fixtures',
			'Food-service & commercial kitchen equipment',
			'Brackets, tanks & housings',
			'TIG & MIG on thin and thick stock'
		]
	},
	{
		slug: 'on-site-repair-welding',
		name: 'On-Site Repair Welding',
		metaTitle: 'On-Site Welding Repair in Knoxville, TN | Mobile Welder — Koldarc',
		metaDescription:
			'General mobile welding repair in Knoxville — brackets, frames, gates, railings, equipment, and farm gear welded where it sits. We bring the truck and the rig to you.',
		h1: 'On-Site Repair Welding',
		lead: 'Broke, cracked, or snapped? If it is metal and it failed, there is a good chance we can weld it where it sits.',
		intro:
			'Not every job fits a neat category — sometimes a bracket sheared off, a frame cracked, or a piece of equipment just gave out. Koldarc is built for exactly that. We are a mobile welding service in Knoxville, so we load up the truck, drive to you, and handle the repair on location.',
		sections: [
			{
				h2: 'The everyday repairs',
				body: 'Cracked frames and brackets, broken hitches and mounts, snapped supports, failed welds, farm and ranch equipment, mower decks, loader buckets, fence and gate damage, and the one-off metal problems that do not have an obvious home. If it carries load or takes abuse, bring it to us — or rather, we bring ourselves to it.'
			},
			{
				h2: 'No hauling, no downtime',
				body: 'The whole point of mobile welding is keeping your gear in place and your day moving. Instead of disassembling, loading, and trucking a heavy part across town, we show up with everything needed to assess and weld it right there.'
			},
			{
				h2: 'A fair price, up front',
				body: 'We look at the job, tell you what it takes, and quote it before we strike an arc — no surprise invoices. If a repair is not the right call, we will tell you that too.'
			}
		],
		jobs: [
			'Cracked frames, brackets & supports',
			'Broken hitches & mounts',
			'Farm, ranch & equipment repair',
			'Loader buckets & mower decks',
			'Failed or broken prior welds',
			'One-off metal repairs of all kinds'
		]
	},
	{
		slug: 'emergency-mobile-welding',
		name: 'Emergency Mobile Welding',
		metaTitle: 'Emergency Mobile Welding in Knoxville, TN | Koldarc',
		metaDescription:
			'Emergency mobile welding in Knoxville and East Tennessee. Equipment down and costing you money? We get a rig rolling to your site fast. Call or text Koldarc now.',
		h1: 'Emergency Mobile Welding',
		lead: 'Equipment down and costing you money by the hour? Call and we get a rig rolling your way as fast as we can.',
		intro:
			'Breakdowns do not wait for business hours, and a piece of down equipment can stall an entire crew or operation. Koldarc offers emergency mobile welding across Knoxville and East Tennessee — when a weld is the only thing standing between you and getting back to work, we move.',
		sections: [
			{
				h2: 'When to call',
				body: 'A cracked frame that cannot move, a broken bucket or attachment mid-job, a failed support holding something it should not, equipment that quit in the field, or any metal failure that is bleeding time and money. If waiting is the expensive option, that is exactly when mobile welding earns its keep.'
			},
			{
				h2: 'How it works',
				body: 'Call or text with the situation and your location. We will tell you straight whether we can roll, give you a window, and get the truck and rig to your site to assess and weld on the spot — no towing, no waiting on a shop queue.'
			},
			{
				h2: 'Get back to work',
				body: 'The goal of an emergency call is simple: a solid, lasting repair that puts your equipment back in service the same trip whenever the job allows. We bring what we need to make that happen.'
			}
		],
		jobs: [
			'Down equipment in the field',
			'Cracked frames that cannot be towed',
			'Broken buckets & attachments',
			'Failed structural supports',
			'Job-site breakdowns',
			'After-hours metal failures'
		]
	}
];

export const locationPages: LocationPage[] = [
	{
		slug: 'knoxville',
		name: 'Knoxville',
		metaTitle: 'Mobile Welding in Knoxville, TN | On-Site Welding Repair — Koldarc',
		metaDescription:
			'Koldarc is Knoxville’s mobile welding service — on-site welding and metal repair for trailers, structural steel, gates, and equipment anywhere in Knox County. Call or text.',
		h1: 'Mobile Welding in Knoxville, TN',
		lead: 'On-site welding and metal repair anywhere in Knoxville and Knox County. We bring the rig to you.',
		intro:
			'Koldarc is a fully mobile welding service based right here in Knoxville. Whether you are downtown, in the Old City, out toward West Knox, or anywhere across Knox County, we bring the truck and the welding rig to your location — home, business, farm, or job site.',
		context:
			'Knoxville is a working city — trucks, trailers, equipment, and steel are part of daily life from the riverfront warehouses to the shops along Kingston Pike. That is exactly the kind of work a mobile welder is built for. Instead of pulling a damaged trailer or a piece of equipment across town and waiting in a shop queue, you get the repair done on-site, the same day whenever the job allows.'
	},
	{
		slug: 'farragut',
		name: 'Farragut',
		metaTitle: 'Mobile Welding in Farragut, TN | On-Site Welder — Koldarc',
		metaDescription:
			'Mobile welding repair in Farragut, TN. Koldarc comes to you for railings, gates, trailers, and metal repair across west Knox County. Get a fast quote — call or text.',
		h1: 'Mobile Welding in Farragut, TN',
		lead: 'On-site welding for Farragut homes and businesses — railings, gates, trailers, and repairs, done at your door.',
		intro:
			'Koldarc brings mobile welding to Farragut and the west Knox County communities, from the neighborhoods off Concord Road to the shops and offices along Kingston Pike. We drive to you, so there is no hauling and no hassle.',
		context:
			'Farragut is heavy on well-kept homes and small businesses, which means a lot of the work here is railings, driveway and pool gates, deck and stair rails, and boat or utility trailer repair for the lake crowd. We fabricate railings and gates to fit your exact space and handle the everyday metal repairs that keep a property safe and looking sharp.'
	},
	{
		slug: 'maryville',
		name: 'Maryville',
		metaTitle: 'Mobile Welding in Maryville, TN | On-Site Welding Repair — Koldarc',
		metaDescription:
			'Mobile welding in Maryville & Blount County, TN. On-site trailer, equipment, structural, and farm welding repair. Koldarc comes to you. Call or text for a quote.',
		h1: 'Mobile Welding in Maryville, TN',
		lead: 'On-site welding across Maryville and Blount County — trailers, equipment, farm gear, and structural repair.',
		intro:
			'Koldarc serves Maryville and the wider Blount County area with fully mobile welding. From town out to the rural properties toward the foothills, we bring the rig to your location and get the repair done where the work is.',
		context:
			'Maryville and Blount County mix manufacturing, agriculture, and a lot of land, so the welding runs the gamut — farm equipment and gates, trailer and hitch repair, structural steel for outbuildings and barns, and equipment that breaks down miles from any shop. Mobile welding is a natural fit out here, where loading up a damaged trailer or a heavy implement just to reach a welder often is not practical.'
	},
	{
		slug: 'oak-ridge',
		name: 'Oak Ridge',
		metaTitle: 'Mobile Welding in Oak Ridge, TN | On-Site Welder — Koldarc',
		metaDescription:
			'Mobile welding repair in Oak Ridge, TN. On-site structural, equipment, railing, and trailer welding for homes and businesses in Anderson County. Call or text Koldarc.',
		h1: 'Mobile Welding in Oak Ridge, TN',
		lead: 'On-site welding for Oak Ridge — structural, equipment, railings, and repairs brought straight to your site.',
		intro:
			'Koldarc provides mobile welding to Oak Ridge and the surrounding Anderson County communities. We bring the truck and welding equipment to your home, business, or facility so the work gets handled on location.',
		context:
			'Oak Ridge has an industrial and technical backbone alongside its neighborhoods, which makes for a steady mix of structural steel work, equipment supports and repairs, handrails and stairs, and the general metal fabrication that facilities and homeowners alike need. Being fully insured and mobile, we can come on-site and knock out the repair without your equipment or steel ever leaving the property.'
	},
	{
		slug: 'alcoa',
		name: 'Alcoa',
		metaTitle: 'Mobile Welding in Alcoa, TN | On-Site Welding Repair — Koldarc',
		metaDescription:
			'Mobile welding in Alcoa, TN. On-site aluminum, trailer, equipment, and structural welding near McGhee Tyson. Koldarc comes to you. Call or text for a quote.',
		h1: 'Mobile Welding in Alcoa, TN',
		lead: 'On-site welding in Alcoa — aluminum, trailers, equipment, and structural repair brought to your door.',
		intro:
			'Koldarc brings mobile welding to Alcoa and the area around McGhee Tyson, serving both the commercial corridor and the surrounding neighborhoods. We come to you, rig and all, and make the repair on-site.',
		context:
			'Alcoa sits at a busy commercial and industrial crossroads near the airport, with plenty of trailers, fleet equipment, and aluminum work in the mix. We handle aluminum and stainless with TIG and MIG, repair trailers and equipment for the businesses moving through the area, and take on the structural and general fabrication that keeps operations running — all without you having to transport anything to a shop.'
	},
	{
		slug: 'sevierville',
		name: 'Sevierville',
		metaTitle: 'Mobile Welding in Sevierville, TN | On-Site Welder — Koldarc',
		metaDescription:
			'Mobile welding in Sevierville & Sevier County, TN. On-site trailer, farm, gate, and equipment welding repair. Koldarc comes to you. Call or text for a fast quote.',
		h1: 'Mobile Welding in Sevierville, TN',
		lead: 'On-site welding across Sevierville and Sevier County — trailers, farm gear, gates, and equipment repair.',
		intro:
			'Koldarc reaches out to Sevierville and the Sevier County communities at the gateway to the Smokies. Mobile welding means we drive to your property — farm, home, business, or job site — and handle the metal repair there.',
		context:
			'Sevier County blends farms and rural acreage with a heavy tourism and hospitality presence, so the work ranges from agricultural gates, fencing, and equipment to trailer repair and railings for cabins and commercial properties. Out here especially, where properties spread across the hills and a trip to town is a real one, having a welder come to you saves the kind of time and hauling that a fixed shop never can.'
	}
];

export const getService = (slug: string) => servicePages.find((s) => s.slug === slug);
export const getLocation = (slug: string) => locationPages.find((l) => l.slug === slug);
