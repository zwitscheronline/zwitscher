// See https://kit.svelte.dev/docs/types#app

import type { Post } from "./types/post";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			error: string | null;
			post: Post | null;
		}
		interface PageState {
			postModalPreviousRoute?: string;
			showModal?: boolean;
			redirectAfterAction?: string;
		}
		// interface Platform {}
	}
}

export {};
