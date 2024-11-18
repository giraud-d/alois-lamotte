<script lang="ts">
	import { page } from '$app/stores';

	let currentPath: string = $derived($page.url.pathname);
	let isMenuOpen: boolean = $state(false);

	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Paintings',
			href: '/painting'
		},
		{
			title: 'Illustrations',
			href: '/illustration'
		},
		{
			title: 'About Me',
			href: '/about-me'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	function toggleMenu() {
		console.log(isMenuOpen);
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-gray-800">
	<div class="mx-auto px-2">
		<div class="relative flex h-16 items-center">
			<!-- Button to open menu on mobile -->
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded={isMenuOpen}
					onclick={toggleMenu}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class={isMenuOpen ? 'hidden' : 'block size-6'}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class={isMenuOpen ? 'block size-6' : 'hidden'}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<!-- Desktop menu -->
			<div class="flex flex-1 justify-center">
				<div class="hidden sm:block">
					<div class="flex space-x-4">
						{#each navs as { title, href }}
							{#if href === currentPath}
								<a
									{href}
									{title}
									class="text-md rounded-md bg-gray-900 px-3 py-2 font-medium text-white"
									aria-current="page">{title}</a
								>
							{:else}
								<a
									{href}
									{title}
									class="text-md rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									>{title}</a
								>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				{#each navs as { title, href }}
					{#if href === currentPath}
						<a
							{href}
							{title}
							class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
							onclick={toggleMenu}
							aria-current="page">{title}</a
						>
					{:else}
						<a
							{href}
							{title}
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							onclick={toggleMenu}>{title}</a
						>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</nav>
