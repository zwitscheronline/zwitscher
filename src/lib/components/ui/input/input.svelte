<script lang="ts">
	import IconButton from "../button/icon-button.svelte";


	export let value: string | undefined = "";
	export let label: string | undefined = undefined;
	export let type: "text" | "password" | "email" = "text";
	export let maxLength: number | undefined = undefined;
	export let minLength: number | undefined = undefined;
	export let pattern: RegExp | undefined = undefined;
	export let helperText: string | undefined = undefined;
	export let id: string | undefined = label?.toLowerCase().replace(/\s/g, "-") || "input";
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let readonly: boolean = false;
	export let placeholder: string | undefined = undefined;

	let error: string | undefined = undefined;
	let showPassword: boolean = false;
	let valueLength: number = value?.length || 0;

	let handleValueChange = (event: any) => {
		let errorTriggered: boolean = false;

		value = event.target.value;

		if (minLength && valueLength < minLength) {
			error = `Minimum length is ${minLength}`;
			errorTriggered = true;
		}

		if (maxLength && valueLength > maxLength) {
			error = `Maximum length is ${maxLength}`;
			errorTriggered = true;
		}

		if (pattern && value && !pattern.test(value)) {
			error = "Invalid input";
			errorTriggered = true;
		}

		if (!errorTriggered) error = undefined;

		valueLength = value?.length || 0;
	}

	let handlePasswordVisibilityChange = () => {
		showPassword = !showPassword;
	}
</script>

<div class="flex flex-col gap-1">
	{#if label && label.length > 0}
		<label for={id} class="text-primary font-bold">
			{label}
		</label>
	{/if}
	<div class="flex flex-row gap-2 items-center w-full justify-between border-2 border-border bg-background rounded-md">
		<input
			class="border-none bg-transparent w-full px-4 py-2 focus:outline-none text-primary"
			id={id}
			type={type === "password" ? showPassword ? "text" : "password" : type}
			value={value}
			disabled={disabled}
			required={required}
			readonly={readonly}
			placeholder={placeholder}
			on:input={handleValueChange}
		/>
		{#if type === "password"}
			{#if showPassword}
				<IconButton
					icon="hide"
					onClick={() => handlePasswordVisibilityChange()}
				/>
			{:else}
				<IconButton
					icon="show"
					onClick={() => handlePasswordVisibilityChange()}
				/>
			{/if}
		{/if}
	</div>
	{#if helperText || error || minLength || maxLength}
		<div class="flex flex-row justify-between w-full">
				<span class={`${error ? "text-red-500/50" : "text-primary/50"} text-sm`}>
					{#if error}
						{error}
					{:else}
						{helperText || ""}
					{/if}
				</span>
			{#if minLength || maxLength}
				<span class="text-primary/50 text-sm right-0">
					{`${minLength ? `${minLength.toString()}/` : ""}${valueLength.toString()}${maxLength ? `/${maxLength.toString()}/`: ""}`}
				</span>
			{/if}
		</div>
	{/if}
</div>
