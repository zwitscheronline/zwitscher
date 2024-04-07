<script async lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { pushState } from '$app/navigation';
	import { postAPI } from '../../api/handler';
	import { apiData, posts } from './store';
	import ExploreTweet from '$lib/components/ui/explore/ExploreTweet.svelte';

	onMount(async () => {
		postAPI.fetchMultiple()
			.then(data => {
				ps = data.data
				apiData.set(data.data);
			});

		if ($page.state.postModalPreviousRoute?.includes('/post')) {
			console.log('show modal');
			pushState('post', {
				showModal: true
			});
		}
	});
</script>

<div class="w-full min-h-screen">
	{#each $posts as bm}
		<ExploreTweet authorId={""} content={bm.content} date={bm.createdAt ?? new Date()} likesCount={bm.likesCount ?? 0} media={null}/>
		<div class="w-full h-0.5 bg-border"></div>
	{/each}
</div>