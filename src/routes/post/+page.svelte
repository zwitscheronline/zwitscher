<script lang="ts">
	import { goto, pushState } from '$app/navigation';
	import { onMount } from 'svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { getItem } from '$lib/store';
	import Button from '$lib/components/ui/button/button.svelte';
	import { postAPI } from '../../api/handler';
	import toast from 'svelte-french-toast';
	onMount(() => {
		if (getItem("accessToken") === null) {
			pushState("/login", {
				redirectAfterAction: "/post",
			});
			goto("/login");
		}
	})

	let error: string|null = null;
	let value: string = "";

	let handleFormSubmit = async () => {
		let result = null;

		const authorIdStr = getItem("userId");

		if (!authorIdStr) {
			goto("/login");
			return;
		}

		const authorId = parseInt(authorIdStr);

		try {
			result = await postAPI.create({
				content: value,
				authorId,
			});
		} catch (error) {
			error = "An error occurred while posting. Please try again.";
			return;
		}

		if (result && result.status === 201) {
			goto(`/post/${result.data.id}`);
			toast.success("Post created successfully!");
		} else {
			error = "An error occurred while posting. Please try again.";
			return;
		}
	}
</script>

<div class="mx-auto min-h-screen w-full">
	<div class="mx-auto w-11/12 flex flex-col gap-10 mt-10">
		<div class="flex flex-col gap-5">
            <h1 class="text-center text-4xl font-bold text-black">Create Post</h1>
        </div>
        {#if error}
        <div class="flex flex-row gap-2 items-center p-4 bg-red-500/40 rounded-md w-full">
            <i class="bx bx-error-circle text-2xl text-primary/80"></i>
            <p class="text-primary/80 text-lg">{error}</p>
        </div>
        {/if}
        <form on:submit|preventDefault class="flex flex-col gap-4">
            <Textarea
				class="w-full"
				placeholder="What's on your mind?"
				bind:value={value}
				maxlength={69}
			/>
            <Button
                class="mt-5"
                variant="primary"
                type="submit"
                onClick={() => handleFormSubmit()}
            >
                Login
            </Button>
        </form>
	</div>
</div>
