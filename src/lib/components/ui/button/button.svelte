<script lang="ts">
	import { cn } from "$lib/utils";

	export let variant: "primary" | "outline" | "link" = "primary";
	export let color: "primary" | "secondary" | "danger" | "warning" | "success" = "primary";
	export let size: "sm" | "md" | "lg" = "md";
	export let type: "button" | "submit" | "reset" = "button";
	let className: string | undefined = "";
	export let onClick: () => void = () => {};

	let handleClick = (event: any) => {
		event.preventDefault();
		onClick();
	}

	let getColorStyling = (): string => {
		let colorStyling = "";
		if (variant === "primary") {
			colorStyling = "bg-color text-white hover:bg-color/80"
		} else if (variant === "outline") {
			colorStyling = "border-2 bg-transparent text-color border-color hover:bg-color"
		} else {
			colorStyling = "hover:bg-color/10 text-color"
		}

		if (size === "sm") colorStyling += " text-sm py-2 px-2";
		if (size === "md") colorStyling += " text-base py-3 px-4";
		if (size === "lg") colorStyling += " text-lg py-4 px-6";

		const clr = color === "primary" 
			? "primary" 
			: color === "secondary" 
				? "clay-500" 
				: color === "danger" 
					? "red-500" 
					: color === "warning" 
						? "orange-500" 
						: "green-500";

		return colorStyling.replaceAll("color", clr);
	}

	export { className as class };
</script>

<button
	type={type}
	class={cn(
		"w-full outline-none rounded-full ease-in-out duration-300 focus:outline-none font-bold",
		getColorStyling(),
		className
	)}
	on:click={handleClick}
>
	<slot/>
</button>
