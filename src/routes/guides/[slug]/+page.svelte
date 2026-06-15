<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { business } from '$lib/config';
	import { guides } from '$lib/guides';
	import { articleSchema, breadcrumbSchema, localBusinessSchema } from '$lib/seo';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const g = $derived(data.guide);
	const path = $derived(`/guides/${g.slug}`);

	const prettyDate = $derived(
		new Date(g.datePublished + 'T00:00:00').toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);

	const schemas = $derived([
		articleSchema({
			headline: g.title,
			description: g.metaDescription,
			path,
			datePublished: g.datePublished
		}),
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Guides', path: '/guides' },
			{ name: g.title, path }
		]),
		localBusinessSchema()
	]);

	const others = $derived(guides.filter((x) => x.slug !== g.slug).slice(0, 3));
</script>

<Seo title={g.metaTitle} description={g.metaDescription} {path} {schemas} />

<article class="page">
	<header class="subhero">
		<div class="container">
			<nav class="crumbs" aria-label="Breadcrumb">
				<a href="/">Home</a><span>/</span><a href="/guides">Guides</a><span>/</span><span class="here"
					>{g.title}</span
				>
			</nav>
			<h1>{g.title}</h1>
			<p class="lede">{g.dek}</p>
			<p class="byline">{prettyDate} · {g.readMins} min read</p>
		</div>
	</header>

	<div class="container body">
		<div class="prose">
			{#each g.sections as sec}
				<h2>{sec.h2}</h2>
				{#if sec.body}<p>{sec.body}</p>{/if}
				{#if sec.bullets}
					<ul class="ticks ticks-inline">
						{#each sec.bullets as b}
							<li>{b}</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>

		<aside class="sidebar">
			<div class="panel panel-cta">
				<h3>Got a job in mind?</h3>
				<p>Send a photo and a few details — we'll come to you anywhere in {business.city} & East Tennessee.</p>
				<a class="btn btn-primary block" href="/#quote">Get a Free Quote</a>
				<a class="call-line" href="tel:{business.phoneHref}">or call {business.phone}</a>
			</div>
		</aside>
	</div>

	<section class="related">
		<div class="container">
			<h2>More guides</h2>
			<div class="svc-grid">
				{#each others as o}
					<a class="svc-card" href="/guides/{o.slug}">
						<span class="svc-name">{o.title}</span>
						<span class="svc-go" aria-hidden="true">→</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
</article>
