<script lang="ts">

	import Tweet from './Tweet.svelte';
	import { DeleteAllPopover } from '$lib/components/ui/bookmarks';

	const sampleBookmarks = [
		{
			author: "Florance Pew",
			content: "I just published a new article on my blog. Check it out!",
			href: "profile/FlorancePew",
			date: new Date(),
			likes: 100,
			retweets: 50,
			shares: 20,
			commentCount: 10,
		},
		{
			author: "Donald Truck",
			content: "Why is the sky blue? And also why is the grass green? I need answers!",
			href: "profile/DonaldTruck",
			date: new Date(),
			likes: 100,
			retweets: 50,
			shares: 20,
			commentCount: 10,
		},
		{
			author: "James Bondage",
			content: "I need to find Goldfinger and stop him from destroying the world. Zwitscher, do your thing!",
			media: "https://source.unsplash.com/zkclxSVi1Fc/",
			href: "profile/JamesBondage",
			date: new Date(),
			likes: 100,
			retweets: 50,
			shares: 20,
			commentCount: 10,
		},
		{
			author: "Elon Mask",
			content: "Cybertruck is the future. Get yours today! (Dont drive during rain... might rust)",
			href: "profile/ElonMask",
			date: new Date(),
			likes: 100,
			retweets: 50,
			shares: 20,
			commentCount: 10,
		}
	]
</script>

<div class="w-full bg-background">
	<div class="w-full flex items-center px-[5%]">
		<h1 class="w-full text-2xl text-black font-bold text-left">Bookmarks</h1>
		<DeleteAllPopover />
	</div>
	<div class="w-full flex flex-col mx-auto mt-12">
		{#each sampleBookmarks as bm}
		<div class="w-full group group-hover:bg-input">
			<Tweet author={bm.author} content={bm.content} href={bm.href} date={bm.date} likes={bm.likes} comments={bm.commentCount} shares={bm.shares} media={bm.media || null}/>
			<div class="w-full h-0.5 bg-border"></div>
		</div>
		{/each}
	</div>
</div>