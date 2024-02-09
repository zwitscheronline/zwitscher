<script>
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import { SignOut } from '@auth/sveltekit/components';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
</script>


<SignedOut>
	<SignInButton class="w-[90%] h-12 text-lg font-bold text-white rounded-full bg-black"
								mode="modal">Sign In
	</SignInButton>
</SignedOut>
<SignedIn let:user>
	<UserButton afterSignOutUrl="/" />
</SignedIn>