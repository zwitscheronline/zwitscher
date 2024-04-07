<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';

	export let id: string;
	export let image: string;
	export let name: string;
	export let members: number;
</script>

<Button on:click={() => {goto(`/groups/${id}`)}} variant="link"
				class="w-full h-36 flex pl-4">
	<div class="w-full h-36 flex items-center gap-4 hover:bg-border/50">
		<div class="max-w-28 max-h-28 bg-pink-300 rounded-xl flex items-center justify-center overflow-hidden">
			<img src={image} alt="group" class="object-cover rounded-xl" />
		</div>
		<div class="w-full h-28 flex flex-col items-start">
			<div class="text-black font-bold text-lg">{name}</div>
			<div class="text-black text-sm">{members} members</div>
		</div>
	</div>
</Button>