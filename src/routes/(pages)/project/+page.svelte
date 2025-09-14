<script lang="ts">
	import { PUBLIC_STATIC_ASSET_BASE_URL } from '$env/static/public';
</script>

<main>
	<section class="container mx-auto px-5 pt-6">
		<h1 class="mb-8 text-center text-3xl font-medium">Mes projets</h1>
	</section>

	<div class="px-5 py-8 lg:container lg:mx-auto">
		<div class="columns-1 gap-6 space-y-6 xl:columns-2">
			<article id="scenographie-muse-prehistoire" class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Scénographie pour le musé de la préhistoire :</h3>

				<div class="mb-8 flex flex-col items-center gap-2 p-2 sm:flex-row md:gap-x-4 md:p-4">
					<figure class="xs:max-h-2 basis-full sm:max-h-none sm:basis-1/3 md:basis-2/5 xl:basis-1/2">
						<img
							src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/scenographie-muse-prehistoire-affiche-journee-de-l-architecture.jpg`}
							alt="Hypnosphère"
							class="rounded-xl"
						/>
					</figure>
					<p class="basis-full pl-4 text-gray-700 sm:basis-2/3 md:basis-3/5 xl:basis-1/2">
						Le Musée national de Préhistoire accueille à ce jour la plus grande collection d’artefacts préhistorique d’Europe : pour plus de 7 millions d’objets
						conservés, l’exposition en compte environ 12 500, permettant de parcourir une vaste période temporelle. Mais comment le visiteur peut-il
						véritablement prendre conscience de la dimension portée par l’objet, des questions qu’il pose et de l’histoire qu’il porte ? C’est l’enjeu de quatre
						projets d’étudiants en master, studio ARCHIREP (Architecture en représentation), à l’ENSA Nantes. Au travers d’une réflexion pluridisciplinaire, les
						projets muséographiques mettent en scène les collections tout en brisant les limites du musée. Ils repensent la scénographie actuelle afin
						d'inventer de nouvelles façons de transmettre le savoir.
						<br />
						<cite class="italic text-blue-800">
							<a
								href="https://musee-prehistoire-eyzies.fr/agenda/evenement/installation-temporaire-carte-blanche-aux-etudiants-de-lecole-nationale-superieure"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lien vers l'article du musée
							</a>
						</cite>
					</p>
				</div>
				<p class="mb-10">
					C'est dans ce contexte que j'ai réalisé ce projet qui montre le patati du patata. Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
					It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
					software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<figure>
					<img
						src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/scenographie-muse-prehistoire-hyphosphere.jpg`}
						alt="Affiche Journée de l'architecture"
						class="max-h-96 w-full rounded-2xl object-cover"
					/>
				</figure>
			</article>

			<article id="bd-immortel" class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">BD Immortel :</h3>
				<div class="mb-8 flex flex-col items-center gap-2 p-2 sm:flex-row md:gap-x-4 md:p-4">
					<figure class="xs:max-h-2 basis-full sm:max-h-none sm:basis-1/3 md:basis-2/5 xl:basis-1/2">
						<img src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/bd-immortel-couverture.jpg`} alt="couverture bd immortel" class="rounded-xl" />
					</figure>
					<p class="basis-full pl-4 sm:basis-2/3 md:basis-3/5 xl:basis-1/2">
						Trigger Warning Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
						<br />
						<cite class="italic text-blue-800">
							<a
								href="https://www.facebook.com/monsieurleprof/posts/en-2010-j%C3%A9cris-une-petite-nouvelle-immortelen-2016-je-propose-%C3%A0-alo%C3%AFs-gagnante-d/1608184642671388/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Le lien Facebook
							</a>
						</cite>
					</p>
				</div>
				<p class="mt-10 text-center">Voici la première page de la BD</p>
				<figure class="mt-6 flex w-full justify-center">
					<img
						src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/bd-immortel-page-01.jpg`}
						alt="couverture bd immortel"
						class="mx-auto rounded-xl border border-black"
					/>
				</figure>
				<p class="mt-10 text-center">La BD n'étant plus disponnible sur le site de monsieur le prof je la propose ici en téléchargement libre et gratuit :</p>
				<button class="mx-auto mt-6 block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Télécharger la BD immortel</button>
			</article>

			<article id="le-hussard-noir-couverture" class="break-inside-avoid overflow-hidden rounded-2xl bg-white p-5 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Couverture "Le hussard noir"</h3>

				<div class="mb-8 flex flex-col items-center gap-2 p-2 sm:flex-row md:gap-x-4 md:p-4">
					<figure class="xs:max-h-2 basis-full sm:max-h-none sm:basis-1/3 md:basis-2/5 xl:basis-1/2">
						<img src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/le-hussard-noir-couverture.jpg`} alt="couverture le hussard noir" class="rounded-xl" />
					</figure>
					<p class="basis-full pl-4 sm:basis-2/3 md:basis-3/5 xl:basis-1/2">
						Dans la continuiter de ma collaboration avec Mr le prof. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
						been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
						the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
						<br />
						<cite class="italic text-blue-800">
							<a href="https://www.instagram.com/p/BsIz7mPHJ9C/?hl=en" target="_blank" rel="noopener noreferrer"> Le lien Instagram </a>
						</cite>
					</p>
				</div>
			</article>

			<article id="animation-video" class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Animation de la vidéo :</h3>
				<p class="mt-10">
					Un court métrage réalisé en partenariat avec le festival Débord de Loire dans le cadre du studio de projet Architecture en Représentation à l'Ensa
					Nantes. Réalisation du Story Board, des illustrations, du montage vidéo et de l'animation.
				</p>
				<div class="video-wrapper mt-10">
					<iframe
						src="https://www.youtube-nocookie.com/embed/rQADq5qSGyQ?si=5eRt0FQ4k7g6wvy7"
						title="Court métrage Boreas"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</article>

			<!-- Projet 5 - Fabrication miniature de cinéma -->
			<article class="break-inside-avoid overflow-hidden rounded-2xl bg-white p-5 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Fabrication miniature de cinéma</h3>
				<p>
					Le lien
					<a href="https://www.instagram.com/p/Cdf5Muaq-MF/?img_index=1" target="_blank" class="text-blue-600 underline"> Instagram </a>
				</p>
			</article>

			<!-- Projet 6 - Fabrication de l'assise -->
			<article class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Fabrication de l'assise :</h3>
				<p>
					Photo sur Instagram
					<a href="https://www.instagram.com/p/CoMZZjbM3og/" target="_blank" class="text-blue-600 underline"> ici </a>
				</p>
			</article>
		</div>
	</div>
</main>

<style>
	.video-wrapper {
		aspect-ratio: 16 / 9;
	}

	.video-wrapper iframe {
		width: 100%;
		height: 100%;
	}
</style>
