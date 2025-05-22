<script lang="ts">
	import Header from '$lib/components/Header.svelte';
    import '../../app.css';
    import { page } from '$app/stores';

    export const prerender = true;

    let { children } = $props();

	let isPaintingPage = $derived($page.url.pathname.startsWith('/painting/'));
	let isIllustrationPage = $derived($page.url.pathname.startsWith('/illustration/'));
</script>


{#if !isPaintingPage && !isIllustrationPage}
    <Header />
{/if}

{@render children()}
