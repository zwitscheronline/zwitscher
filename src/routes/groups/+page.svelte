<script lang="ts">

	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import Group from '$lib/components/ui/groups/Group.svelte';

	let groups = [
		{
			id: 'group1',
			name: 'The Group',
			members: 1000,
			image: 'https://source.unsplash.com/Sj0iMtq_Z4w'
		},
		{
			id: 'group2',
			name: 'Hargainers',
			members: 9999,
			image: 'https://source.unsplash.com/sHfo3WOgGTU'
		},
		{
			id: 'group3',
			name: 'Boulder Climbers',
			members: 5665,
			image: 'https://source.unsplash.com/Ns8trMR4Om8'
		},
		{
			id: 'group4',
			name: 'Group Study',
			members: 1206,
			image: 'https://source.unsplash.com/g1Kr4Ozfoac'
		},
		{
			id: 'group5',
			name: 'Trackers',
			members: 339,
			image: 'https://source.unsplash.com/3ngGTxFpfi4'
		},
		{
			id: 'group6',
			name: 'Home Cooks',
			members: 64,
			image: 'https://source.unsplash.com/KPDbRyFOTnE'
		},
		{
			id: 'group7',
			name: 'DIYers',
			members: 1020,
			image: 'https://source.unsplash.com/JE4iHJE-knI'
		},
		{
			id: 'group8',
			name: 'Gardening Club',
			members: 400,
			image: 'https://source.unsplash.com/sFydXGrt5OA'
		},
		{
			id: 'group9',
			name: 'Philosophers',
			members: 1255,
			image: 'https://source.unsplash.com/9SKhDFnw4c4'
		},
		{
			id: 'group10',
			name: 'The Book Club',
			members: 124,
			image: 'https://source.unsplash.com/McX3XuJRsUM'
		}
	];
</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full h-full flex flex-col gap-4 mt-2">
		<div class="w-full flex items-center px-[5%] gap-4">
			<Button variant="outline" class="bg-background border-0 rounded-full w-10 h-10" on:click={() => history.back()}><i
				class='bx bx-arrow-back text-black'></i></Button>
			<h1 class="w-full text-2xl text-black font-bold text-left">Groups</h1>
		</div>
		<h1 class="w-full text-xl text-black font-black text-left px-[5%]">Discover New Groups</h1>
		<div class="w-full h-full flex flex-col">
			{#each groups as group}
				<Group id={group.id} name="group.name" members={group.members} image={group.image} />
			{/each}
		</div>
	</div>
</div>