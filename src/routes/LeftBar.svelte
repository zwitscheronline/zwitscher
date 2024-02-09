<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
	import { Button } from '$lib/components/ui/button';
	import LoginButton from './LoginButton.svelte';
</script>

<header class="h-screen w-full">
	<div class="w-2/5 h-full flex flex-col items-start justify-between ml-auto pb-4">
		<div class="flex flex-col justify-between h-3/5 w-full">
			<div class="px-8">
				<a href="/">
					<img class="w-10" src={logo} alt="SvelteKit" />
				</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline" href="explore">Explore</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="notifications">Notifications</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="messages">Messages</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="profile">Profile</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="bookmarks">Bookmarks</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="groups">Groups</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="lists">Lists</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="news">News</a>
			</div>
			<div class="px-8 rounded-full hover:bg-gray-200 w-fit py-2">
				<a class="text-2xl text-black no-underline hover:no-underline"  href="settings">Settings</a>
			</div>
			<Button class="w-[90%] h-12 text-lg font-bold text-white rounded-full">Post</Button>
		</div>
		<LoginButton />
	</div>
</header>
