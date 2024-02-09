<script lang="ts">
	import SignUp from 'clerk-sveltekit/client/SignUp.svelte';
	import ClerkLoading from 'clerk-sveltekit/client/ClerkLoading.svelte';
</script>

<div>
	<ClerkLoading>
		<SignUp redirectUrl="/about" />
	</ClerkLoading>
</div>