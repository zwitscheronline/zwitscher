<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Heart, MessageCircle, Share } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let author: string;
	export let content: string;
	export let href: string;
	export let date: Date;

	export let likes: number;
	export let comments: number;

	export let media: string | null;

	const handleClick = () => {
		goto(href);
	};

</script>

<div class="w-full mx-auto group-hover:bg-input">
	<button class="w-full mx-auto group-hover:bg-input pt-4">
		<div class="w-[90%] mx-auto">
			<div class="text-black font-semibold md:text-2xl text-md sm:text-lg text-left">{author}</div>
			<div
				class="w-full h-fit min-h-40 bg-background border border-border rounded-xl py-6 pl-6 pr-12 mt-6 text-left flex flex-col group-hover:bg-input"
				role="button">
				<div class="flex items-center justify-between">
					<div class="text-muted font-normal text-md">{date.toLocaleDateString()}</div>
				</div>
				<div class="text-black font-normal text-md">{content}</div>
				{#if media}
					<img src={media} alt="media" class="w-full h-fit object-cover rounded-xl mt-4" />
				{/if}
			</div>
		</div>
	</button>
	<div class="w-full flex items-center justify-evenly my-2">
	</div>
</div>