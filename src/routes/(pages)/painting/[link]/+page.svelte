<script lang="ts">
	import ArtWork from '$lib/components/ArtWork.svelte';
	import { ArtWorkType } from '$lib/models/ArtWork';
	import { paintings } from '$lib/data/paintings';
</script>

<ArtWork artWorkType={ArtWorkType.PAINTING} artWorks={paintings} />
