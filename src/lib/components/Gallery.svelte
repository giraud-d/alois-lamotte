<script lang="ts">
	import { t } from '$lib/data/translations';
	import { type ArtWorkByYear, ArtWorkType } from '$lib/models/ArtWork';

	export let artWorkType: ArtWorkType;
	export let artWorksByYear: ArtWorkByYear;
</script>

<main>
	<h1 class="pb-16 pt-2 text-center text-5xl font-medium">
		{artWorkType === ArtWorkType.PAINTING ? $t('painting.title') : $t('illustration.title')}
	</h1>

	{#each Object.keys(artWorksByYear).sort((a, b) => Number(b) - Number(a)) as year}
		<div class="mb-16">
			<div class="mx-auto max-w-[1800px] px-4">
				<h2 class="m-8 text-3xl font-medium">{year}</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{#each artWorksByYear[Number(year)] as artWork}
						<div class="flex w-full items-center justify-center">
							<a href="/{artWorkType}/{artWork.link}" class="relative block w-full cursor-pointer border-0 bg-transparent p-0" role="button" tabindex="0">
								<div class="svgBlob" style="aspect-ratio: {Math.max(0.75, Math.min(2, artWork.dimensions.width / artWork.dimensions.height))}/1;">
									<svg viewBox="0 0 500 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
										<defs>
											<linearGradient id="blobGradient-{year}-{artWork.title}">
												<stop offset="0%" stop-color="#fff"></stop>
												<stop offset="100%" stop-color="#fff"></stop>
											</linearGradient>
										</defs>
										<mask x="-1%" y="-1%" id="blobMask-{year}-{artWork.title}">
											<rect></rect>
											<path>
												<animate
													attributeName="d"
													begin="-6s"
													dur="15s"
													repeatCount="indefinite"
													values="
												M42.4,-69.5C54.5,-66.4,63.6,-54.2,59.1,-41.1C54.6,-28,36.6,-14,38.4,1C40.2,16.1,61.9,32.2,67,46.3C72,60.4,60.5,72.6,46.6,69.5C32.6,66.4,16.3,48,3.4,42.1C-9.5,36.1,-19,42.7,-32.2,45.4C-45.4,48.1,-62.4,47,-67.3,38.8C-72.2,30.6,-64.9,15.3,-61,2.3C-57.1,-10.8,-56.5,-21.5,-54.9,-35.4C-53.3,-49.3,-50.7,-66.3,-41.4,-70.9C-32,-75.5,-16,-67.9,-0.4,-67.1C15.1,-66.3,30.3,-72.5,42.4,-69.5Z;
												M33.1,-67.4C35.6,-55.9,25.3,-32.3,24,-19C22.8,-5.8,30.6,-2.9,37.2,3.8C43.8,10.5,49.3,21.1,47.1,28.4C44.9,35.7,35.2,39.9,26.1,47.4C16.9,54.9,8.5,65.8,1.5,63.2C-5.5,60.6,-11,44.6,-22.2,38.3C-33.4,31.9,-50.3,35.4,-51,30.6C-51.7,25.8,-36.2,12.9,-27.7,4.9C-19.1,-3.1,-17.5,-6.1,-16.8,-10.8C-16,-15.5,-16.1,-21.8,-13.5,-33.2C-10.8,-44.6,-5.4,-61.2,5,-69.8C15.3,-78.3,30.6,-78.9,33.1,-67.4Z;
												M30.3,-57C40.4,-46.6,50.4,-40.8,51.7,-32C52.9,-23.3,45.4,-11.6,39.4,-3.4C33.5,4.8,29.1,9.5,30.8,23.3C32.4,37,40,59.7,35.8,63.9C31.7,68.1,15.8,53.8,4.7,45.6C-6.4,37.4,-12.7,35.2,-22.6,34.3C-32.5,33.5,-46,33.9,-57.7,28.4C-69.3,22.9,-79,11.5,-78.3,0.5C-77.5,-10.5,-66.1,-21.1,-54.8,-27C-43.4,-33,-32,-34.3,-22.9,-45.3C-13.7,-56.2,-6.9,-76.6,1.6,-79.4C10.1,-82.2,20.2,-67.4,30.3,-57Z;
												M27.3,-56.9C30,-45.7,23.2,-27.6,28.1,-16.9C32.9,-6.3,49.5,-3.2,52.9,2C56.3,7.1,46.6,14.2,40,21.8C33.4,29.3,29.8,37.3,23.6,40.1C17.5,43,8.7,40.5,-1.6,43.2C-11.8,45.9,-23.7,53.7,-30.2,51.1C-36.6,48.5,-37.8,35.5,-46.3,25.2C-54.9,15,-71,7.5,-78.2,-4.2C-85.5,-15.9,-84.1,-31.8,-75.7,-42.5C-67.4,-53.2,-52.3,-58.8,-38.5,-63.7C-24.8,-68.5,-12.4,-72.7,-0.1,-72.6C12.3,-72.5,24.5,-68.1,27.3,-56.9Z;
												M35,-59.3C44.5,-55,50.9,-44.1,56.4,-33.1C61.9,-22,66.6,-11,61.4,-3C56.3,5.1,41.3,10.1,33.5,17.2C25.8,24.3,25.2,33.5,20.8,45.8C16.4,58.2,8.2,73.7,2.8,68.8C-2.5,63.9,-5.1,38.5,-15.7,29.8C-26.3,21,-44.9,28.9,-52.1,26.7C-59.3,24.5,-55,12.2,-55.6,-0.3C-56.2,-12.9,-61.7,-25.9,-56.8,-32C-51.9,-38.2,-36.6,-37.6,-25.4,-40.9C-14.2,-44.2,-7.1,-51.4,2.8,-56.2C12.7,-61,25.4,-63.5,35,-59.3Z;
												M35.2,-56.3C48,-53.6,62.4,-49,65.9,-39.3C69.4,-29.6,61.9,-14.8,51.2,-6.2C40.5,2.4,26.5,4.8,18.8,7.2C11.1,9.6,9.7,11.9,7.6,17C5.5,22,2.7,29.9,-2.8,34.8C-8.4,39.7,-16.8,41.7,-19.7,37.1C-22.7,32.5,-20.1,21.3,-30.2,14C-40.3,6.7,-63.1,3.4,-73.7,-6.1C-84.3,-15.6,-82.7,-31.2,-69.9,-33.9C-57.2,-36.7,-33.4,-26.6,-19.8,-28.9C-6.3,-31.2,-3.2,-45.9,4,-52.9C11.2,-59.8,22.4,-59,35.2,-56.3Z;
												M42.4,-69.5C54.5,-66.4,63.6,-54.2,59.1,-41.1C54.6,-28,36.6,-14,38.4,1C40.2,16.1,61.9,32.2,67,46.3C72,60.4,60.5,72.6,46.6,69.5C32.6,66.4,16.3,48,3.4,42.1C-9.5,36.1,-19,42.7,-32.2,45.4C-45.4,48.1,-62.4,47,-67.3,38.8C-72.2,30.6,-64.9,15.3,-61,2.3C-57.1,-10.8,-56.5,-21.5,-54.9,-35.4C-53.3,-49.3,-50.7,-66.3,-41.4,-70.9C-32,-75.5,-16,-67.9,-0.4,-67.1C15.1,-66.3,30.3,-72.5,42.4,-69.5Z;
											"
												></animate>
											</path>
										</mask>
										<rect
											x="-1"
											y="-1"
											width="502"
											height="502"
											mask="url('#blobMask-{year}-{artWork.title}')"
											fill="url('#blobGradient-{year}-{artWork.title}')"
										></rect>
									</svg>
									<img src={artWork.preview} alt={artWork.title} class="h-full w-full object-contain" />
								</div>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</main>

<style>
	.svgBlob {
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 100%;
		outline: none;
		margin: 0;
		box-sizing: border-box;
		border: none;
	}

	.svgBlob svg {
		position: absolute;
		width: 102%;
		height: 102%;
		left: -1%;
		top: -1%;
		display: block;
		transform-origin: 50% 50%;
		transition: transform 0.75s 0s;
		overflow: hidden;
	}

	[id^='blobMask'] rect {
		fill: #fff;
		width: 102%;
		height: 102%;
	}

	.svgBlob:hover svg {
		transition-duration: 2s;
		transform: scale(12);
	}

	.svgBlob path {
		animation: rotatepath 47s linear 0s infinite;
	}

	.svgBlob img {
		position: relative;
		z-index: -1;
		width: 100%;
		height: 100%;
		display: block;
	}

	@keyframes rotatepath {
		0% {
			transform: translate(50%, 50%) scale(2.4) rotateZ(360deg);
		}
		100% {
			transform: translate(50%, 50%) scale(2.4) rotateZ(0deg);
		}
	}
</style>
