<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$lib/stores/language';
	import { translations } from '$lib/translations';
	import { paintings } from '$lib/stores/paintings';
    import { derived, writable } from 'svelte/store';
    import { onMount } from 'svelte';

	const t = derived(language, () => translations[$language]);
	let currentViewIndex = 0;
	let isModalOpen = false;
	let containerRatio = writable('1/1');

	$: painting = paintings.find(p => p.link === $page.params.link);
	$: currentIndex = painting ? paintings.findIndex(p => p.link === painting.link) : -1;
	$: prevPainting = currentIndex > 0 ? paintings[currentIndex - 1] : null;
	$: nextPainting = currentIndex < paintings.length - 1 ? paintings[currentIndex + 1] : null;

	function handleImageLoad(e: Event) {
		const img = e.target as HTMLImageElement;
		const ratio = img.naturalWidth / img.naturalHeight;
		const limitedRatio = Math.min(Math.max(ratio, 0.5), 2);
		containerRatio.set(`${limitedRatio}/1`);
	}

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		if ($language === 'fr') {
			return `${date.getDate()} ${$t.painting.date.months[date.getMonth()]} ${date.getFullYear()}`;
		}
		return date.toLocaleDateString($language, {
			year: 'numeric',
			month: 'long',
		});
	}

	function openModal() {
		isModalOpen = true;
		document.body.classList.add('modal-open');
	}

	function closeModal() {
		isModalOpen = false;
		document.body.classList.remove('modal-open');
	}

	function stopPropagation(e: MouseEvent) {
		e.stopPropagation();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (!painting) return;
		
		if (e.key === 'ArrowLeft') {
			if (currentViewIndex > 0) {
                currentViewIndex--;
			} else if (prevPainting) {
				window.location.href = `/painting/${prevPainting.link}`;
			}
		} else if (e.key === 'ArrowRight') {
			if (currentViewIndex < painting.views.length - 1) {
                currentViewIndex++;
			} else if (nextPainting) {
				window.location.href = `/painting/${nextPainting.link}`;
			}
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	});
</script>

<div class="flex flex-col bg-white">
	<header class="bg-white py-4 px-8 border-b">
		<div class="max-w-7xl mx-auto">
			<a href="/painting" class="text-xl text-black hover:opacity-75 transition-opacity">
				← Retour à la galerie
			</a>
		</div>
	</header>

	{#if painting}
		<main class="flex-grow bg-white text-black p-8">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-8">
					<div class="md:col-span-6">
						<div class="w-full" style="aspect-ratio: {$containerRatio}">
							<button
								class="w-full h-full cursor-pointer bg-transparent border-0 p-0"
								on:click={openModal}
							>
								<img
									src={painting.views[currentViewIndex]}
									alt={painting.title}
									class="w-full h-full object-contain"
									on:load={handleImageLoad}
								/>
							</button>
						</div>
					</div>
					<div class="md:col-span-4 flex flex-col">
						<h1 class="text-2xl md:text-4xl font-medium mb-4">{painting.title}</h1>
						<p class="text-gray-600 mb-2">{formatDate(painting.date)}</p>
						<p class="text-gray-600 mb-2 italic">{painting.technique}</p>
						<p class="text-gray-600 mb-4">{painting.dimensions.height} × {painting.dimensions.width} cm</p>
						<p class="text-base md:text-lg mb-8">{painting.description}</p>
						{#if painting.views.length > 1}
							<div class="flex gap-2 md:gap-4 overflow-x-auto pb-4 pt-4">
								{#each painting.views as view, i}
									<button
										class="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 relative first:ml-1"
										on:click={() => currentViewIndex = i}
										aria-label="Vue {i + 1}"
									>
										<img
											src={view}
											alt=""
											class="w-full h-full object-cover rounded-md {currentViewIndex === i ? 'ring-2 ring-black' : ''}"
										/>
									</button>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="max-w-7xl mx-auto mt-8 flex justify-between">
				{#if prevPainting}
					<a href="/painting/{prevPainting.link}" class="text-xl text-black hover:opacity-75 transition-opacity" aria-label={$t.painting.navigation.previous}>
						← {prevPainting.title}
					</a>
				{:else}
					<div></div>
				{/if}
				{#if nextPainting}
					<a href="/painting/{nextPainting.link}" class="text-xl text-black hover:opacity-75 transition-opacity" aria-label={$t.painting.navigation.next}>
						{nextPainting.title} →
					</a>
				{/if}
			</div>
		</main>

		{#if isModalOpen}
			<dialog
				class="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black w-screen h-screen"
				aria-modal="true"
				open
			>
				<button 
					class="absolute top-2 right-2 md:top-4 md:right-4 text-white text-4xl md:text-8xl hover:opacity-75 transition-opacity p-2 md:p-8"
					on:click={closeModal}
					aria-label="Fermer"
				>
					&times;
				</button>
				<button 
					class="w-full h-full flex items-center justify-center p-4 bg-black border-0 cursor-default"
					on:click={stopPropagation}
					on:keydown={handleKeyDown}
				>
					<img
						src={painting.views[currentViewIndex]}
						alt={painting.title}
						class="max-h-[90vh] max-w-full object-contain"
					/>
				</button>
			</dialog>
		{/if}
	{:else}
		<div class="flex-grow bg-white text-black flex items-center justify-center">
			<p>{$t.painting.notFound}</p>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		overflow-y: scroll;
	}

	.modal-backdrop {
		overscroll-behavior: none;
	}
</style> 