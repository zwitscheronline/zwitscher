<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import type { AxiosResponse } from "axios";
	import { authAPI } from "../../api/handler";
	import { userCredentials } from "../../hooks/auth";
	import { goto } from "$app/navigation";
	import { setItem } from "$lib/store";

    let usertag: string = "";
    let password: string = "";

    let error: string|null = null;

    let handleFormSubmit = async () => {
        let result: AxiosResponse|null = null;
        try {
            result = await authAPI.login(usertag, password);
        } catch (error) {
            error = "An error occurred. Please try again later.";
            return;
        }
        if (result && result.status === 200) {
            const accessToken = result?.headers?.getAuthorization();
            const refreshToken = result?.headers?.get("refresh-token");

            setItem("accessToken", accessToken);
            setItem("refreshToken", refreshToken);
            setItem("userTag", result.data.user.userTag);
            setItem("email", result.data.user.email);
            setItem("userId", result.data.user.id.toString());

            if (!accessToken || !refreshToken) {
                error = "Missing authentication tokens. Please try again later.";
                return;
            }

            userCredentials.set({
                userTag: result.data.user.userTag,
                accessToken: String(accessToken),
                refreshToken: String(refreshToken),
                email: result.data.user.email,
                userId: result.data.user.id,
            });

            goto("/explore");
        } else {
            if (result && result.status === 500) {
                error = "Server error occurred. Please try again later.";
            } else {
                error = result?.data.message || "An error occurred. Please try again later.";
            }
        }
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
        {#if error}
        <div class="flex flex-row gap-2 items-center p-4 bg-red-500/40 rounded-md w-full">
            <i class="bx bx-error-circle text-2xl text-primary/80"></i>
            <p class="text-primary/80 text-lg">{error}</p>
        </div>
        {/if}
        <form on:submit|preventDefault class="flex flex-col gap-4">
            <Input
                id="usertag-input"
                label="Usertag"
                type="text"
                bind:value={usertag}
                placeholder="Enter usertag"
                required
            />
            <Input
                id="password-input"
                label="Password"
                type="password"
                bind:value={password}
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
