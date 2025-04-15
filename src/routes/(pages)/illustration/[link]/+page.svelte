<script lang="ts">
    import ArtWork from "$lib/components/ArtWork.svelte";
    import {ArtWorkType} from "$lib/models/ArtWork";
    import {illustrations} from "$lib/data/illustrations";
</script>

<ArtWork
        artWorkType={ArtWorkType.ILLUSTRATION}
        artWorks={illustrations}
/>