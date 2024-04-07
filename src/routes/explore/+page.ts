import { postAPI } from '../../api/handler';
import type { Post } from '../../types/post';

export const load = async () => {
	const explore = (await postAPI.fetchMultiple({
		page: 1,
		limit: 50
	})).data as Post[]
	return {explore}
}