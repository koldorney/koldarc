<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { business } from '$lib/config';
	import { servicePages } from '$lib/content';
	import { localBusinessSchema, breadcrumbSchema } from '$lib/seo';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const l = $derived(data.location);
	const path = $derived(`/service-areas/${l.slug}`);

	const schemas = $derived([
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Service Areas', path: '/service-areas' },
			{ name: l.name, path }
		]),
		localBusinessSchema()
	]);
</script>

<Seo title={l.metaTitle} description={l.metaDescription} {path} {schemas} />

<article class="page">
	<header class="subhero">
		<div class="container">
			<nav class="crumbs" aria-label="Breadcrumb">
				<a href="/">Home</a><span>/</span><a href="/service-areas">Service Areas</a><span>/</span><span
					class="here">{l.name}</span
				>
			</nav>
			<h1>{l.h1}</h1>
			<p class="lede">{l.lead}</p>
			<div class="subhero-cta">
				<a class="btn btn-primary" href="tel:{business.phoneHref}">Call {business.phone}</a>
				<a class="btn btn-ghost" href="sms:{business.phoneHref}">Text for a Quote</a>
			</div>
		</div>
	</header>

	<div class="container body">
		<div class="prose">
			<p class="intro">{l.intro}</p>
			<p>{l.context}</p>
		</div>

		<aside class="sidebar">
			<div class="panel panel-cta">
				<h3>Welding in {l.name}?</h3>
				<p>Tell us about the job and we'll bring the rig to you.</p>
				<a class="btn btn-primary block" href="/#quote">Get a Free Quote</a>
				<a class="call-line" href="tel:{business.phoneHref}">or call {business.phone}</a>
			</div>
		</aside>
	</div>

	<section class="related">
		<div class="container">
			<h2>Mobile welding services in {l.name}</h2>
			<p class="related-lead">Everything we do, brought on-site to {l.name} and the surrounding area:</p>
			<div class="svc-grid">
				{#each servicePages as svc}
					<a class="svc-card" href="/services/{svc.slug}">
						<span class="svc-name">{svc.name}</span>
						<span class="svc-go" aria-hidden="true">→</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
</article>
