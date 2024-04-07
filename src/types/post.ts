import type { Group } from './group';
import type { User } from './user';

export type Post = {
	id: number;
    content: string;
    authorId: number;
    author?: User;
    likesCount?: number | null;
    parentPostId?: number;
    parentPost?: Post;
    originalPostId?: number;
    originalPost?: Post;
    isRetweet?: boolean | null;
    groupId?: number;
    group?: Group;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export type CreatePost = Omit<Post, 
	"id" 
	| "author" 
	| "likesCount" 
	| "parentPost" 
	| "originalPost" 
	| "group" 
	| "createdAt" 
	| "updatedAt" 
	| "deletedAt">;