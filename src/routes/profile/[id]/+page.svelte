<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	export let data;

	if (data.error) {
		goto('/explore');
	}
</script>

<div class="h-full min-h-screen w-full bg-background">
	<div class="mt-2 flex h-full w-full flex-col gap-4">
		<div class="flex h-44 w-full gap-4 bg-blue-300 px-[5%]">
			<Button
				variant="outline"
				class="h-10 w-10 rounded-full border-0 bg-background"
				on:click={() => history.back()}
			><i class="bx bx-arrow-back flex items-center justify-center text-black"></i></Button
			>
			<h1 class="w-full text-left text-2xl font-bold text-black">Profile</h1>
		</div>
		{#if data.user?.userName}
			<p class="mx-auto text-3xl font-bold text-black">{data.user?.userName}</p>
		{/if}
		<p class="mx-auto text-xl font-semibold text-primary/80">@{data.user?.userTag}</p>
	</div>
</div>