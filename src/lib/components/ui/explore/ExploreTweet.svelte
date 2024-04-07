<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { MessageCircle } from 'lucide-svelte';

	export let authorId: string;
	export let content: string;
	export let date: Date;
	export let likesCount: number;
	export let media: string | null;
</script>

<div class="w-full mx-auto group-hover:bg-input">
	<div class="w-full mx-auto group-hover:bg-input pt-4">
		<div class="w-[90%] mx-auto">
			<div class="text-black font-semibold md:text-2xl text-md sm:text-lg text-left">{authorId}</div>
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
	</div>
	<div class="w-full flex items-center justify-evenly my-2">
		<Button variant="link" class="rounded-full hover:bg-blue-400/40 text-black text-lg">
			<MessageCircle class='bx bx-comment text-lg'></MessageCircle>
			<p class="text-black text-lg">{likesCount}</p>
		</Button>
	</div>
</div>