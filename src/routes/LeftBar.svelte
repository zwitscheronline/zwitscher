<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import { Button } from '$lib/components/ui/button';
	import { goto, pushState } from '$app/navigation';
	import { NewspaperIcon } from 'lucide-svelte';

	// let currentRoute = $page.url.pathname;

	let handlePost = () => {
		pushState('post', {
			showModal: true
		});
	};

	let handleLoginClick = () => {
		goto('/login');
	};
</script>

<header class="h-screen w-full">
	<div class="w-full mx-auto lg:w-4/5 xl:w-2/5 h-full flex flex-col justify-between lg:ml-auto lg:mr-0 pb-4">
		<div class="flex flex-col justify-between h-3/5 w-full gap-2 lg:items-start items-end">
			<div class="px-4 mt-2.5">
				<a data-sveltekit-preload-data  href="/">
					<img class="w-full sm:w-10" src={logo} alt="SvelteKit" />
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data  href="/explore">
					<i class='bx bx-search text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Explore</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data  href="/profile"><i
					class='bx bx-user text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Profile</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data  href="/bookmarks"><i
					class='bx bx-bookmark text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Bookmarks</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data  href="/groups"><i
					class='bx bx-group text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Groups</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data  href="/lists"><i
					class='bx bx-list-ul text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Lists</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data  href="/news">
					<NewspaperIcon class='text-3xl sm:mr-2'></NewspaperIcon>
					<span class="hidden lg:block ">News</span>
				</a>
			</div>
			<div class="px-4 rounded-full hover:bg-gray-200 w-fit py-2 flex items-center">
				<a class="text-2xl text-black no-underline hover:no-underline flex" data-sveltekit-preload-data href="/settings"><i
					class='bx bx-cog text-3xl sm:mr-2'></i>
					<span class="hidden lg:block ">Settings</span>
				</a>
			</div>
			<Button onClick={handlePost}>
				Post
			</Button>
			<div class="lg:hidden px-4 rounded-full hover:bg-black hover:text-white text-black w-fit py-2 flex items-center">
				<i class='bx bx-edit text-3xl sm:mr-2'></i>
			</div>
		</div>
		<div class="flex flex-col justify-between w-full gap-2 lg:items-start items-end">
			<Button onClick={handleLoginClick}>
				Login
			</Button>
		</div>
	</div>
</header>
