<script>
	import '../app.pcss';
	import './styles.css';
	import LeftBar from './LeftBar.svelte';
</script>

<div class="min-w-screen h-full overflow-y-scroll overflow-x-clip bg-background">
	<div class="flex">
		<div class="w-1/3">
			<LeftBar />
		</div>
		<main class="w-1/3">
			<slot />
		</main>
	</div>
	<footer class="absolute bottom-0 flex h-10 w-full justify-center">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
