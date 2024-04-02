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
</script>

<Dialog.Root open={open}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>zwitscher something to the world.</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<div>
			<Textarea placeholder="What's on your mind?" value={value} maxlength={69} on:change={() => console.log(value)}/>
		</div>
		<Dialog.Footer>
			<Button type="submit" on:click={() => {close; submit;}}>Save changes</Button>
			<Button type="button" variant="secondary" on:click={close}>Cancel</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>