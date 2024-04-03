<script>
	import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	const handleRemoveAllBookmarks = () => {
		// do something
	};
</script>

<Popover>
	<PopoverTrigger>
		<i class='bx bx-dots-horizontal-rounded text-black font-black text-xl'></i>
	</PopoverTrigger>
	<PopoverContent class="rounded-xl">
		<PopoverClose class="rounded-3xl" on:click={handleRemoveAllBookmarks}>
			<div class="text-destructive font-bold">Clear all Bookmarks</div>
		</PopoverClose>
	</PopoverContent>
</Popover>