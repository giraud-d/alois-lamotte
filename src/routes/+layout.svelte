<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="py-5">
	<h1 class="text-center text-5xl font-bold">Aloïs Lamotte</h1>
	<div class="h-96 bg-[url('assets/tmp-banner.png')] bg-fixed"></div>
</div>
<Navbar />

{@render children()}
