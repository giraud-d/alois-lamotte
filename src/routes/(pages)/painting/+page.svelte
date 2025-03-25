<script>

	const paintings = [
		{
			title: 'Bonjour',
			description: 'C\'est top',
			href: '/assets/tmp-banner.png'
		},
		{
			title: 'Salut',
			description: 'C\'est cool',
			href: 'assets/tmp-grew-potatoes.png'
		},
		{
			title: 'Hi',
			description: 'C\'est tip tip',
			href: '/assets/tmp-shapes.png'
		},
		{
			title: 'Hi',
			description: 'C\'est tip tip',
			href: '/assets/tmp-shapes.png'
		},
		{
			title: 'Salut',
			description: 'C\'est cool',
			href: 'assets/tmp-grew-potatoes.png'
		},
		{
			title: 'Bonjour',
			description: 'C\'est top',
			href: '/assets/tmp-banner.png'
		}
	];
</script>

<h1 class="py-2 text-center text-5xl font-medium">Peintures</h1>
<ul class="grid grid-cols-3 content-evenly">
	{#each paintings as { title, description, href }}
		<li class="max-h-96">
			<img class="h-1/2 mx-auto" alt="" src={href}>
			<h3 class="text-2xl">{title}</h3>
			<p class="text-center">{description}</p>
		</li>
	{/each}
</ul>


