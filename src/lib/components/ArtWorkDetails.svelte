<script lang="ts">
	import type { ArtWork } from '$lib/models/ArtWork';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let {
		artWork,
		isModalOpen = false,
		previousPage,
		nextPage
	}: {
		artWork: ArtWork;
		isModalOpen?: boolean;
		previousPage: () => void;
		nextPage: () => void;
	} = $props();

	let currentViewIndex = $state(0);
	let containerRatio = writable('1/1');
	let imgElement: HTMLImageElement;
	let touchStartX = 0;

	function openModal() {
		isModalOpen = true;
		document.body.classList.add('modal-open');
	}

	function closeModal() {
		isModalOpen = false;
		document.body.classList.remove('modal-open');
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			handleToLeft();
		} else if (e.key === 'ArrowRight') {
			handleToRight();
		} else if (e.key === 'Escape' && isModalOpen) {
			closeModal();
		} else if ((e.key === 'Enter' || e.key === ' ') && !isModalOpen) {
			openModal();
		}
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchEndX - touchStartX;
		const SWIPE_THRESHOLD = 200;

		if (diff > SWIPE_THRESHOLD) {
			handleToRight();
		} else if (diff < -SWIPE_THRESHOLD) {
			handleToLeft();
		}
	}

	function handleToRight() {
		if (currentViewIndex < artWork.views.length - 1) {
			currentViewIndex++;
		} else {
			nextPage();
		}
	}

	function handleToLeft() {
		if (currentViewIndex > 0) {
			currentViewIndex--;
		} else {
			previousPage();
		}
	}

	function handleImageLoad(e: Event) {
		const img = e.target as HTMLImageElement;
		const ratio = img.naturalWidth / img.naturalHeight;
		const limitedRatio = Math.min(Math.max(ratio, 0.5), 2);
		containerRatio.set(`${limitedRatio}/1`);
	}

	onMount(() => {
		if (imgElement?.complete) {
			handleImageLoad({ target: imgElement } as unknown as Event);
		}
	});
</script>

<svelte:window on:keydown={handleKeyDown} ontouchstart={handleTouchStart} ontouchend={handleTouchEnd} />

<figure class="grid grid-cols-1 gap-4 md:grid-cols-10 md:gap-8">
	<div class="md:col-span-6">
		<div class="max-h-[84vh] w-full" style="aspect-ratio: {$containerRatio}">
			<button class="h-full w-full cursor-pointer border-0 bg-transparent p-0" onclick={openModal}>
				<img src={artWork.views[currentViewIndex]} alt={artWork.title} class="h-full w-full object-contain" bind:this={imgElement} onload={handleImageLoad} />
			</button>
		</div>
	</div>
	<figcaption class="flex flex-col md:col-span-4">
		<h1 class="mb-4 text-2xl font-medium md:text-4xl">{artWork.title}</h1>
		<time class="mb-2 text-gray-600">{artWork.year}</time>
		<p class="mb-2 italic text-gray-600">{artWork.technique}</p>
		<p class="mb-4 text-gray-600">{artWork.dimensions.height} × {artWork.dimensions.width} cm</p>
		<p class="mb-8 text-base md:text-lg">{artWork.description}</p>
		{#if artWork.views.length > 1}
			<div class="flex gap-2 overflow-x-auto pb-4 pt-4 md:gap-4">
				{#each artWork.views as view, i}
					<button class="relative h-16 w-16 flex-shrink-0 first:ml-1 md:h-24 md:w-24" onclick={() => (currentViewIndex = i)} aria-label="Vue {i + 1}">
						<img src={view} alt="" class="h-full w-full rounded-md object-cover {currentViewIndex === i ? 'ring-2 ring-black' : ''}" />
					</button>
				{/each}
			</div>
		{/if}
	</figcaption>
</figure>

{#if isModalOpen}
	<dialog class="modal-backdrop fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black" aria-modal="true" open>
		<div class="flex h-full w-full cursor-default items-center justify-center border-0 bg-black p-4">
			<button
				class="absolute right-2 top-2 p-4 text-8xl text-white transition-opacity hover:opacity-75 md:right-4 md:top-4 md:p-8 md:text-8xl"
				onclick={closeModal}
				aria-label="Fermer"
			>
				&times;
			</button>
			<img src={artWork.views[currentViewIndex]} alt={artWork.title} class="max-h-[90vh] max-w-full object-contain" />
		</div>
	</dialog>
{/if}

<style>
	:global(body) {
		overflow-y: scroll;
	}

	.modal-backdrop {
		overscroll-behavior: none;
	}
</style>
