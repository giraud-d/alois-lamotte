<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Home from './(pages)/home/Home.svelte';
    import Wave from '$lib/components/Wave.svelte';
    import '../app.css';
    import { onMount } from 'svelte';

	let scrollY = $state(0);
	let isNavbarSticky = $state(false);
	let introSection: HTMLElement | null = null;

	onMount(() => {
		const updateIntroHeight = () => {
			if (introSection) {
				isNavbarSticky = scrollY >= introSection.offsetHeight;
			}
		};
		window.addEventListener('resize', updateIntroHeight);
		return () => window.removeEventListener('resize', updateIntroHeight);
	});

	$effect(() => {
		if (introSection) {
			isNavbarSticky = scrollY >= introSection.offsetHeight;
		}
	});
</script>

<!-- Intro fullscreen -->
<svelte:window bind:scrollY />
<div
	bind:this={introSection}
	class="relative min-h-screen bg-cover bg-center bg-no-repeat"
	style="background-image: url('assets/tmp-banner.png');"
>
	<div class="h-24"></div>
	<div class="absolute bottom-10 flex w-full animate-bounce justify-center">
		<svg
			class="h-6 w-6 text-white"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</div>

<div
	class="z-50 w-full transition-all duration-300 ${isNavbarSticky ? 'bg-white/80' : ''}"
	class:sticky={isNavbarSticky}
	class:top-0={isNavbarSticky}
	class:shadow-xl={isNavbarSticky}
	class:backdrop-blur-sm={isNavbarSticky}
>
	<Navbar />
	<Wave />
</div>

<main class="container mx-auto px-5">
	<Home />
</main>

<style>
    @supports (-webkit-touch-callout: none) {
        .min-h-screen {
            min-height: fit-content;
        }
    }

    .sticky {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }
</style>