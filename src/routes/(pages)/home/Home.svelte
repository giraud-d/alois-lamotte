<script lang="ts">
	import ArtWorkDetails from '$lib/components/ArtWorkDetails.svelte';
	import { paintings } from '$lib/data/paintings';
	import Wave from '$lib/components/Wave.svelte';
</script>

<svelte:head>
	<title>Aloïs Lamotte</title>
	<meta name="description" content="Site vitrine de l'artiste Aloïs Lamotte" />
</svelte:head>

<main>
	<section class="container mx-auto px-5 pt-2">
		<h1 class="text-center text-5xl font-medium">Bienvenue !</h1>
	</section>

	<section class="container mx-auto px-5 py-8">
		<p>
			Artiste plurielle, je mêle peinture, illustration et projets visuels pour vous proposer un regard personnel porté sur le souvenir, la matière et l’espace.
			À travers chaque projet, je cherche non seulement à représenter ce que j’ai vu, vécu ou ressenti, mais à inviter le spectateur dans un dialogue entre le
			tangible et l’impalpable, entre le passé familial et le présent créatif. Bienvenue dans mon univers, où chaque œuvre est une recherche, un témoignage, un
			fragment qui peut peut-être résonner en vous.
		</p>
	</section>

	<Wave color="#f3f4f6" towardsBottom={false} />
	<div class="bg-gray-100">
		<section class="container mx-auto px-5 py-8">
			<h2 class="pb-8 text-xl font-semibold">À la une</h2>
			<ArtWorkDetails artWork={paintings[0]} previousPage={() => undefined} nextPage={() => undefined} />
		</section>
	</div>
	<Wave color="#f3f4f6" />

	<section class="container mx-auto mb-8 px-5 py-8">
		<h2 class="pb-16 text-xl font-semibold">Venez découvrir toutes mes réalisations :</h2>
		<div class="grid grid-flow-row-dense gap-16 sm:grid-cols-2 lg:grid-cols-3">
			<a href="/painting" class="square mx-auto" aria-label="Découvrir mes peintures">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<div class="content">
					<h2 class="text-xl font-semibold">Peinture</h2>
					<p>J'utilise des pinceaux et des toiles</p>
				</div>
			</a>
			<a href="/illustration" class="square mx-auto" aria-label="Découvrir mes illustrations">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<div class="content">
					<h2 class="text-xl font-semibold">Illustration</h2>
					<p>J'utilise des ordinateurs et adobe</p>
				</div>
			</a>
			<a href="/project" class="square mx-auto sm:col-span-2 lg:col-span-1" aria-label="Découvrir mes projets">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<div class="content">
					<h2 class="text-xl font-semibold">Projets</h2>
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
		background: #1f2937;
		color: #fff;
	}

	.square:hover .content {
		color: #fff;
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
