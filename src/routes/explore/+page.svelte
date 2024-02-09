<script lang="ts" async>
	import { onMount } from 'svelte';
	import PostExplore from './PostExplore.svelte';
	import type { Post } from '../../types/post';

	let posts: Post[] = [];

	onMount(async () => {
		const response = await fetch('http://localhost:8080/posts');
		posts = await response.json();
	});
</script>

	<div class="w-full h-full bg-background">
		{#if posts.length > 0}
			{#each posts as post}
				<PostExplore post={post} />
				<div class="w-full h-[0.5px] bg-gray-400"></div>
			{/each}
		{/if}
	</div>