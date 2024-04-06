<script lang="ts">

import { Button } from '$lib/components/ui/button';
</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full h-full flex flex-col gap-4 mt-2">
		<div class="w-full flex items-center px-[5%] gap-4">
			<Button variant="outline" class="bg-background border-0 rounded-full w-10 h-10" on:click={() => history.back()}><i
				class='bx bx-arrow-back text-black'></i></Button>
			<h1 class="w-full text-2xl text-black font-bold text-left">Messages</h1>
		</div>
	</div>
</div>