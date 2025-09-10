<script lang="ts">
	import ArtWorkDetails from '$lib/components/ArtWorkDetails.svelte';
	import { paintings } from '$lib/data/paintings';
	import Wave from '$lib/components/Wave.svelte';
</script>

<main>
	<section class="container mx-auto px-5 pt-2">
		<h1 class="text-center text-5xl font-medium">Bienvenue !</h1>
	</section>

	<section class="container mx-auto px-5 py-8">
		<h3 class="pb-8 text-2xl">Petite introduction :</h3>
		<p class="">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra erat libero, et ultrices velit rhoncus tempor. Curabitur a fermentum diam,
			finibus dapibus nunc. Morbi a felis euismod, cursus eros eget, feugiat nunc. Fusce tellus sem, accumsan ac mattis ut, aliquam eget diam. Nunc ut neque
			sapien. Pellentesque eu dui leo. Pellentesque efficitur leo imperdiet convallis finibus. Cras convallis orci vel nulla luctus gravida. Suspendisse
			sagittis fermentum metus aliquet placerat. Vestibulum quis egestas ex, commodo porttitor nulla. Nunc sollicitudin porta tortor eget aliquet. Aliquam in
			dapibus arcu. Nam eget elit ut leo auctor sagittis. Curabitur in rutrum massa.
		</p>
	</section>

	<Wave color="#f3f4f6" towardsBottom={false} />
	<div class="bg-gray-100">
		<section class="container mx-auto px-5 py-8">
			<h3 class="pb-8 text-2xl">A la une</h3>
			<ArtWorkDetails artWork={paintings[0]} previousPage={() => undefined} nextPage={() => undefined} />
		</section>
	</div>
	<Wave color="#f3f4f6" />

	<section class="container mx-auto px-5 py-8">
		<h3 class="pb-16 text-2xl">Venez découvrir toutes mes réalisations :</h3>
		<div class="grid grid-flow-row-dense gap-16 sm:grid-cols-2 lg:grid-cols-3">
			<a href="/painting" class="square mx-auto">
				<span></span>
				<span></span>
				<span></span>
				<div class="content text-black">
					<h3 class="text-2xl">Peinture</h3>
					<p>J'utilise des pinceaux et des toiles</p>
				</div>
			</a>
			<a href="/illustration" class="square mx-auto">
				<span></span>
				<span></span>
				<span></span>
				<div class="content text-black">
					<h3 class="text-2xl">Illustration</h3>
					<p>J'utilise des ordinateurs et adobe</p>
				</div>
			</a>
			<a href="/project" class="square mx-auto sm:col-span-2 lg:col-span-1">
				<span></span>
				<span></span>
				<span></span>
				<div class="content text-black">
					<h3 class="text-2xl">Projets</h3>
					<p>Vidéo youtube Mobilier des perspectives d'archi une première de couverture miniature de cinéma</p>
				</div>
			</a>
		</div>
	</section>
</main>

<style>
	.square {
		max-width: 20rem;
		position: relative;
		display: flex;
		aspect-ratio: 1 / 1;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.square span:nth-child(1) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 2px solid black;
		border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
		transition: 0.5s;
		animation: animate 6s linear infinite;
	}

	.square span:nth-child(2) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 2px solid black;
		border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
		transition: 0.5s;
		animation: animate 4s linear infinite;
	}

	.square span:nth-child(3) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 2px solid black;
		border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
		transition: 0.5s;
		animation: animate2 10s linear infinite;
	}

	.square:hover span {
		border: none;
		background: #f07e6e;
	}

	.square:hover span {
		border: none;
		background: #84cdfa;
	}

	.square:hover span {
		border: none;
		background: #5ad1cd;
	}

	.content {
		position: relative;
		padding: 40px 60px;
		color: #000;
		text-align: center;
		transition: 0.5s;
		z-index: 1000;
		width: 100%;
	}

	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes animate2 {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
