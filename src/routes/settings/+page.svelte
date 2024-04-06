<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import toast from 'svelte-french-toast';

	const enableToast = () => {
		toast.success('It works!');
	}
</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full flex items-center px-[5%]">
		<h1 class="w-full text-2xl text-black font-bold text-left">Settings</h1>
	</div>
	<div class="flex items-center space-x-2">
		<Switch id="airplane-mode" on:change={enableToast}/>
		<Label for="airplane-mode" class="text-black font-bold text-lg">Toast Notifications</Label>
	</div>
</div>