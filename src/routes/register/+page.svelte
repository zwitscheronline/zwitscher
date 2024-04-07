<script lang="ts">
	import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { authAPI, userAPI } from "$lib/../api/handler";
	import { userCredentials } from "../../hooks/auth";
	import { goto } from "$app/navigation";
	import { setItem } from "$lib/store";

    let error: string|null = null;

    let usertag: string = "";
    let username: string = "";
    let email: string = "";
    let password: string = "";
    let confirmPassword: string = "";

    let handleFormSubmit = async () => {
        if (password !== confirmPassword) {
            error = "Passwords do not match";
            return;
        }

        let result = null;

        try {
            result = await userAPI.createUser(
                email,
                usertag,
                password,
                username,
            );
        } catch (error) {
            error = "An error occurred. Please try again later.";
        }

        if (result && result.status === 200) {
            let loginResult = null;

            try {
                loginResult = await authAPI.login(usertag, password);
            } catch (error) {
                error = "Unable to login. Please try again later.";
                return;
            }

            if (loginResult && loginResult.status === 200) {
                const accessToken = loginResult?.headers?.get("Authorization");
                const refreshToken = loginResult?.headers?.get("refresh-token");

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
                    userTag: loginResult.data.user.userTag,
                    accessToken: String(accessToken),
                    refreshToken: String(refreshToken),
                    email: loginResult.data.user.email,
                    userId: loginResult.data.user.id,
                });

                goto("/explore");
            } else {
                if (loginResult && loginResult.status === 500) {
                    error = "Server error occurred. Please try again later.";
                } else {
                    error = loginResult?.data.message || "An error occurred. Please try again later.";
                }
            }

        } else {
            if (result && result.status === 500) {
                error = "Server error occurred. Please try again later.";
            } else {
                error = result?.data.message || "An error occurred. Please try again later.";
            }
        }
    }

    let handleFormClear = () => {
        usertag = "";
        username = "";
        email = "";
        password = "";
        confirmPassword = "";
    }
</script>

<div class="mx-auto min-h-screen w-full">
	<div class="mx-auto w-11/12 flex flex-col gap-10 mt-10">
		<div class="flex flex-col gap-5">
            <h1 class="text-center text-4xl font-bold text-black">Register</h1>
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
                id="username-input"
                label="Username"
                type="text"
                bind:value={username}
                placeholder="Enter username"
            />
            <Input
                id="email-input"
                label="Email"
                type="email"
                bind:value={email}
                placeholder="Enter email"
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
            <Input
                id="confirm-password-input"
                label="Confirm Password"
                type="password"
                bind:value={confirmPassword}
                placeholder="Confirm password"
                required
            />
            <div class="mt-5 flex lg:flex-row flex-col gap-2 items-center">
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => handleFormSubmit()}
                >
                    Create Account
                </Button>
                <Button
                    variant="outline"
                    type="reset"
                    onClick={() => handleFormClear()}
                >
                    Clear
                </Button>
            </div>
        </form>
	</div>
</div>

