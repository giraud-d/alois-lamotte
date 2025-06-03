<script lang="ts">
    import {page} from '$app/stores';
    import {language} from "$lib/language";
    import {translations} from "$lib/data/translations";
    import type {ArtWork, ArtWorkType} from "$lib/models/ArtWork";
    import {derived} from 'svelte/store';
    import ArtWorkDetails from "$lib/components/ArtWorkDetails.svelte";
    import Main from "$lib/components/Main.svelte";

    export let artWorkType: ArtWorkType;
    export let artWorks: ArtWork[];

    const t = derived(language, () => translations[$language]);

    $: artWork = artWorks.find(p => p.link === $page.params.link);
    $: currentIndex = artWork ? artWorks.findIndex(p => p.link === artWork.link) : -1;
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

<header class="py-4 px-8 border-b">
    <div class="max-w-7xl mx-auto">
        <a href="/{artWorkType}" class="text-xl text-black hover:opacity-75 transition-opacity">
            ← Retour à la galerie
        </a>
    </div>
</header>

<Main>
    <div class="flex flex-col">
        {#if artWork}
            <section class="flex-grow text-black p-8">
                <ArtWorkDetails
                        artWork="{artWork}"
                        previousPage={goToPreviousPage}
                        nextPage={goToNextPage}
                />
                <div class="max-w-7xl mx-auto mt-8 flex justify-between">
                    {#if prevArtWork}
                        <a href="/{artWorkType}/{prevArtWork.link}" class="text-xl text-black hover:opacity-75 transition-opacity"
                           aria-label={$t.artWork.navigation.previous}>
                            ← {prevArtWork.title}
                        </a>
                    {/if}
                    {#if nextArtWork}
                        <a href="/{artWorkType}/{nextArtWork.link}" class="text-xl text-black hover:opacity-75 transition-opacity"
                           aria-label={$t.artWork.navigation.next}>
                            {nextArtWork.title} →
                        </a>
                    {/if}
                </div>
            </section>
        {:else}
            <div class="flex-grow  text-black flex items-center justify-center">
                <p>{$t.artWork.notFound}</p>
            </div>
        {/if}
    </div>
</Main>
