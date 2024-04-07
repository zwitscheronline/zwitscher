<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import { Button } from '$lib/components/ui/button';
	import {goto, pushState } from '$app/navigation';
	import { userCredentials } from '../hooks/auth';
	import type { UserCredentials } from '../types/credentials';
	import { removeItem } from '$lib/store';

	// let currentRoute = $page.url.pathname;

	let user: UserCredentials|null = null;

	let handlePost = () => {
		goto("/post");
	}

	let handleLoginClick = () => {
		goto('/login');
	}

	userCredentials.subscribe((value) => {
		if (value) {
			user = value;
		}
	});

	let handleLogout = () => {
		userCredentials.set(null);
		removeItem("accessToken");
		removeItem("refreshToken");
		removeItem("userTag");
		removeItem("email");
		removeItem("userId");

		goto("/");

		user = null;
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
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/profile"><i
					class='bx bx-user text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Profile</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/bookmarks"><i
					class='bx bx-bookmark text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Bookmarks</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/groups"><i
					class='bx bx-group text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Groups</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/lists"><i
					class='bx bx-list-ul text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Lists</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" href="/settings"><i
					class='bx bx-cog text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Settings</span>
				</a>
			</div>
			<Button class="lg:block hidden" onClick={handlePost}>
				Post
			</Button>
			<div class="lg:hidden px-4 rounded-full hover:bg-black hover:text-white text-black w-fit py-2 flex items-center">
				<i class='bx bx-edit text-3xl sm:mr-2'></i>
			</div>
		</div>
		{#if !user}
		<div class="flex flex-col justify-between w-full gap-2 lg:items-start items-end">
			<Button class="lg:block hidden" onClick={handleLoginClick}>
				Login
			</Button>
			<div class="lg:hidden px-4 rounded-full hover:bg-black hover:text-white text-black w-fit py-2 flex items-center">
				<i class='bx bx-log-in text-3xl sm:mr-2' on:click={handleLoginClick}></i>
			</div>
		</div>
		{:else}
		<div class="bg-primary rounded-full px-4 py-2 flex flex-row justify-between items-center w-full">
			<div class="flex flex-col items-center">
				{#if user.userName}
				<p class="text-lg font-bold text-white">
					{user.userName}
				</p>
				{/if}
				<p class="text-md font-bold text-white/80">
					@{user.userTag}
				</p>
			</div>
			<i 
				class="bx bx-log-out rounded-md text-lg text-white bg-white/20 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-blue-500 ease-in-out duration-300"
				on:click={handleLogout}
			></i>
		</div>
		{/if}

	</div>
</header>
