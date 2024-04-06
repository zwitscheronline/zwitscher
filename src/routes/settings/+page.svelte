<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import toast from 'svelte-french-toast';
	import { writable } from 'svelte/store';
	import { Button } from '$lib/components/ui/button';

	const checked = writable(false);
	let checkedValue: boolean = false;

	checked.subscribe((value) => {
		if (value) {
			toast.success('Toast notifications enabled');
		} else {
			toast.dismiss();
		}
		checkedValue = value;
	});
</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full h-full flex flex-col gap-4 mt-2">
		<div class="w-full flex items-center px-[5%] gap-4">
			<Button variant="outline" class="bg-background border-0 rounded-full w-10 h-10" on:click={() => history.back()}><i
				class='bx bx-arrow-back text-black'></i></Button>
			<h1 class="w-full text-2xl text-black font-bold text-left">Settings</h1>
		</div>
	</div>
	<div class="flex items-center space-x-2 w-2/3 mx-auto justify-center mt-12 bg-border p-5 rounded-xl">
		<Switch id="airplane-mode" checked={checkedValue} on:click={() => checked.update((checked) => !checked)}/>
		<Label for="airplane-mode" class="text-black font-bold text-lg">Toast Notifications</Label>
	</div>
</div>