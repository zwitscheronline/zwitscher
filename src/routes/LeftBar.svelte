<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import { Button } from '$lib/components/ui/button';
	import LoginButton from './LoginButton.svelte';
	import {pushState } from '$app/navigation';

	// let currentRoute = $page.url.pathname;

	let handlePost = () => {
		pushState('post', {
			showModal: true
		});
	}
</script>

<header class="h-screen w-full">
	<div class="w-full mx-auto lg:w-4/5 xl:w-2/5 h-full flex flex-col justify-between lg:ml-auto lg:mr-0 pb-4">
		<div class="flex flex-col justify-between h-3/5 w-full gap-2 lg:items-start items-end">
			<div class="px-4 mt-2.5">
				<a href="/">
					<img class="w-full sm:w-10" src={logo} alt="SvelteKit" />
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/explore">
					<i class='bx bx-search text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Explore</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/notifications"><i
					class='bx bx-bell text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Nofications</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/messages"><i
					class='bx bx-message-square-check  text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Messages</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/profile"><i
					class='bx bx-user text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Profile</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/bookmarks"><i
					class='bx bx-bookmark text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Bookmarks</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/groups"><i
					class='bx bx-group text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Groups</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/lists"><i
					class='bx bx-list-ul text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Lists</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/news"><i
					class='bx bx-news text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">News</span></a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/settings"><i
					class='bx bx-cog text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Settings</span></a>
			</div>
			<Button class="hidden lg:block w-2/3 xl:w-[90%] h-12 text-lg font-bold text-white rounded-full bg-primary hover:bg-black transition-colors duration-300 ease-in-out" on:click={handlePost}>Post</Button>
			<div class="lg:hidden px-4 rounded-full hover:bg-black hover:text-white text-black w-fit py-2 flex items-center">
				<i class='bx bx-edit text-3xl sm:mr-2'></i>
			</div>
		</div>
		<div class="flex flex-col justify-between w-full gap-2 lg:items-start items-end">
			<LoginButton />
		</div>
	</div>
</header>
