<script lang="ts">
	import {
		Button,
	} from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { writable, type Writable } from 'svelte/store';
	import { postAPI } from '../../../../api/handler';
	import type { CreatePost } from '../../../../types/post';

	export let close: () => void;
	export let submit: () => void;
	export let open: boolean;

	let content: Writable<string> = writable("");
	let value: string = "";

	content.subscribe((v) => {
		value = v;
	});

	const handleSubmit = () => {
		const post: CreatePost = {
			content: value,
			authorId: 1,
		};
		postAPI.create(post);
		close();
	}
</script>

<Dialog.Root open={open}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>zwitscher something to the world.</Dialog.Title>
		</Dialog.Header>
		<div>
			<Textarea placeholder="What's on your mind?" maxlength={69} bind:value={value}/>
		</div>
		<Dialog.Footer>
			<Button variant="outline" on:click={close}>Cancel</Button>
			<Button on:click={() => {handleSubmit}}>Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>