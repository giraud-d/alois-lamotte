<script lang="ts">
    import {page} from '$app/stores';
    import type {ArtWork, ArtWorkType} from "$lib/models/ArtWork";
    import ArtWorkDetails from "$lib/components/ArtWorkDetails.svelte";
    import Main from "$lib/components/Main.svelte";
    import { t } from "$lib/data/translations";

    export let artWorkType: ArtWorkType;
    export let artWorks: ArtWork[];

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
                <div class="max-w-7xl mx-auto mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                    {#if prevArtWork}
                        <a href="/{artWorkType}/{prevArtWork.link}" class="text-xl text-black hover:opacity-75 transition-opacity"
                           aria-label={$t('artWork.navigation.previous')}>
                            ← {prevArtWork.title}
                        </a>
                    {/if}
                    {#if nextArtWork}
                        <a href="/{artWorkType}/{nextArtWork.link}" class="text-xl text-black hover:opacity-75 transition-opacity ml-auto"
                           aria-label={$t('artWork.navigation.next')}>
                            {nextArtWork.title} →
                        </a>
                    {/if}
                </div>

            </section>
        {:else}
            <div class="flex-grow  text-black flex items-center justify-center">
                <p>{$t('artWork.navigation.notFound')}</p>
            </div>
        {/if}
    </div>
</Main>
