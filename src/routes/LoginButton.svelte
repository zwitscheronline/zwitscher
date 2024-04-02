<script>
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
</script>


<SignedOut>
	<SignInButton class="hidden lg:block w-2/3 xl:w-[90%] h-12 text-lg font-bold text-white rounded-full bg-primary hover:bg-black transition-colors duration-300 ease-in-out"
								mode="modal">
		Sign In
	</SignInButton>
	<SignInButton class="lg:hidden block" mode="modal">
		<div class="lg:hidden px-4 rounded-full hover:bg-black w-fit py-2 flex items-center text-black hover:text-white">
			<i class='bx bx-log-in text-3xl mr-2'></i>
		</div>
	</SignInButton>
</SignedOut>
<SignedIn let:user>
	<UserButton afterSignOutUrl="/" />
</SignedIn>