<script lang="ts">

	import Bookmark from './Bookmark.svelte';

	const sampleBookmarks = [
		{
			author: "John Doe",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
			href: "https://google.com",
			date: new Date(),
		},
		{
			author: "Jane Doe",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
			href: "https://google.com",
			date: new Date(),
		},
		{
			author: "James Bond",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
			href: "https://google.com",
			date: new Date(),
		},
		{
			author: "Elon Musk",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
			href: "https://google.com",
			date: new Date(),
		}
	]
</script>

<div class="w-full bg-background">
	<h1 class="w-full text-4xl text-center text-black py-8 font-bold">Bookmarks</h1>
	<div class="w-full flex flex-col mx-auto mt-12">
		{#each sampleBookmarks as bm}
		<div class="w-full group group-hover:bg-input">
			<Bookmark author={bm.author} content={bm.content} href={bm.href} date={bm.date} />
			<div class="w-full h-0.5 bg-border"></div>
		</div>
		{/each}
		{#each sampleBookmarks as bm}
			<div class="w-full group group-hover:bg-input">
				<Bookmark author={bm.author} content={bm.content} href={bm.href} date={bm.date} />
				<div class="w-full h-0.5 bg-border"></div>
			</div>
		{/each}
		{#each sampleBookmarks as bm}
			<div class="w-full group group-hover:bg-input">
				<Bookmark author={bm.author} content={bm.content} href={bm.href} date={bm.date} />
				<div class="w-full h-0.5 bg-border"></div>
			</div>
		{/each}
		{#each sampleBookmarks as bm}
			<div class="w-full group group-hover:bg-input">
				<Bookmark author={bm.author} content={bm.content} href={bm.href} date={bm.date} />
				<div class="w-full h-0.5 bg-border"></div>
			</div>
		{/each}
	</div>
</div>