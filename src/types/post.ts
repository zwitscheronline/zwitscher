export type Post = {
	id: number;
	title: string;
	content: string;
	authorId: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
}