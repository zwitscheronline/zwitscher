<script lang="ts">
	import {
		Button,
	} from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Textarea } from '$lib/components/ui/textarea/index.js';

	export let close: () => void;
	export let submit: () => void;
	export let open: boolean;
	let value: string = "";

	const handleSubmit = () => {
		console.log(value);
		submit();
		close();
	}
</script>

<Dialog.Root open={open}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>zwitscher something to the world.</Dialog.Title>
		</Dialog.Header>
		<div>
			<Textarea placeholder="What's on your mind?" value={value} maxlength={69} on:change={() => console.log(value)}/>
		</div>
		<Dialog.Footer>
			<Button type="button" variant="secondary" on:click={close}>Cancel</Button>
			<Button type="submit" on:click={() => {handleSubmit}}>Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>