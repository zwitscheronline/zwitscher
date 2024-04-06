<script >
	import { onMount } from "svelte";
	import { apiData, articles } from './store';
	import { Button } from '$lib/components/ui/button/';
	import NewsArticle from '$lib/components/ui/news/NewsArticle.svelte';

	let url = 'https://newsapi.org/v2/top-headlines?' +
		'country=us&' +
		'apiKey=a2da92acdc5742f4a40b67fea4b9ebda';

	onMount(async () => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				apiData.set(data);
			}).catch(error => {
			console.log(error);
			return [];
		});
	});
</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full h-full flex flex-col gap-4 mt-2">
		<div class="w-full flex items-center px-[5%] gap-4">
			<Button variant="outline" class="bg-background border-0 rounded-full w-10 h-10" on:click={() => history.back()}><i
				class='bx bx-arrow-back text-black'></i></Button>
			<h1 class="w-full text-2xl text-black font-bold text-left">News</h1>
		</div>
	</div>
	<div class="w-full flex flex-col mx-auto mt-12">
		{#each $articles as bm}
			<div class="w-full group group-hover:bg-input">
				<NewsArticle title={bm.title} content={bm.content} href={bm.url} date={new Date(bm.publishedAt)} likes={0} comments={0} shares={0} media={bm.urlToImage || null}/>
				<div class="w-full h-0.5 bg-border"></div>
			</div>
		{/each}
	</div>
</div>