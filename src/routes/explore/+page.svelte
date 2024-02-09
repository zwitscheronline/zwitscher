<script lang="ts" async>
	import { onMount } from 'svelte';
	import PostExplore from './PostExplore.svelte';
	import type { Post } from '../../types/post';
	let posts: Post[] = [];

	onMount(async () => {
		const response = await fetch('http://localhost:8080/posts');
		const data = await response.json();
		posts = data;
		console.log(posts[0]);
	});
</script>

	<div>
		{#if posts.length > 0}
			{#each posts as post}
				<PostExplore post={post} />
			{/each}
		{/if}
	</div>