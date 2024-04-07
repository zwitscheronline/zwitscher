<script lang="ts">
	import {
		Button,
	} from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { getItem } from "$lib/store";
	import toast from "svelte-french-toast";
	import { postAPI } from "../../../../api/handler";
	import { goto } from "$app/navigation";

	export let close: () => void;
	export let open: boolean;
	let value: string = "";

	const handleSubmit = async () => {
		let result = null;

		let authorIdStr = getItem("userId");

		if (!authorIdStr) {
			toast.error("You need to be logged in to post.");
			return;
		}

		const authorId = parseInt(authorIdStr);

		try {
			result = await postAPI.create({
				content: value,
				authorId,
			});
		} catch (error) {
			toast.error("An error occurred while posting.");
			return;
		}

		if (result && result.status === 201) {
			goto(`/post/${result.data.id}`);
			toast.success("Posted successfully.");
			close();
		} else {
			toast.error("An error occurred while posting.");
			return;
		}
	}
</script>

<Dialog.Root open={open}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>zwitscher something to the world.</Dialog.Title>
		</Dialog.Header>
		<div>
			<Textarea placeholder="What's on your mind?" bind:value={value} maxlength={69} />
		</div>
		<Dialog.Footer>
			<Button type="button" variant="outline" color="primary" onClick={close}>Cancel</Button>
			<Button type="submit" variant="primary" onClick={() => handleSubmit()}>Post</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>