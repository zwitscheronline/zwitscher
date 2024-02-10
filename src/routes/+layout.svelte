<script>
	import '../app.pcss';
	import './styles.css';
	import LeftBar from './LeftBar.svelte';

</script>

<div class="min-w-screen h-full bg-background">
	<div class="h-full">
		<div class="hidden sm:block fixed z-20 inset-0 w-fit min-w-[120px] lg:w-1/3 h-full overflow-y-auto pr-6">
			<LeftBar />
		</div>
		<main class="flex px-0 sm:px-[15%] md:pl-[15%] md:pr-[33%] lg:pl-[25%] lg:pr-[35%] xl:px-[33%] h-full">
			<div class="w-[0.5px] h-screen bg-gray-400 z-20"/>
			<slot />
			<div class="w-[0.5px] h-screen bg-gray-400 z-20"/>
		</main>
	</div>
	<footer class="flex h-20 w-full justify-center bg-background items-center">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
