<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { MessageCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { userAPI } from '../../../../api/handler';

	export let authorId: number;
	export let content: string;
	export let date: Date;
	export let likesCount: number;
	export let media: string | null;

	export let authorName: string;

	onMount(async () => {
		await userAPI.fetchUser(authorId).then((userName) => authorName = userName.data)
	})

	function extractMediaInfo(inputString: string): { c: string, m: string | null } {
		const picIndex = inputString.indexOf('PIC:');
		if (picIndex !== -1) {
			const c = inputString.substring(0, picIndex).trim();
			const mediaUrl = inputString.substring(picIndex + 4).trim();
			return { c, m: mediaUrl };
		} else {
			return { c: inputString, m: null };
		}
	}

	const {c, m } = extractMediaInfo(content)

	content = c
	media = m
</script>

<div class="w-full mx-auto group-hover:bg-input">
	<div class="w-full mx-auto group-hover:bg-input pt-4">
		<div class="w-[90%] mx-auto">
			<div class="text-black font-semibold md:text-2xl text-md sm:text-lg text-left">{authorName}</div>
			<div
				class="w-full h-fit min-h-40 bg-background border border-border rounded-xl py-6 pl-6 pr-12 mt-6 text-left flex flex-col group-hover:bg-input"
				role="button">
				<div class="flex items-center justify-between">
					<div class="text-muted font-normal text-md">{date}</div>
				</div>
				<div class="text-black font-normal text-md">{content}</div>
				{#if media}
					<img src={media} alt="media" class="w-full h-fit object-cover rounded-xl mt-4" />
				{/if}
			</div>
		</div>
	</div>
	<div class="w-full flex items-center justify-evenly my-2">
	</div>
</div>