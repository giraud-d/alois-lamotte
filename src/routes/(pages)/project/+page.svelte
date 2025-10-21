<script lang="ts">
	import { PUBLIC_STATIC_ASSET_BASE_URL } from '$env/static/public';
</script>

<svelte:head>
	<title>Projets - Aloïs Lamotte</title>
	<meta name="description" content="Page recensent divers projets de l'artiste Aloïs Lamotte" />
</svelte:head>

<main>
	<section class="container mx-auto px-5 pt-2">
		<h1 class="mb-8 text-center text-5xl font-medium">Mes projets</h1>
	</section>

	<div class="px-5 py-8 lg:container lg:mx-auto">
		<div class="columns-1 gap-8 space-y-8 xl:columns-2">
			<article id="scenographie-musee-prehistoire" class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h2 class="mb-3 text-xl font-semibold">Scénographie pour le musé de la préhistoire :</h2>
				<div class="mb-4 flex flex-col items-center gap-2 p-2 sm:flex-row md:gap-x-4 md:p-4">
					<figure class="xs:max-h-2 basis-full sm:max-h-none sm:basis-1/3 md:basis-2/5 xl:basis-1/2">
						<img
							src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/scenographie-muse-prehistoire-affiche-journee-de-l-architecture.jpg`}
							alt="Affiche de la journée de l'architecture pour le projet de scénographie du musée de la préhistoire"
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
								Lien vers l'article du musée <span class="sr-only">(s'ouvre dans un nouvel onglet)</span>
							</a>
						</cite>
					</p>
				</div>
				<p class="mb-2">
					Les musées actuels sont basés sur la matérialité de ce qui est exposable sur les préceptes de l’archéologie du XIXe siècle. Le musée National de la
					Préhistoire des EYZIES est un site multipatrimonial qui est entré en contact avec l’ensa Nantes pour réfléchir aux alternatives possibles en termes de
					muséographie dans le cadre du studio de projet.
				</p>
				<p class="mb-2">
					Ce projet est une réflexion sur les objets d’art mobile que compose la collection du musée, qui est d’ailleurs la plus substantielle en la matière en
					France. Lors de sa visite, nous avons pu constater que cet art mobile était desservi par la muséographie qui l’englobait. Certaines collections comme
					les propulseurs disposent de fines gravures que le spectateur ne peut que partiellement observer et ne peut pas toucher. Ces objets semblent aussi
					être dissociés de leurs lieux de découvertes et de leurs histoires, le spectateur n’en saisie donc pas toute l’importance. Les personnes aveugles ne
					peuvent pas actuellement visiter le musée, car aucune exposition n’est pour eux.
				</p>
				<p>
					L’hyphosphère est une proposition en réponse à ces problématiques, prenant place dans la salle d’exposition temporaire, elle est facilement démontable
					et remontable avec 4 personnes en 2 jours. S’axant sur la période magdalénienne, l’hyphosphère est un dispositif immersif d’une vingtaine de minutes.
					Les spectateurs entrent dans cette microarchitecture qui évoque formellement les lamelles d’un champignon de pleurote.
				</p>
				<figure class="mt-10">
					<img
						src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/scenographie-muse-prehistoire-hyphosphere.jpg`}
						alt="Vue intérieure de l'Hypnosphère, une structure immersive en bois."
						class="max-h-96 w-full rounded-2xl object-cover"
					/>
				</figure>
			</article>

			<article id="animation-video" class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h2 class="mb-3 text-xl font-semibold">Vidéo la gabière et le fleuve dragon (projet collaboratif) :</h2>
				<p class="mt-10">
					Un court métrage réalisé en partenariat avec le festival Débord de Loire dans le cadre du studio de projet Architecture en Représentation à l'Ensa
					Nantes. Réalisation du Story Board, des illustrations, du montage vidéo et de l'animation.
				</p>
				<div class="video-wrapper mt-10">
					<iframe
						src="https://www.youtube.com/embed/4juf5AON6vA?si=zJ63Zt8tG7Ky_1w7"
						title="Court métrage Boreas"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</article>

			<article class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h2 class="mb-3 text-xl font-semibold">Fabrication de l'assise (projet collaboratif) :</h2>
				<p class="mb-4">
					Ce projet de siège est né d’une réflexion en lien avec l’animation <i>La Gabière et le fleuve Dragon</i>. Il se compose de deux éléments recyclés :
					une bouée de par-battage offerte par un port à sec et un reste de contreplaqué non valorisé, provenant d’Articonnex (matériau déclassé de seconde
					main).
				</p>
				<blockquote
					title="Post instagram de la fabrication d'une assise"
					class="instagram-media"
					data-instgrm-permalink="https://www.instagram.com/p/CoMZZjbM3og/?utm_source=ig_embed&amp;utm_campaign=loading"
					data-instgrm-version="14"
					style=" background:#FFF; border:0; border-radius:10px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:100%;"
				>
					<div style="padding:16px;">
						<a
							href="https://www.instagram.com/p/CoMZZjbM3og/?utm_source=ig_embed&amp;utm_campaign=loading"
							style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
							target="_blank"
						>
							<div style=" display: flex; flex-direction: row; align-items: center;">
								<div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
								<div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
									<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
									<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
								</div>
							</div>
							<div style="padding: 19% 0;"></div>
							<div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
								<svg
									width="50px"
									height="50px"
									viewBox="0 0 60 60"
									version="1.1"
									xmlns="https://www.w3.org/2000/svg"
									xmlns:xlink="https://www.w3.org/1999/xlink"
								>
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g transform="translate(-511.000000, -20.000000)" fill="#000000">
											<g>
												<path
													d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
												></path>
											</g>
										</g>
									</g>
								</svg>
							</div>
							<div style="padding-top: 8px;">
								<div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
									Voir la publication sur Instagram
								</div>
							</div>
							<div style="padding: 12.5% 0;"></div>
							<div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
								<div>
									<div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
									<div
										style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"
									></div>
									<div
										style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"
									></div>
								</div>
								<div style="margin-left: 8px;">
									<div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
									<div
										style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"
									></div>
								</div>
								<div style="margin-left: auto;">
									<div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
									<div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
									<div
										style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"
									></div>
								</div>
							</div>
							<div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
								<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
								<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
							</div>
						</a>
						<p
							style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"
						>
							<a
								href="https://www.instagram.com/p/CoMZZjbM3og/?utm_source=ig_embed&amp;utm_campaign=loading"
								style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
								target="_blank"
								rel="noopener noreferrer"
								>Une publication d'Aloïs Lamotte (@mawgwar)
								<span class="sr-only">(s'ouvre dans un nouvel onglet)</span></a
							>
						</p>
					</div>
				</blockquote>
			</article>

			<!--
			<article id="bd-immortel" class="break-inside-avoid overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-md">
				<h2 class="mb-3 text-xl font-semibold">BD Immortel :</h2>
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
				<button class="mx-auto mt-6 block rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-black">Télécharger la BD immortel</button>
			</article>
			-->

			<article id="le-hussard-noir-couverture" class="break-inside-avoid overflow-hidden rounded-2xl bg-white p-5 shadow-md">
				<h2 class="mb-3 text-xl font-semibold">Couverture "Le hussard noir"</h2>
				<div class="mb-8 flex flex-col items-center gap-2 p-2 sm:flex-row md:gap-x-4 md:p-4">
					<figure class="xs:max-h-2 basis-full sm:max-h-none sm:basis-1/3 md:basis-2/5 xl:basis-1/2">
						<img src={`${PUBLIC_STATIC_ASSET_BASE_URL}/projects/le-hussard-noir-couverture.jpg`} alt="couverture le hussard noir" class="rounded-xl" />
					</figure>
					<p class="basis-full pl-4 sm:basis-2/3 md:basis-3/5 xl:basis-1/2">
						À la suite de ma participation du concours d’illustration d’un extrait du livre de Monsieur Le Prof “Point final”, une collaboration s’est engagée
						avec sa co-auteure, Marie Pellan, autour de la création de la première de couverture de leur livre Le Hussard noir. Cette couverture propose une
						illustration originale réalisée à l’encre de Chine, où l’intensité du trait contraste avec une mise en couleur numérique des chaises, apportant à
						l’ensemble une dimension à la fois classique et contemporaine.
						<br />
						<cite class="italic text-blue-800">
							<a href="https://www.instagram.com/p/BsIz7mPHJ9C/?hl=en" target="_blank" rel="noopener noreferrer">
								Le lien Instagram <span class="sr-only">(s'ouvre dans un nouvel onglet)</span>
							</a>
						</cite>
					</p>
				</div>
			</article>

			<article class="break-inside-avoid overflow-hidden rounded-2xl bg-white p-5 shadow-md">
				<h2 class="mb-3 text-xl font-semibold">Fabrication miniature de cinéma :</h2>
				<p class="mb-4">
					Cette miniature est l’aboutissement de mon mémoire sur “les miniatures au cinéma”. Elle représente au 1/20 une villégiature de bord de mer “La bluette
					d'Hector Guimard construite en 1899. L’image que l’on voit ici est du compositing, c'est-à-dire l’intégration entre la maquette prise en photo sur un
					fond vert et le décor modélisé en 3D et rendu réaliste avec le logiciel Lumion.
				</p>
				<blockquote
					class="instagram-media"
					data-instgrm-permalink="https://www.instagram.com/p/Cdf5Muaq-MF/?utm_source=ig_embed&amp;utm_campaign=loading"
					data-instgrm-version="14"
					style=" background:#FFF; border:0; border-radius:10px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:100%;"
				>
					<div style="padding:16px;">
						<a
							href="https://www.instagram.com/p/Cdf5Muaq-MF/?utm_source=ig_embed&amp;utm_campaign=loading"
							style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
							target="_blank"
						>
							<div style=" display: flex; flex-direction: row; align-items: center;">
								<div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
								<div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
									<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
									<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
								</div>
							</div>
							<div style="padding: 19% 0;"></div>
							<div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
								<svg
									width="50px"
									height="50px"
									viewBox="0 0 60 60"
									version="1.1"
									xmlns="https://www.w3.org/2000/svg"
									xmlns:xlink="https://www.w3.org/1999/xlink"
								>
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g transform="translate(-511.000000, -20.000000)" fill="#000000">
											<g>
												<path
													d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
												></path>
											</g>
										</g>
									</g>
								</svg>
							</div>
							<div style="padding-top: 8px;">
								<div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
									Voir la publication sur Instagram
								</div>
							</div>
							<div style="padding: 12.5% 0;"></div>
							<div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
								<div>
									<div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
									<div
										style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"
									></div>
									<div
										style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"
									></div>
								</div>
								<div style="margin-left: 8px;">
									<div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
									<div
										style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"
									></div>
								</div>
								<div style="margin-left: auto;">
									<div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
									<div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
									<div
										style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"
									></div>
								</div>
							</div>
							<div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
								<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
								<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
							</div>
						</a>
						<p
							style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"
						>
							<a
								href="https://www.instagram.com/p/Cdf5Muaq-MF/?utm_source=ig_embed&amp;utm_campaign=loading"
								style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
								target="_blank"
								rel="noopener noreferrer"
								>Une publication d'Aloïs Lamotte (@mawgwar)
								<span class="sr-only">(s'ouvre dans un nouvel onglet)</span></a
							>
						</p>
					</div>
				</blockquote>
			</article>
		</div>
	</div>
	<script async src="//www.instagram.com/embed.js"></script>
</main>

<style>
	.video-wrapper {
		aspect-ratio: 16 / 9;
	}

	.video-wrapper iframe {
		width: 100%;
		height: 100%;
	}

	.instagram-media {
		margin-left: auto !important;
		margin-right: auto !important;
		max-width: 100% !important;
	}
</style>
