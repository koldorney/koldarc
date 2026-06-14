<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { business } from '$lib/config';
	import { locationPages } from '$lib/content';
	import { localBusinessSchema, serviceSchema, breadcrumbSchema } from '$lib/seo';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const s = $derived(data.service);
	const path = $derived(`/services/${s.slug}`);

	const schemas = $derived([
		serviceSchema({
			name: s.name,
			description: s.metaDescription,
			path,
			areaServed: business.serviceArea
		}),
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Services', path: '/services' },
			{ name: s.name, path }
		]),
		localBusinessSchema()
	]);
</script>

<Seo title={s.metaTitle} description={s.metaDescription} {path} {schemas} />

<article class="page">
	<header class="subhero">
		<div class="container">
			<nav class="crumbs" aria-label="Breadcrumb">
				<a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span
					class="here">{s.name}</span
				>
			</nav>
			<h1>{s.h1}</h1>
			<p class="lede">{s.lead}</p>
			<div class="subhero-cta">
				<a class="btn btn-primary" href="tel:{business.phoneHref}">Call {business.phone}</a>
				<a class="btn btn-ghost" href="sms:{business.phoneHref}">Text for a Quote</a>
			</div>
		</div>
	</header>

	<div class="container body">
		<div class="prose">
			<p class="intro">{s.intro}</p>

			{#each s.sections as sec}
				<h2>{sec.h2}</h2>
				<p>{sec.body}</p>
			{/each}
		</div>

		<aside class="sidebar">
			<div class="panel">
				<h3>Common jobs</h3>
				<ul class="ticks">
					{#each s.jobs as job}
						<li>{job}</li>
					{/each}
				</ul>
			</div>
			<div class="panel panel-cta">
				<h3>Need this done?</h3>
				<p>We come to you anywhere in {business.city} & East Tennessee.</p>
				<a class="btn btn-primary block" href="/#quote">Get a Free Quote</a>
				<a class="call-line" href="tel:{business.phoneHref}">or call {business.phone}</a>
			</div>
		</aside>
	</div>

	<section class="related">
		<div class="container">
			<h2>Mobile {s.name.toLowerCase()} across East Tennessee</h2>
			<p class="related-lead">
				We bring {s.name.toLowerCase()} on-site to these communities and the towns around them:
			</p>
			<ul class="chips">
				{#each locationPages as loc}
					<li><a href="/service-areas/{loc.slug}">{loc.name}</a></li>
				{/each}
			</ul>
		</div>
	</section>
</article>
