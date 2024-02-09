<script lang="ts">
	import type { Post } from '../../types/post';

	export let post: Post;
</script>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h1>{post.content}</h1>
		</div>
	</div>
</div>