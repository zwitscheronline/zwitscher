import type { Author } from './author';

export type Post = {
	id: number;
	title: string;
	content: string;
	originalPost?: Post;
	parentPostId?: Post;
	author: Author;
	isRetweeted: boolean;
	likesCount: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
}