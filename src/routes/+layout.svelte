<script lang="ts">
	import '../app.css';
	import { business } from '$lib/config';
	import { servicePages, locationPages } from '$lib/content';
	let { children } = $props();

	let scrolled = $state(false);
	let menuOpen = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	const links = [
		{ href: '/services', label: 'Services' },
		{ href: '/service-areas', label: 'Service Areas' },
		{ href: '/#why', label: 'Why Us' },
		{ href: '/#faq', label: 'FAQ' },
		{ href: '/#quote', label: 'Get a Quote' }
	];
</script>

<svelte:window on:scroll={onScroll} />

<header class:scrolled>
	<div class="container bar">
		<a class="brand" href="/" onclick={() => (menuOpen = false)}>
			<span class="mark" aria-hidden="true">
				<svg viewBox="0 0 64 64">
					<rect x="9" y="20" width="17" height="24" rx="3" fill="#46505d" />
					<rect x="38" y="20" width="17" height="24" rx="3" fill="#46505d" />
					<polyline
						points="26,32 30,21 34,43 38,32"
						fill="none"
						stroke="#ff6a1a"
						stroke-width="4.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle cx="32" cy="32" r="4" fill="#ffb340" />
					<circle cx="32" cy="13" r="1.8" fill="#ffb340" />
					<circle cx="32" cy="51" r="1.8" fill="#ffb340" />
				</svg>
			</span>
			<span class="word">{business.name}</span>
		</a>

		<nav class:open={menuOpen}>
			{#each links as l}
				<a href={l.href} onclick={() => (menuOpen = false)}>{l.label}</a>
			{/each}
			<a class="nav-call" href="tel:{business.phoneHref}">{business.phone}</a>
		</nav>

		<a class="header-cta" href="tel:{business.phoneHref}">Call Now</a>

		<button
			class="hamburger"
			class:open={menuOpen}
			aria-label="Menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span><span></span>
		</button>
	</div>
</header>

{@render children()}

<footer>
	<div class="container foot">
		<div class="foot-brand">
			<span class="word">{business.name}</span>
			<p>{business.tagline} · {business.city}</p>
			<p class="muted">{business.hours}</p>
			<div class="foot-contact">
				<a href="tel:{business.phoneHref}">{business.phone}</a>
				<a href="mailto:{business.email}">{business.email}</a>
				<a href="sms:{business.phoneHref}">Text us</a>
			</div>
		</div>

		<nav class="foot-col" aria-label="Services">
			<span class="foot-h">Services</span>
			{#each servicePages as s}
				<a href="/services/{s.slug}">{s.name}</a>
			{/each}
		</nav>

		<nav class="foot-col" aria-label="Service areas">
			<span class="foot-h">Service Areas</span>
			{#each locationPages as l}
				<a href="/service-areas/{l.slug}">{l.name}</a>
			{/each}
			<a class="foot-more" href="/service-areas">All areas →</a>
		</nav>
	</div>
	<div class="container foot-base">
		<span>© {new Date().getFullYear()} {business.name}. Mobile welding, {business.city}.</span>
		<span class="muted">Bring the arc to you.</span>
	</div>
</footer>

<style>
	header {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 50;
		transition:
			background 0.3s ease,
			border-color 0.3s ease,
			backdrop-filter 0.3s ease;
		border-bottom: 1px solid transparent;
	}
	header.scrolled {
		background: rgba(12, 14, 18, 0.85);
		backdrop-filter: blur(12px);
		border-bottom-color: var(--line);
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.mark {
		width: 36px;
		height: 36px;
		display: grid;
		place-items: center;
		border-radius: 9px;
		background: linear-gradient(180deg, var(--steel-700), var(--steel-900));
		border: 1px solid var(--line);
	}
	.mark svg {
		width: 26px;
		height: 26px;
		filter: drop-shadow(0 0 4px var(--arc-glow));
	}
	.word {
		font-family: var(--font-head);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 1.35rem;
		color: var(--white);
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.9rem;
		margin-left: auto;
		margin-right: 1.4rem;
	}
	nav a {
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.92rem;
		color: var(--mist);
		transition: color 0.15s ease;
	}
	nav a:hover {
		color: var(--arc-2);
	}
	.nav-call {
		display: none;
	}

	.header-cta {
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 600;
		font-size: 0.9rem;
		padding: 0.6rem 1.15rem;
		border-radius: 999px;
		background: linear-gradient(180deg, var(--arc-2), var(--arc));
		color: #1a0c02;
		box-shadow: 0 8px 22px -10px var(--arc-glow);
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: 0;
		cursor: pointer;
		padding: 6px;
		margin-left: 0.4rem;
	}
	.hamburger span {
		width: 24px;
		height: 2px;
		background: var(--white);
		transition:
			transform 0.25s ease,
			opacity 0.2s ease;
	}
	.hamburger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	.hamburger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Footer */
	footer {
		border-top: 1px solid var(--line);
		background: var(--steel-900);
		padding: 3rem 0 2rem;
	}
	.foot {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr;
		gap: 2.5rem;
	}
	.foot .word {
		font-size: 1.6rem;
	}
	.foot-brand p {
		margin: 0.4rem 0 0;
		color: var(--fog);
	}
	.foot-brand .muted {
		font-size: 0.9rem;
		color: var(--steel-600);
	}
	.foot-contact {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		margin-top: 1.2rem;
	}
	.foot-contact a {
		font-family: var(--font-head);
		letter-spacing: 0.05em;
		font-size: 1.1rem;
		color: var(--white);
	}
	.foot-contact a:hover {
		color: var(--arc-2);
	}
	.foot-col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.foot-h {
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.78rem;
		color: var(--arc-2);
		margin-bottom: 0.3rem;
	}
	.foot-col a {
		color: var(--fog);
		font-size: 0.92rem;
	}
	.foot-col a:hover {
		color: var(--white);
	}
	.foot-more {
		color: var(--mist) !important;
		font-family: var(--font-head);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.8rem;
		margin-top: 0.2rem;
	}
	.foot-base {
		display: flex;
		justify-content: space-between;
		margin-top: 2.5rem;
		padding-top: 1.4rem;
		border-top: 1px solid var(--line);
		font-size: 0.82rem;
		color: var(--fog);
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.muted {
		color: var(--steel-600);
	}

	@media (max-width: 820px) {
		.header-cta {
			display: none;
		}
		.hamburger {
			display: flex;
		}
		nav {
			position: fixed;
			inset: 72px 0 auto 0;
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
			margin: 0;
			background: rgba(12, 14, 18, 0.97);
			backdrop-filter: blur(12px);
			border-bottom: 1px solid var(--line);
			padding: 0.5rem 22px 1.4rem;
			transform: translateY(-12px);
			opacity: 0;
			pointer-events: none;
			transition:
				transform 0.25s ease,
				opacity 0.25s ease;
		}
		nav.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: auto;
		}
		nav a {
			width: 100%;
			padding: 0.95rem 0;
			border-bottom: 1px solid var(--line);
			font-size: 1.05rem;
		}
		.nav-call {
			display: block;
			color: var(--arc-2) !important;
			border-bottom: 0 !important;
		}
		.foot {
			grid-template-columns: 1fr 1fr;
		}
		.foot-brand {
			grid-column: 1 / -1;
		}
	}
	@media (max-width: 480px) {
		.foot {
			grid-template-columns: 1fr;
		}
	}
</style>
