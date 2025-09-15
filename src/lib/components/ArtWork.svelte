<script lang="ts">
	import { page } from '$app/stores';
	import type { ArtWork, ArtWorkType } from '$lib/models/ArtWork';
	import ArtWorkDetails from '$lib/components/ArtWorkDetails.svelte';
	import { t } from '$lib/data/translations';

	export let artWorkType: ArtWorkType;
	export let artWorks: ArtWork[];

	$: artWork = artWorks.find((p) => p.link === $page.params.link);
	$: currentIndex = artWork ? artWorks.findIndex((p) => p.link === artWork.link) : -1;
	$: prevArtWork = currentIndex > 0 ? artWorks[currentIndex - 1] : null;
	$: nextArtWork = currentIndex < artWorks.length - 1 ? artWorks[currentIndex + 1] : null;

	function goToPreviousPage() {
		if (prevArtWork) {
			window.location.href = `/${artWorkType}/${prevArtWork.link}`;
		}
	}

	function goToNextPage() {
		if (nextArtWork) {
			window.location.href = `/${artWorkType}/${nextArtWork.link}`;
		}
	}
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-gray-100 px-8 py-4">
		<div class="mx-auto max-w-7xl">
			<a href="/{artWorkType}" class="text-xl text-black transition-opacity hover:opacity-75"> ← Retour à la galerie </a>
		</div>
	</header>
	<section class="container mx-auto flex-1">
		{#if artWork}
			<div class="flex-grow p-8 text-black">
				<ArtWorkDetails {artWork} previousPage={goToPreviousPage} nextPage={goToNextPage} />
			</div>
		{:else}
			<div class="flex flex-grow items-center justify-center text-lg text-black">
				<p>{$t('artWork.notFound')}</p>
			</div>
		{/if}
	</section>
	{#if artWork}
		<section class="bg-gray-100 pb-8">
			<div class="mx-auto mt-8 flex max-w-7xl flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
				{#if prevArtWork}
					<a
						href="/{artWorkType}/{prevArtWork.link}"
						class="text-xl text-black transition-opacity hover:opacity-75"
						aria-label={$t('artWork.navigation.previous')}
					>
						← {prevArtWork.title}
					</a>
				{/if}
				{#if nextArtWork}
					<a
						href="/{artWorkType}/{nextArtWork.link}"
						class="ml-auto text-xl text-black transition-opacity hover:opacity-75"
						aria-label={$t('artWork.navigation.next')}
					>
						{nextArtWork.title} →
					</a>
				{/if}
			</div>
		</section>
	{/if}
</div>
