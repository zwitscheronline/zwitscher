<script>
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
</script>


<SignedOut>
	<SignInButton class="hidden xl:block w-[90%] h-12 text-lg font-bold text-white rounded-full bg-black"
								mode="modal">
		Sign In
	</SignInButton>
	<SignInButton class="xl:hidden block" mode="modal">
		<div class="xl:hidden px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
			<i class='bx bx-log-in text-3xl mr-2'></i>
		</div>
	</SignInButton>
</SignedOut>
<SignedIn let:user>
	<UserButton afterSignOutUrl="/" />
</SignedIn>