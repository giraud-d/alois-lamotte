<script lang="ts">
	import Home from './(pages)/home/Home.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<!-- Intro fullscreen -->
<div class="relative min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('assets/tmp-banner.png');">
	<div class="h-24"></div>
	<div class="absolute bottom-10 flex w-full animate-bounce justify-center">
		<svg class="h-6 w-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
			<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</div>

<Header withoutName={true} />

<Home />

<style>
	@supports (-webkit-touch-callout: none) {
		.min-h-screen {
			min-height: fit-content;
		}
	}
</style>
