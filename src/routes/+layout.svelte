<script>
	import '../app.pcss';
	import './styles.css';
	import LeftBar from './LeftBar.svelte';
	import Footer from './Footer.svelte';
	import { page } from '$app/stores';
	import { PostModal } from '$lib/components/ui/post';
	import { Toaster } from 'svelte-french-toast';

</script>

<div class="min-w-screen min-h-screen h-full bg-background">
	<Toaster />
	<div class="h-full">
		<div
			class="fixed inset-0 z-20 hidden h-full w-fit pr-6 sm:block md:w-1/4 lg:w-1/4 xl:w-1/4 xl:min-w-1/3 2xl:w-1/3"
		>
			<LeftBar />
		</div>
		<main
			class="flex h-full px-0 mx-auto w-full md:ml-[25%] xl:ml-auto sm:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-1/3"
		>
			<div class="z-20 h-auto w-0.5 bg-border" />
			<slot />
			{#if $page.state.showModal}
				<PostModal close={() => {history.back()}} submit={() => console.log("SUBMITTED")} open />
			{/if}
			<div class="w-full absolute bottom-0 block sm:hidden">
				<Footer />
			</div>
			<div class="z-20 h-auto w-0.5 bg-border" />
		</main>
		<div
			class="fixed inset-0 z-20 hidden h-full w-fit min-w-[120px] pr-6 lg:block lg:w-[25%] xl:w-[33%] xl:min-w-[33%] ml-auto bg-white"
		>
		</div>
	</div>
</div>
