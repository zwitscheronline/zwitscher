<script>
	import { goto, pushState } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	onMount(() => {
		goto('/explore');
		pushState('', {
			showModal: true,
			postModalPreviousRoute: '/post',
		});
	})
</script>

<div></div>