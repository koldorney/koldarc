<script lang="ts">
	import { enhance } from '$app/forms';
	import { business, services, trust, faqs } from '$lib/config';
	import { locationPages } from '$lib/content';
	import { seo, url, localBusinessSchema, faqSchema, jsonLd } from '$lib/seo';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let submitting = $state(false);
	let openFaq = $state<number | null>(0);

	// Map town name -> location page slug for internal links from the area list.
	const areaSlug = new Map(locationPages.map((l) => [l.name, l.slug]));

	const v = (k: string) => (form?.values as Record<string, string> | undefined)?.[k] ?? '';
	const err = (k: string) => (form?.errors as Record<string, string> | undefined)?.[k];

	// Tiny inline icon set keyed by config.
	const icons: Record<string, string> = {
		spark: 'M13 2 4 14h6l-1 8 9-12h-6z',
		beam: 'M3 4h18v3H3zM3 17h18v3H3zM10.5 7h3v10h-3z',
		trailer: 'M2 7h13v7H2zM15 9h4l3 3v2h-7zM7 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM20 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
		custom: 'M14 2 9 7l3 3 5-5zM8 8l-6 6v4h4l6-6zM18 12l4 4-2 2-4-4z',
		aluminum: 'M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z',
		clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5h-2v6l5 3 1-1.7-4-2.3z'
	};
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<link rel="canonical" href={url('/')} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={business.name} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={url('/')} />
	<meta property="og:image" content={url(seo.ogImage)} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={url(seo.ogImage)} />

	<!-- Local geo hints -->
	<meta name="geo.region" content="US-TN" />
	<meta name="geo.placename" content="Knoxville" />
	<meta name="geo.position" content="{business.geo.lat};{business.geo.lng}" />
	<meta name="ICBM" content="{business.geo.lat}, {business.geo.lng}" />

	<!-- Structured data -->
	{@html `<script type="application/ld+json">${jsonLd(localBusinessSchema())}<\/script>`}
	{@html `<script type="application/ld+json">${jsonLd(faqSchema())}<\/script>`}
</svelte:head>

<span id="top"></span>

<!-- HERO -->
<section class="hero">
	<div class="hero-bg" aria-hidden="true">
		<span class="grid-lines"></span>
		<span class="glow"></span>
		<span class="spark s1"></span>
		<span class="spark s2"></span>
		<span class="spark s3"></span>
	</div>
	<div class="container hero-inner">
		<p class="eyebrow">Mobile Welding Repair · {business.city}</p>
		<h1>
			We Bring<br /><span class="hl">The Arc</span> To You.
		</h1>
		<p class="lead">
			<strong>Mobile welding repair in Knoxville &amp; East Tennessee.</strong>
			{business.pitch}
		</p>

		<div class="hero-cta">
			<a class="btn btn-primary" href="tel:{business.phoneHref}">
				<svg viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z"
					/></svg
				>
				Call {business.phone}
			</a>
			<a class="btn btn-ghost" href="sms:{business.phoneHref}">
				<svg viewBox="0 0 24 24" fill="currentColor"
					><path d="M4 4h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8l-5 4V5a1 1 0 0 1 1-1z" /></svg
				>
				Text for a Quote
			</a>
		</div>

		<ul class="hero-tags">
			<li>On-site &amp; mobile</li>
			<li>Repairs &amp; fabrication</li>
			<li>Emergency calls</li>
			<li>East Tennessee</li>
		</ul>
	</div>
</section>

