<script lang="ts">

	import { Button } from '$lib/components/ui/button';
	import Group1Image from '$lib/images/black-purple-liquid.jpg';
	import { goto } from '$app/navigation';

	let groups = [
		{
			id: 'group1',
			name: 'Group 1',
			members: 10,
			image: Group1Image
		},
		{
			id: 'group2',
			name: 'Group 2',
			members: 20,
			image: Group1Image
		},
		{
			id: 'group3',
			name: 'Group 3',
			members: 30,
			image: Group1Image
		},
		{
			id: 'group4',
			name: 'Group 4',
			members: 40,
			image: Group1Image
		},
		{
			id: 'group5',
			name: 'Group 5',
			members: 50,
			image: Group1Image
		},
		{
			id: 'group6',
			name: 'Group 6',
			members: 60,
			image: Group1Image
		},
		{
			id: 'group7',
			name: 'Group 7',
			members: 70,
			image: Group1Image
		},
		{
			id: 'group8',
			name: 'Group 8',
			members: 80,
			image: Group1Image
		},
		{
			id: 'group9',
			name: 'Group 9',
			members: 90,
			image: Group1Image
		},
		{
			id: 'group10',
			name: 'Group 10',
			members: 100,
			image: Group1Image
		}
	];
</script>

<div class="w-full h-full min-h-screen bg-background">
	<div class="w-full h-full flex flex-col gap-4 mt-2">
		<div class="w-full flex items-center px-[5%] gap-4">
			<Button variant="outline" class="bg-background border-0 rounded-full w-10 h-10"><i
				class='bx bx-arrow-back text-black'></i></Button>
			<h1 class="w-full text-2xl text-black font-bold text-left">Groups</h1>
		</div>
		<h1 class="w-full text-xl text-black font-black text-left px-[5%]">Discover New Groups</h1>
		<div class="w-full h-full flex flex-col">
			{#each groups as group}
				<Button on:click={() => {goto(`/groups/${group.id}`)}} variant="ghost" class="w-full h-36 flex pl-4 hover:bg-border/50">
					<div class="w-full h-36 flex items-center gap-4 hover:bg-border/50">
						<div class="max-w-28 max-h-28 bg-pink-300 rounded-xl flex items-center justify-center overflow-hidden">
							<img src={group.image} alt="group" class="object-cover rounded-xl" />
						</div>
						<div class="w-full h-28 flex flex-col items-start">
							<div class="text-black font-bold text-lg">{group.name}</div>
							<div class="text-black text-sm">{group.members} members</div>
						</div>
					</div>
				</Button>
			{/each}
		</div>
	</div>
</div>