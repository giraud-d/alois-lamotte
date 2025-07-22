<script lang="ts">
	import type { Snippet } from 'svelte';
	let { backgroundColor = 'bg-white', children }: { backgroundColor?: string; children: Snippet<[]> } = $props();
</script>

<main class={backgroundColor}>
	<div class="container mx-auto px-5">
		{@render children()}
	</div>
</main>
