<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { ArtWorkType } from '$lib/models/ArtWork';
	import { paintingsByYear } from '$lib/data/paintings';
</script>

<Gallery artWorkType={ArtWorkType.PAINTING} artWorksByYear={paintingsByYear} />
