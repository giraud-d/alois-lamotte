<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { ArtWorkType } from '$lib/models/ArtWork';
	import { illustrationsByYear } from '$lib/data/illustrations';
</script>

<Gallery artWorkType={ArtWorkType.ILLUSTRATION} artWorksByYear={illustrationsByYear} />
