<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { business } from '$lib/config';
	import { servicePages } from '$lib/content';
	import { localBusinessSchema, breadcrumbSchema } from '$lib/seo';

	const schemas = [
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Services', path: '/services' }
		]),
		localBusinessSchema()
	];
</script>

<Seo
	title="Mobile Welding Services in Knoxville, TN | Koldarc"
	description="The full range of Koldarc's mobile welding services in Knoxville — trailer repair, structural steel, railings & gates, aluminum & stainless, and emergency welding. We come to you."
	path="/services"
	{schemas}
/>

<article class="page">
	<header class="subhero">
		<div class="container">
			<nav class="crumbs" aria-label="Breadcrumb">
				<a href="/">Home</a><span>/</span><span class="here">Services</span>
			</nav>
			<h1>Mobile Welding Services in Knoxville</h1>
			<p class="lede">
				On-site welding and metal repair across {business.city} and East Tennessee. Pick what you
				need — we bring the truck and the rig to you.
			</p>
			<div class="subhero-cta">
				<a class="btn btn-primary" href="tel:{business.phoneHref}">Call {business.phone}</a>
				<a class="btn btn-ghost" href="/#quote">Get a Quote</a>
			</div>
		</div>
	</header>

	<section class="container hub">
		<div class="hub-grid">
			{#each servicePages as svc}
				<a class="hub-card" href="/services/{svc.slug}">
					<h2>{svc.name}</h2>
					<p>{svc.lead}</p>
					<span class="hub-go">Learn more <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</section>
</article>
