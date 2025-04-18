<script lang="ts">
    import type {ArtWork} from "$lib/models/ArtWork";
    import {derived, writable} from "svelte/store";
    import {language} from "$lib/language";
    import {translations} from "$lib/data/translations";
    import {createEventDispatcher, onMount} from 'svelte';

    export let artWork: ArtWork;
    export let isModalOpen = false;

    const dispatch = createEventDispatcher();
    const t = derived(language, () => translations[$language]);

    let currentViewIndex = 0;
    let containerRatio = writable('1/1');

    function handleImageLoad(e: Event) {
        const img = e.target as HTMLImageElement;
        const ratio = img.naturalWidth / img.naturalHeight;
        const limitedRatio = Math.min(Math.max(ratio, 0.5), 2);
        containerRatio.set(`${limitedRatio}/1`);
    }

    function formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        if ($language === 'fr') {
            return `${date.getDate()} ${$t.artWork.date.months[date.getMonth()]} ${date.getFullYear()}`;
        }
        return date.toLocaleDateString($language, {
            year: 'numeric',
            month: 'long',
        });
    }

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
            if (currentViewIndex > 0) {
                currentViewIndex--;
            } else {
                dispatch('previousPage');
            }
        } else if (e.key === 'ArrowRight') {
            if (currentViewIndex < artWork.views.length - 1) {
                currentViewIndex++;
            } else {
                dispatch('nextPage');
            }
        } else if (e.key === 'Escape' && isModalOpen) {
            closeModal();
        } else if ((e.key === 'Enter' || e.key === ' ') && !isModalOpen) {
            openModal();
        }
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

</script>


<div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-8">
        <div class="md:col-span-6">
            <div class="w-full max-h-[84vh]" style="aspect-ratio: {$containerRatio}">
                <button
                        class="w-full h-full cursor-pointer bg-transparent border-0 p-0"
                        on:click={openModal}
                >
                    <img
                            src={artWork.views[currentViewIndex]}
                            alt={artWork.title}
                            class="w-full h-full object-contain"
                            on:load={handleImageLoad}
                    />
                </button>
            </div>
        </div>
        <div class="md:col-span-4 flex flex-col">
            <h1 class="text-2xl md:text-4xl font-medium mb-4">{artWork.title}</h1>
            <p class="text-gray-600 mb-2">{formatDate(artWork.date)}</p>
            <p class="text-gray-600 mb-2 italic">{artWork.technique}</p>
            <p class="text-gray-600 mb-4">{artWork.dimensions.height} × {artWork.dimensions.width} cm</p>
            <p class="text-base md:text-lg mb-8">{artWork.description}</p>
            {#if artWork.views.length > 1}
                <div class="flex gap-2 md:gap-4 overflow-x-auto pb-4 pt-4">
                    {#each artWork.views as view, i}
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