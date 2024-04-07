import { bookmarkAPI, postAPI } from '../../api/handler';
import type { Bookmark } from '../../types/bookmark';
import type { Post } from '../../types/post';

export const load = async () => {
	const bs = (await bookmarkAPI.fetchMultiple({
		page: 1,
		limit: 50
	})).data as Bookmark[]

	const bookmarks = await Promise.all(bs.map(async (b) => {
		return await loadPost(b.postId);
	}))

	return {bookmarks}
}

const loadPost = async (id:number) => {
	return (await postAPI.fetch(id)).data as Post
}