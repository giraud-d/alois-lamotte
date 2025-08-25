<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Wave from '$lib/components/Wave.svelte';

	export let withoutName = false;
</script>

{#if !withoutName}
	<header class="hidden bg-gray-800 py-5 text-white md:block">
		<a href="/">
			<h1 class="text-center text-5xl font-bold">Aloïs Lamotte</h1>
		</a>
	</header>
{/if}

<Navbar />
<Wave />
