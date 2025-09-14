<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	let isPaintingPage = $derived($page.url.pathname.startsWith('/painting/'));
	let isIllustrationPage = $derived($page.url.pathname.startsWith('/illustration/'));
</script>

{#if !isPaintingPage && !isIllustrationPage}
	<Header />
{/if}

{@render children()}

{#if !isPaintingPage && !isIllustrationPage}
	<Footer />
{/if}
