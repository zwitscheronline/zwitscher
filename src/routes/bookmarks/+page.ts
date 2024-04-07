import { bookmarkAPI } from '../../api/handler';
import type { Bookmark } from '../../types/bookmark';

export const load = async () => {
	const bookmarks = (await bookmarkAPI.fetchMultiple({
		page: 1,
		limit: 50
	})).data as Bookmark[]
	return {bookmarks}
}