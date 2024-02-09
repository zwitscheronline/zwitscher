<script>
	import SearchBarExplore from './SearchBarExplore.svelte';
	import "../styles.css"

</script>

<div class="w-full h-full overflow-y-scroll overflow-x-clip bg-background">
		<main class="mx-auto">
			<SearchBarExplore />
			<slot />
		</main>
</div>
