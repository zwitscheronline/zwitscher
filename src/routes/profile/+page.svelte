<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<div class="h-full min-h-screen w-full bg-background">
	<div class="mt-2 flex h-full w-full flex-col gap-4">
		<div class="flex h-44 w-full gap-4 bg-blue-300 px-[5%]">
			<Button
				variant="outline"
				class="h-10 w-10 rounded-full border-0 bg-background"
				on:click={() => history.back()}><i class="bx bx-arrow-back text-black"></i></Button
			>
			<h1 class="w-full text-left text-2xl font-bold text-black">Profile</h1>
		</div>
		<div class="mx-auto text-3xl font-bold text-black">Username</div>
	</div>
</div>