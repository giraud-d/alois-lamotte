<script lang="ts">
    import type {ArtWork} from "$lib/models/ArtWork";
    import {writable} from "svelte/store";
    import {onMount} from 'svelte';

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

    function stopPropagation(e: MouseEvent) {
        e.stopPropagation();
    }

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
        const SWIPE_THRESHOLD = 40;

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

<svelte:window on:keydown={handleKeyDown} ontouchstart={handleTouchStart} ontouchend={handleTouchEnd}/>

<figure class="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-8">
    <div class="md:col-span-6">
        <div class="w-full max-h-[84vh]" style="aspect-ratio: {$containerRatio}">
            <button
                    class="w-full h-full cursor-pointer bg-transparent border-0 p-0"
                    onclick={openModal}
            >
                <img
                        src={artWork.views[currentViewIndex]}
                        alt={artWork.title}
                        class="w-full h-full object-contain"
                        bind:this={imgElement}
                        onload={handleImageLoad}
                />
            </button>
        </div>
    </div>
    <figcaption class="md:col-span-4 flex flex-col">
        <h1 class="text-2xl md:text-4xl font-medium mb-4">{artWork.title}</h1>
        <time class="text-gray-600 mb-2">{artWork.year}</time>
        <p class="text-gray-600 mb-2 italic">{artWork.technique}</p>
        <p class="text-gray-600 mb-4">{artWork.dimensions.height} × {artWork.dimensions.width} cm</p>
        <p class="text-base md:text-lg mb-8">{artWork.description}</p>
        {#if artWork.views.length > 1}
            <div class="flex gap-2 md:gap-4 overflow-x-auto pb-4 pt-4">
                {#each artWork.views as view, i}
                    <button
                            class="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 relative first:ml-1"
                            onclick={() => currentViewIndex = i}
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
    </figcaption>
</figure>

{#if isModalOpen}
    <dialog
            class="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black w-screen h-screen"
            aria-modal="true"
            open
    >
        <button
                class="absolute top-2 right-2 md:top-4 md:right-4 text-white text-4xl md:text-8xl hover:opacity-75 transition-opacity p-2 md:p-8"
                onclick={closeModal}
                aria-label="Fermer"
        >
            &times;
        </button>
        <button
                class="w-full h-full flex items-center justify-center p-4 bg-black border-0 cursor-default"
                onclick={stopPropagation}
        >
            <img
                    src={artWork.views[currentViewIndex]}
                    alt={artWork.title}
                    class="max-h-[90vh] max-w-full object-contain"
            />
        </button>
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