<script>
	import '../app.pcss';
	import './styles.css';
	import LeftBar from './LeftBar.svelte';
</script>

<div class="min-w-screen h-full bg-background">
	<div class="h-full">
		<div
			class="fixed inset-0 z-20 hidden h-full w-fit min-w-[120px] overflow-y-auto pr-6 sm:block lg:w-1/3"
		>
			<LeftBar />
		</div>
		<main
			class="flex h-full px-0 sm:px-[15%] md:pl-[15%] md:pr-[33%] lg:pl-[25%] lg:pr-[35%] xl:px-[33%]"
		>
			<div class="z-20 h-screen w-[0.5px] bg-gray-400" />
			<slot />
			<div class="z-20 h-screen w-[0.5px] bg-gray-400" />
		</main>
	</div>
	<footer class="flex h-20 w-full items-center justify-center bg-background">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
