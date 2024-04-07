<script async lang="ts">
	import ExploreTweet from '$lib/components/ui/explore/ExploreTweet.svelte';

	export let data;
	const { explore } = data
	console.log(explore)
</script>

/*
authorId: string;   content: string;   date: Date;   likesCount: number;   media: string | null;
*/


<div class="w-full min-h-screen">
	{#each explore as bm}
		<ExploreTweet authorId={bm.authorId} content={bm.content} date={bm.createdAt ?? new Date()} media={null} />
		<div class="w-full h-0.5 bg-border"></div>
	{/each}
</div>