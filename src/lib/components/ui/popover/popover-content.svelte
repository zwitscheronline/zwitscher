<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn, flyAndScale } from "$lib/utils.js";

	type $$Props = PopoverPrimitive.ContentProps;
	let className: $$Props["class"] = undefined;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export { className as class };
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"z-50 w-fit rounded-md border bg-popover p-3 text-popover-foreground shadow-md outline-none",
		className
	)}
	{...$$restProps}
>
	<slot />
</PopoverPrimitive.Content>
