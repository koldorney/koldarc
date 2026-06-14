<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { business } from '$lib/config';
	import { locationPages } from '$lib/content';
	import { localBusinessSchema, breadcrumbSchema } from '$lib/seo';

	const schemas = [
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Service Areas', path: '/service-areas' }
		]),
		localBusinessSchema()
	];
</script>

<Seo
	title="Mobile Welding Service Areas | Knoxville & East Tennessee — Koldarc"
	description="Koldarc brings mobile welding to Knoxville, Farragut, Maryville, Oak Ridge, Alcoa, Sevierville and the surrounding East Tennessee towns. Find your area and get a quote."
	path="/service-areas"
	{schemas}
/>

<article class="page">
	<header class="subhero">
		<div class="container">
			<nav class="crumbs" aria-label="Breadcrumb">
				<a href="/">Home</a><span>/</span><span class="here">Service Areas</span>
			</nav>
			<h1>Where We Work</h1>
			<p class="lede">
				Based in {business.city} and rolling out across East Tennessee. Find your town below — and
				if you don't see it, just ask.
			</p>
			<div class="subhero-cta">
				<a class="btn btn-primary" href="tel:{business.phoneHref}">Call {business.phone}</a>
				<a class="btn btn-ghost" href="/#quote">Get a Quote</a>
			</div>
		</div>
	</header>

	<section class="container hub">
		<div class="hub-grid">
			{#each locationPages as loc}
				<a class="hub-card" href="/service-areas/{loc.slug}">
					<h2>{loc.name}</h2>
					<p>{loc.lead}</p>
					<span class="hub-go">Mobile welding in {loc.name} <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</section>
</article>
