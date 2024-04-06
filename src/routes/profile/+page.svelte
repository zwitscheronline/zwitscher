<script lang="ts">

	import { Button } from '$lib/components/ui/button';
	import Tweet from '../bookmarks/Tweet.svelte';

	const userTweets = [
		{
			content: 'Wow, Zwitscher is amazing! I can\'t believe I didn\'t know about this before!',
			date: new Date(),
			media: 'https://source.unsplash.com/lylCw4zcA7I/',
			likes: 1345,
			retweets: 361,
			shares: 764,
			commentCount: 777
		},
		{
			content: 'It is true, Zwitscher is the best social media platform out there. I love it!',
			date: new Date(),
			media: 'https://source.unsplash.com/8b1cWDyvT7Y/',
			likes: 13,
			retweets: 50354,
			shares: 35345,
			commentCount: 13456
		},
		{
			content: 'If you are not on Zwitscher, you are missing out! #ZwitscherIsTheBest',
			media: 'https://source.unsplash.com/RLLR0oRz16Y/',
			date: new Date(),
			likes: 3451467,
			retweets: 134,
			shares: 435,
			commentCount: 543
		},
		{
			content: 'Once upon a time, in a land far far away, there was a little bird named Zwitscher. Zwitscher was the happiest bird in the world because he had so many friends. #ZwitscherIsTheBest',
			date: new Date(),
			media: 'https://source.unsplash.com/HWwF4OnXAdM/',
			likes: 124,
			retweets: 1236,
			shares: 3453,
			commentCount: 345
		}
	];

</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full h-full flex flex-col gap-4 mt-2">
		<div class="w-full flex px-[5%] gap-4 bg-pink-300 h-44">
			<Button variant="outline" class="bg-background border-0 rounded-full w-10 h-10" on:click={() => history.back()}><i
				class='bx bx-arrow-back text-black'></i></Button>
			<h1 class="w-full text-2xl text-black font-bold text-left">Profile</h1>
		</div>
		<div class="mx-auto text-black font-bold text-3xl">Username</div>
	</div>
	{#each userTweets as bm}
		<div class="w-full group group-hover:bg-input">
			<Tweet author={'UserName'} content={bm.content} href={''} date={bm.date} likes={bm.likes} comments={bm.commentCount} shares={bm.shares} media={bm.media || null}/>
			<div class="w-full h-0.5 bg-border"></div>
		</div>
	{/each}
</div>