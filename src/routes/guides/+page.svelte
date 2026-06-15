<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { business } from '$lib/config';
	import { guides } from '$lib/guides';
	import { localBusinessSchema, breadcrumbSchema } from '$lib/seo';

	const schemas = [
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Guides', path: '/guides' }
		]),
		localBusinessSchema()
	];
</script>

<Seo
	title="Mobile Welding Guides & Tips | Knoxville — Koldarc"
	description="Practical guides on mobile welding in Knoxville — what it costs, when to repair vs. replace, trailer frame safety, and what can be welded on-site."
	path="/guides"
	{schemas}
/>

<article class="page">
	<header class="subhero">
		<div class="container">
			<nav class="crumbs" aria-label="Breadcrumb">
				<a href="/">Home</a><span>/</span><span class="here">Guides</span>
			</nav>
			<h1>Welding Guides & Tips</h1>
			<p class="lede">
				Straight answers to the questions we hear most — pricing, safety, and how mobile welding
				works in {business.city} and East Tennessee.
			</p>
		</div>
	</header>

	<section class="container hub">
		<div class="hub-grid">
			{#each guides as g}
				<a class="hub-card" href="/guides/{g.slug}">
					<span class="hub-tag">{g.readMins} min read</span>
					<h2>{g.title}</h2>
					<p>{g.dek}</p>
					<span class="hub-go">Read guide <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</section>
</article>
