<script lang="ts">
	import { business } from '$lib/config';
	import { seo as siteSeo, url, jsonLd } from '$lib/seo';

	let {
		title,
		description,
		path = '/',
		schemas = []
	}: {
		title: string;
		description: string;
		path?: string;
		schemas?: unknown[];
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url(path)} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={business.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url(path)} />
	<meta property="og:image" content={url(siteSeo.ogImage)} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={url(siteSeo.ogImage)} />

	{#each schemas as schema}
		{@html `<script type="application/ld+json">${jsonLd(schema)}<\/script>`}
	{/each}
</svelte:head>
