<script lang="ts">
    let { backgroundColor = 'bg-white', children } = $props();
</script>

<main class="{backgroundColor}">
    <div class="container mx-auto px-5">
        {@render children()}
    </div>
</main>
