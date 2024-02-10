<script lang="ts">
	import type { Post } from '../../types/post';
	import { getTime } from 'date-fns/getTime';

	export let post: Post;
	const now = Date.now();

	let timeAgo = '';

	const secondsSincePost = Math.floor((now - getTime(post.createdAt)) / 1000);
	if (secondsSincePost < 60) {
		timeAgo = `${secondsSincePost}s`
	} else if (secondsSincePost < 3600) {
		timeAgo = `${Math.floor(secondsSincePost / 60)}m`;
	} else if (secondsSincePost < 86400) {
		timeAgo = `${Math.floor(secondsSincePost / 3600)}h`;
	} else {
		timeAgo = `${Math.floor(secondsSincePost / 86400)}d`;
	}
</script>

<div class="w-full min-w-fit px-8 py-4 sm:px-4">
	<div class="flex flex-col">
		<div class="flex gap-4 items-start">
			<div class="w-11 h-11 rounded-full bg-pink-300" />
			<div class="text-lg font-bold text-gray-700">@{post.author.userTag}</div>
			<div class="text-lg text-gray-700">{timeAgo}</div>
		</div>
		<div class="mt-4">
			<p class="text-lg text-gray-700">{post.content}</p>
		</div>
	</div>
</div>