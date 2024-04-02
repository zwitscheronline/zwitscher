<script lang="ts" async>
	import { onMount } from 'svelte';
	import PostExplore from './PostExplore.svelte';
	import type { Post } from '../../types/post';
	import { page } from '$app/stores';
	import { pushState } from '$app/navigation';

	let posts: Post[] = [];

	onMount(async () => {
		// const response = await fetch('http://localhost:8080/posts');
		// posts = await response.json();

		if ($page.state.postModalPreviousRoute?.includes('/post')) {
			console.log('show modal')
			pushState('post', {
				showModal: true
			});
		}
	});
</script>

	<div class="w-full min-h-screen">
		{#if posts.length > 0}
			{#each posts as post}
				<PostExplore post={post} />
				<div class="w-full h-0.5 bg-border"></div>
			{/each}
		{/if}
	</div>