<!-- SERVICES -->
<section id="services">
	<div class="container">
		<div class="section-head">
			<hr class="hr-arc" />
			<p class="eyebrow" style="margin-top:1rem">What We Do</p>
			<h2>Mobile Welding Repair, Done On Your Job</h2>
			<p>
				Truck-mounted and ready to roll. From a cracked bucket in a field to a railing on a new
				build, we weld it where it sits — no hauling your steel across town.
				<a class="head-link" href="/services">See all services →</a>
			</p>
		</div>

		<div class="grid">
			{#each services as s}
				<a class="card" href={s.href}>
					<span class="card-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="currentColor"><path d={icons[s.icon]} /></svg>
					</span>
					<h3>{s.title}</h3>
					<p>{s.body}</p>
					<span class="card-go">Learn more <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- WHY US -->
<section id="why" class="why">
	<div class="container why-inner">
		<div class="why-copy">
			<hr class="hr-arc" />
			<p class="eyebrow" style="margin-top:1rem">Why Koldarc</p>
			<h2>Less downtime. Stronger welds.</h2>
			<p>
				When something breaks, it's costing you time and money. We show up with a fully equipped rig,
				get you a clear price, and put down welds that hold. No runaround, no surprise invoices.
			</p>
			<a class="btn btn-primary" href="#quote">Get a Free Quote</a>
		</div>
		<div class="why-stats">
			{#each trust as t}
				<div class="stat">
					<span class="stat-num">{t.stat}</span>
					<span class="stat-label">{t.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SERVICE AREA -->
<section id="area">
	<div class="container">
		<div class="section-head">
			<hr class="hr-arc" />
			<p class="eyebrow" style="margin-top:1rem">Where We Work</p>
			<h2>Serving Knoxville &amp; East Tennessee</h2>
			<p>
				Based in {business.city} and rolling out to the surrounding towns. Not on the list? Ask.
				<a class="head-link" href="/service-areas">See all service areas →</a>
			</p>
		</div>
		<ul class="area-list">
			{#each business.serviceArea as town}
				{#if areaSlug.has(town)}
					<li><a href="/service-areas/{areaSlug.get(town)}">{town}</a></li>
				{:else}
					<li>{town}</li>
				{/if}
			{/each}
		</ul>
	</div>
</section>

<!-- FAQ -->
<section id="faq" class="faq">
	<div class="container">
		<div class="section-head">
			<hr class="hr-arc" />
			<p class="eyebrow" style="margin-top:1rem">Common Questions</p>
			<h2>Mobile Welding FAQ</h2>
			<p>Quick answers about how mobile welding repair works in Knoxville. Still curious? Just call.</p>
		</div>
		<ul class="faq-list">
			{#each faqs as item, i}
				<li class="faq-item" class:open={openFaq === i}>
					<button
						class="faq-q"
						aria-expanded={openFaq === i}
						onclick={() => (openFaq = openFaq === i ? null : i)}
					>
						<span>{item.q}</span>
						<span class="faq-mark" aria-hidden="true"></span>
					</button>
					<div class="faq-a">
						<p>{item.a}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- QUOTE -->
<section id="quote" class="quote">
	<div class="container quote-inner">
		<div class="quote-copy">
			<hr class="hr-arc" />
			<p class="eyebrow" style="margin-top:1rem">Get a Quote</p>
			<h2>Tell us about the job</h2>
			<p>
				Send a few details and we'll get right back to you with a price and a time. Need it now?
				Skip the form and call or text.
			</p>
			<div class="quote-direct">
				<a class="direct" href="tel:{business.phoneHref}">
					<span class="direct-k">Call</span>{business.phone}
				</a>
				<a class="direct" href="sms:{business.phoneHref}">
					<span class="direct-k">Text</span>{business.phone}
				</a>
				<a class="direct" href="mailto:{business.email}">
					<span class="direct-k">Email</span>{business.email}
				</a>
			</div>
		</div>

		<div class="quote-card">
			{#if form?.success}
				<div class="thanks">
					<span class="check" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
							><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg
						>
					</span>
					<h3>Got it — thanks!</h3>
					<p>
						Your request is in. We'll reach out shortly. If it's urgent, call us at
						<a href="tel:{business.phoneHref}">{business.phone}</a>.
					</p>
				</div>
			{:else}
				<form
					method="POST"
					action="?/quote"
					use:enhance={() => {
						submitting = true;
						return async ({ update }) => {
							await update();
							submitting = false;
						};
					}}
				>
					{#if form?.formError}
						<p class="form-error">{form.formError}</p>
					{/if}

					<div class="row">
						<label class="field">
							<span>Name</span>
							<input name="name" value={v('name')} placeholder="Your name" autocomplete="name" />
							{#if err('name')}<em>{err('name')}</em>{/if}
						</label>
						<label class="field">
							<span>Phone</span>
							<input
								name="phone"
								value={v('phone')}
								placeholder="(865) 555-0123"
								inputmode="tel"
								autocomplete="tel"
							/>
							{#if err('phone')}<em>{err('phone')}</em>{/if}
						</label>
					</div>

					<div class="row">
						<label class="field">
							<span>Email <small>(optional)</small></span>
							<input
								name="email"
								value={v('email')}
								placeholder="you@email.com"
								inputmode="email"
								autocomplete="email"
							/>
							{#if err('email')}<em>{err('email')}</em>{/if}
						</label>
						<label class="field">
							<span>Job location <small>(optional)</small></span>
							<input
								name="job_location"
								value={v('job_location')}
								placeholder="City or address"
							/>
						</label>
					</div>

					<label class="field">
						<span>Type of work <small>(optional)</small></span>
						<select name="service" value={v('service')}>
							<option value="">Select one…</option>
							{#each services as s}
								<option value={s.title}>{s.title}</option>
							{/each}
							<option value="Other">Something else</option>
						</select>
					</label>

					<label class="field">
						<span>Details</span>
						<textarea
							name="message"
							rows="4"
							placeholder="What needs welding? Material, rough size, and when you need it.">{v('message')}</textarea
						>
						{#if err('message')}<em>{err('message')}</em>{/if}
					</label>

					<!-- honeypot: hidden from humans -->
					<input
						class="hp"
						name="company"
						tabindex="-1"
						autocomplete="off"
						aria-hidden="true"
					/>

					<button class="btn btn-primary submit" type="submit" disabled={submitting}>
						{submitting ? 'Sending…' : 'Send Request'}
					</button>
					<p class="fineprint">We'll only use your info to get back to you about the job.</p>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	/* HERO */
	.hero {
		padding-top: clamp(8rem, 16vw, 11rem);
		padding-bottom: clamp(4rem, 9vw, 7rem);
		overflow: hidden;
	}
	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
		background:
			radial-gradient(120% 90% at 80% -10%, rgba(108, 194, 234, 0.16), transparent 55%),
			radial-gradient(90% 70% at 0% 0%, rgba(109, 181, 255, 0.08), transparent 50%),
			linear-gradient(180deg, var(--steel-900), var(--ink));
	}
	.grid-lines {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 56px 56px;
		mask-image: radial-gradient(110% 80% at 50% 0%, #000 30%, transparent 80%);
		opacity: 0.35;
	}
	.glow {
		position: absolute;
		top: -10%;
		right: 8%;
		width: 340px;
		height: 340px;
		background: radial-gradient(circle, var(--arc-glow), transparent 65%);
		filter: blur(20px);
	}
	.spark {
		position: absolute;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--arc-2);
		box-shadow: 0 0 10px 2px var(--arc-2);
		animation: float 6s ease-in-out infinite;
		opacity: 0.7;
	}
	.spark.s1 {
		top: 30%;
		right: 22%;
		animation-delay: 0s;
	}
	.spark.s2 {
		top: 55%;
		right: 35%;
		width: 3px;
		height: 3px;
		animation-delay: 1.6s;
	}
	.spark.s3 {
		top: 20%;
		right: 40%;
		width: 4px;
		height: 4px;
		animation-delay: 3.1s;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
			opacity: 0.25;
		}
		50% {
			transform: translateY(-18px);
			opacity: 0.9;
		}
	}
	.hero-inner {
		position: relative;
		z-index: 1;
	}
	.hero h1 {
		font-size: clamp(3rem, 9vw, 6rem);
		font-weight: 700;
		margin: 0.8rem 0 1.2rem;
	}
	.hero h1 .hl {
		color: var(--arc);
		text-shadow: 0 0 28px var(--arc-glow);
	}
	.lead {
		max-width: 560px;
		font-size: clamp(1.05rem, 2.4vw, 1.3rem);
		color: var(--mist);
		margin: 0 0 2rem;
	}
	.hero-cta {
		display: flex;
		gap: 0.9rem;
		flex-wrap: wrap;
	}
	.hero-tags {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.4rem;
		padding: 0;
		margin: 2.4rem 0 0;
	}
	.hero-tags li {
		position: relative;
		padding-left: 1.1rem;
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.82rem;
		color: var(--fog);
	}
	.hero-tags li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		width: 6px;
		height: 6px;
		transform: translateY(-50%) rotate(45deg);
		background: var(--arc);
	}

	/* SERVICES GRID */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.1rem;
	}
	.card {
		display: block;
		background: linear-gradient(180deg, var(--steel-800), var(--steel-900));
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.7rem 1.6rem;
		transition:
			transform 0.2s ease,
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: var(--arc);
		box-shadow: var(--shadow);
	}
	.card-icon {
		display: grid;
		place-items: center;
		width: 48px;
		height: 48px;
		border-radius: 11px;
		background: rgba(108, 194, 234, 0.1);
		border: 1px solid rgba(108, 194, 234, 0.25);
		margin-bottom: 1.1rem;
	}
	.card-icon svg {
		width: 24px;
		height: 24px;
		color: var(--arc-2);
	}
	.card h3 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}
	.card p {
		margin: 0;
		color: var(--fog);
		font-size: 0.97rem;
	}
	.card-go {
		display: inline-block;
		margin-top: 1rem;
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.82rem;
		color: var(--arc-2);
	}

	/* shared section-head inline link */
	.head-link {
		display: inline-block;
		margin-left: 0.4rem;
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.82rem;
		color: var(--arc-2);
		white-space: nowrap;
	}
	.head-link:hover {
		text-decoration: underline;
	}

	/* WHY */
	.why {
		background: var(--steel-900);
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	.why-inner {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 3rem;
		align-items: center;
	}
	.why-copy h2 {
		font-size: clamp(2rem, 5vw, 3rem);
		margin: 0.6rem 0 0.9rem;
	}
	.why-copy p {
		color: var(--fog);
		margin: 0 0 1.8rem;
	}
	.why-stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.stat {
		background: var(--steel-800);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.4rem;
	}
	.stat-num {
		display: block;
		font-family: var(--font-head);
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--arc-2);
		letter-spacing: 0.04em;
	}
	.stat-label {
		display: block;
		margin-top: 0.3rem;
		font-size: 0.9rem;
		color: var(--fog);
	}

	/* AREA */
	.area-list {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
		padding: 0;
		margin: 0;
	}
	.area-list li {
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.95rem;
		color: var(--mist);
		padding: 0.6rem 1.15rem;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--steel-800);
		transition:
			border-color 0.2s ease,
			color 0.2s ease;
	}
	.area-list li:hover {
		border-color: var(--arc);
		color: var(--arc-2);
	}
	.area-list li a {
		display: block;
		margin: -0.6rem -1.15rem;
		padding: 0.6rem 1.15rem;
		color: inherit;
	}

	/* FAQ */
	.faq {
		background: var(--steel-900);
		border-top: 1px solid var(--line);
	}
	.faq-list {
		list-style: none;
		margin: 0;
		padding: 0;
		max-width: 820px;
	}
	.faq-item {
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--steel-800);
		margin-bottom: 0.8rem;
		overflow: hidden;
		transition: border-color 0.2s ease;
	}
	.faq-item.open {
		border-color: var(--arc);
	}
	.faq-q {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		text-align: left;
		background: none;
		border: 0;
		cursor: pointer;
		padding: 1.2rem 1.4rem;
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.03em;
		font-size: 1.05rem;
		color: var(--white);
	}
	.faq-q:hover {
		color: var(--arc-2);
	}
	.faq-mark {
		position: relative;
		flex: none;
		width: 16px;
		height: 16px;
	}
	.faq-mark::before,
	.faq-mark::after {
		content: '';
		position: absolute;
		background: var(--arc);
		transition: transform 0.25s ease;
	}
	.faq-mark::before {
		top: 7px;
		left: 0;
		width: 16px;
		height: 2px;
	}
	.faq-mark::after {
		left: 7px;
		top: 0;
		width: 2px;
		height: 16px;
	}
	.faq-item.open .faq-mark::after {
		transform: scaleY(0);
	}
	.faq-a {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.28s ease;
	}
	.faq-item.open .faq-a {
		grid-template-rows: 1fr;
	}
	.faq-a > p {
		overflow: hidden;
		margin: 0;
		padding: 0 1.4rem;
		color: var(--fog);
	}
	.faq-item.open .faq-a > p {
		padding-bottom: 1.3rem;
	}

	/* QUOTE */
	.quote {
		background:
			radial-gradient(80% 60% at 100% 0%, rgba(108, 194, 234, 0.1), transparent 55%),
			var(--steel-900);
		border-top: 1px solid var(--line);
	}
	.quote-inner {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 3rem;
		align-items: start;
	}
	.quote-copy h2 {
		font-size: clamp(2rem, 5vw, 3rem);
		margin: 0.6rem 0 0.9rem;
	}
	.quote-copy > p {
		color: var(--fog);
		margin: 0 0 1.8rem;
	}
	.quote-direct {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.direct {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		font-family: var(--font-head);
		letter-spacing: 0.03em;
		font-size: 1.15rem;
		color: var(--white);
	}
	.direct:hover {
		color: var(--arc-2);
	}
	.direct-k {
		display: inline-grid;
		place-items: center;
		min-width: 64px;
		padding: 0.3rem 0;
		font-size: 0.72rem;
		letter-spacing: 0.16em;
		color: var(--arc-2);
		border: 1px solid rgba(108, 194, 234, 0.3);
		background: rgba(108, 194, 234, 0.08);
		border-radius: 6px;
	}

	.quote-card {
		background: linear-gradient(180deg, var(--steel-800), var(--steel-900));
		border: 1px solid var(--line);
		border-radius: 18px;
		padding: 1.8rem;
		box-shadow: var(--shadow);
	}
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 1rem;
	}
	.field > span {
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.07em;
		font-size: 0.78rem;
		color: var(--mist);
	}
	.field small {
		color: var(--steel-600);
		text-transform: none;
		letter-spacing: 0;
	}
	input,
	select,
	textarea {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--white);
		background: var(--ink);
		border: 1px solid var(--steel-600);
		border-radius: 10px;
		padding: 0.8rem 0.95rem;
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		resize: vertical;
	}
	input::placeholder,
	textarea::placeholder {
		color: #5d6675;
	}
	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--arc);
		box-shadow: 0 0 0 3px var(--arc-glow);
	}
	select {
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%236cc2ea' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		padding-right: 2.4rem;
	}
	.field em {
		font-style: normal;
		font-size: 0.82rem;
		color: var(--err);
	}
	.hp {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		opacity: 0;
	}
	.submit {
		width: 100%;
		justify-content: center;
		margin-top: 0.4rem;
		font-size: 1.1rem;
		padding: 1rem;
	}
	.submit:disabled {
		opacity: 0.6;
		cursor: wait;
	}
	.fineprint {
		text-align: center;
		font-size: 0.8rem;
		color: var(--steel-600);
		margin: 0.9rem 0 0;
	}
	.form-error {
		background: rgba(255, 107, 107, 0.1);
		border: 1px solid rgba(255, 107, 107, 0.35);
		color: #ffb3b3;
		padding: 0.8rem 1rem;
		border-radius: 10px;
		margin: 0 0 1.2rem;
		font-size: 0.92rem;
	}
	.thanks {
		text-align: center;
		padding: 1.5rem 0.5rem;
	}
	.check {
		display: grid;
		place-items: center;
		width: 60px;
		height: 60px;
		margin: 0 auto 1.1rem;
		border-radius: 50%;
		background: rgba(93, 211, 158, 0.12);
		border: 1px solid rgba(93, 211, 158, 0.4);
		color: var(--ok);
	}
	.check svg {
		width: 30px;
		height: 30px;
	}
	.thanks h3 {
		font-size: 1.6rem;
		margin-bottom: 0.6rem;
	}
	.thanks p {
		color: var(--fog);
		margin: 0;
	}
	.thanks a {
		color: var(--arc-2);
	}

	@media (max-width: 860px) {
		.why-inner,
		.quote-inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
	@media (max-width: 540px) {
		.row {
			grid-template-columns: 1fr;
			gap: 0;
		}
		.hero-cta .btn {
			flex: 1 1 100%;
			justify-content: center;
		}
	}
</style>
