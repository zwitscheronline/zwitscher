<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import { authAPI } from "../../api/handler";

    let usertag: string = "";
    let password: string = "";

    let handleFormSubmit = async () => {
        const result = await authAPI.login(usertag, password);
        console.log(result);
        console.log('Form submitted');
    }
</script>

<div class="mx-auto min-h-screen w-full">
	<div class="mx-auto w-11/12 flex flex-col gap-10 mt-10">
		<div class="flex flex-col gap-5">
            <h1 class="text-center text-4xl font-bold text-black">Login</h1>
            <p class="text-primary">
                Please login to your Zwitscher account. If you don't have an account, you can create one <a
                    href="/register"
                    class="font-bold text-blue-500 hover:text-blue-400 ease-in-out duration-300 visited:text-blue-300">here</a>.
            </p>
        </div>
        <form on:submit|preventDefault class="flex flex-col gap-4">
            <Input
                id="usertag-input"
                label="Usertag or Email"
                type="text"
                value={usertag}
                placeholder="Enter usertag or email"
                required
            />
            <Input
                id="password-input"
                label="Password"
                type="password"
                value={password}
                placeholder="Enter password"
                required
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
