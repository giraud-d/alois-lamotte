<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
    import { page } from '$app/stores';

    let { children } = $props();

	let isPaintingPage = $derived($page.url.pathname.startsWith('/painting/'));
</script>

{#if !isPaintingPage}
	<Header />
{/if}

{@render children()}
