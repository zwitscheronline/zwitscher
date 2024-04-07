<script lang="ts">
	import { cn } from "$lib/utils";

    export let onClick: () => void = () => {};
    export let icon: string = "coffee-bean";
</script>

<button on:click={onClick} type="button" class="flex items-center justify-center ease-in-out duration-300 rounded-md hover:text-white outline-none hover:bg-blue-500 w-8 h-8 text-primary">
    <i class={cn("bx text-lg", `bx-${icon}`)}></i>
</button>
