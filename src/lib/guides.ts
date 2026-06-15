/**
 * Guides / blog — genuinely useful, keyword-targeted articles that build
 * topical authority and pull in long-tail search traffic.
 *
 * HONESTY NOTE: these articles give general, industry-accurate information and
 * never quote specific Koldarc prices (every job is quoted up front). Edit
 * freely to match how you actually work.
 */

export type GuideSection = { h2: string; body?: string; bullets?: string[] };

export type Guide = {
	slug: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	dek: string; // standfirst / summary
	datePublished: string; // YYYY-MM-DD
	readMins: number;
	sections: GuideSection[];
};

export const guides: Guide[] = [
	{
		slug: 'how-much-does-mobile-welding-cost-knoxville',
		title: 'How Much Does Mobile Welding Cost in Knoxville?',
		metaTitle: 'How Much Does Mobile Welding Cost in Knoxville? | Koldarc',
		metaDescription:
			'What mobile welding costs in Knoxville and what drives the price — travel, materials, time, and job type. Plus how to get an accurate quote fast.',
		dek: 'Short answer: it depends on the job — but a handful of factors explain almost all of the price. Here is how mobile welding pricing actually works.',
		datePublished: '2026-06-14',
		readMins: 4,
		sections: [
			{
				h2: 'Why there is no flat price',
				body: 'Mobile welding covers everything from a five-minute tack on a gate latch to a half-day structural repair, so no honest welder can give you a single number sight-unseen. What a good one will do is quote the specific job before any work starts. The price comes down to a few clear factors.'
			},
			{
				h2: 'What drives the cost',
				bullets: [
					'Time on the job — how long the actual welding and prep take.',
					'Travel — how far the rig drives to reach you. Local Knoxville calls cost less than the far edges of East Tennessee.',
					'Material — the filler, steel, or stock used, and the type (aluminum and stainless take more time and skill than mild steel).',
					'Prep work — grinding, cleaning rust, cutting out failed metal, and fit-up before the first weld.',
					'Access and conditions — a part welded comfortably in a driveway is quicker than one reached on its back in a field.',
					'Urgency — same-day and emergency calls may carry a premium for dropping everything to come to you.'
				]
			},
			{
				h2: 'Minimum call-out / trip charge',
				body: 'Because a mobile welder brings the entire shop to you, most jobs have a minimum that covers showing up, the truck, fuel, and equipment. For small repairs that minimum is often the whole price. For bigger jobs it folds into the total. The upside is real: you avoid hauling heavy or unsafe-to-tow equipment across town, and you avoid the downtime that costs you far more than the weld.'
			},
			{
				h2: 'How to get an accurate quote fast',
				body: 'The quickest path to a real number is a few details: what broke, what it is made of (steel, aluminum, stainless), a rough size, and your location. A photo helps a lot. With that, we can usually give you a price and a time window without a site visit. Call or text Koldarc and we will get right back to you.'
			}
		]
	},
	{
		slug: 'mobile-welding-vs-taking-it-to-a-shop',
		title: 'Mobile Welding vs. Taking It to a Shop',
		metaTitle: 'Mobile Welding vs. a Shop: Which Is Right for Your Job? | Koldarc',
		metaDescription:
			'When on-site mobile welding beats hauling your work to a shop — and the few times a shop makes more sense. An honest breakdown for Knoxville.',
		dek: 'Mobile welding is not always the answer — but for most repairs it saves you time, money, and risk. Here is how to tell which fits your job.',
		datePublished: '2026-06-14',
		readMins: 3,
		sections: [
			{
				h2: 'When mobile wins',
				bullets: [
					'The item is heavy, bulky, or bolted down — fences, gates, railings, structural steel, large equipment.',
					'It is not safe or legal to move — a trailer with a cracked frame should not be towed to a shop.',
					'Downtime is expensive — equipment that is losing you money every hour it sits.',
					'It is attached to something — a railing on your stairs, a bracket on a building, a gate on its posts.',
					'You simply do not have a way to haul it.'
				]
			},
			{
				h2: 'When a shop might make sense',
				body: 'A fixed shop can be the better call for jobs that need specialized fixturing, a controlled environment, or large-volume fabrication runs — work that benefits from a full stationary setup. If a piece is small, easy to transport, and not urgent, dropping it off is a fine option too.'
			},
			{
				h2: 'The real trade-off',
				body: 'For the everyday repairs most people actually need — a snapped hitch, a cracked frame, a sagging gate, a broken bracket — the math favors mobile. You skip the loading, the hauling, the fuel, and the days your gear is out of service. The welder comes to the work instead of the work coming to the welder, and the repair is done where it sits.'
			}
		]
	},
	{
		slug: 'signs-your-trailer-frame-needs-welding',
		title: '5 Signs Your Trailer Frame Needs Welding',
		metaTitle: '5 Signs Your Trailer Frame Needs Welding (Before It Fails) | Koldarc',
		metaDescription:
			'How to spot a trailer frame, hitch, or coupler problem before it becomes a roadside failure — and what to do about it. A safety guide from Koldarc.',
		dek: 'A trailer rarely fails without warning. Catch these signs early and a quick weld saves you from a dangerous — and expensive — roadside breakdown.',
		datePublished: '2026-06-14',
		readMins: 3,
		sections: [
			{
				h2: '1. Visible cracks at joints and welds',
				body: 'Hairline cracks tend to start where the frame takes the most stress — around the tongue, coupler, axle mounts, and old weld seams. A crack only grows. Caught early it is a small repair; ignored, it can let go under load.'
			},
			{
				h2: '2. Rust that has gone structural',
				body: 'Surface rust is cosmetic. Rust that has eaten through a frame rail, flaked into layers, or left soft, pitted metal is structural — and it weakens the trailer exactly where it needs to be strong. Rusted-through sections can be cut out and new steel welded in.'
			},
			{
				h2: '3. Sagging, sway, or a frame that looks "off"',
				body: 'If the bed sags, the trailer sways more than it used to, or the frame looks visibly bent or twisted, the structure has shifted. That changes how it carries a load and how it tows.'
			},
			{
				h2: '4. A loose or damaged hitch / coupler',
				body: 'Play in the coupler, a bent tongue, or cracked hitch mounts are the failures you least want on the highway. These connection points carry everything and deserve attention the moment they feel wrong.'
			},
			{
				h2: '5. Broken welds on ramps, gates, or supports',
				body: 'Snapped hinge welds, a cracked ramp, or a broken cross member will not strand you the way a frame failure can, but they get worse fast and make the trailer harder and less safe to use.'
			},
			{
				h2: 'What to do',
				body: 'If you spot any of these, stop loading the trailer until it is checked. Because a compromised frame should not be towed, this is a textbook case for mobile welding — we come to where the trailer is, assess it, and make the repair on the spot. Call or text Koldarc with a photo and we will take a look.'
			}
		]
	},
	{
		slug: 'what-can-be-welded-on-site',
		title: 'What Can (and Can’t) Be Welded On-Site?',
		metaTitle: 'What Can Be Welded On-Site? A Mobile Welding Guide | Koldarc',
		metaDescription:
			'A practical rundown of what a mobile welder can fix on location across Knoxville — metals, jobs, and the rare cases that need a shop.',
		dek: 'A mobile rig handles far more than people expect. Here is what we can weld right where it sits — and the few jobs better suited to a shop.',
		datePublished: '2026-06-14',
		readMins: 3,
		sections: [
			{
				h2: 'Metals we work on-site',
				bullets: [
					'Mild / carbon steel — the workhorse of most repairs and fabrication.',
					'Stainless steel — railings, fixtures, food-service and commercial equipment.',
					'Aluminum — boats, trailers, ramps, toolboxes, and brackets (with the right prep and process).'
				]
			},
			{
				h2: 'Common on-site jobs',
				bullets: [
					'Trailer, hitch, and equipment repair',
					'Structural steel, beams, columns, and supports',
					'Railings, stairs, gates, and fencing',
					'Cracked frames, brackets, and broken mounts',
					'Farm and ranch equipment',
					'Custom brackets, racks, and one-off fabrication'
				]
			},
			{
				h2: 'The few jobs that need a shop',
				body: 'Some work is genuinely better in a fixed setting: precision jobs needing specialized fixturing, certain pipe or pressure-vessel work with code requirements, large production fabrication runs, or anything requiring a controlled, contaminant-free environment. When that is the case, a straight answer up front saves everyone time.'
			},
			{
				h2: 'Not sure if your job qualifies?',
				body: 'Most of the time, if it is metal and it is broken, it can be welded where it sits. The fastest way to find out is to ask — send a photo and a quick description to Koldarc and we will tell you straight whether mobile is the right call.'
			}
		]
	}
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
