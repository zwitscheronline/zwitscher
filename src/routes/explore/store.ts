import { writable, derived, type Writable } from 'svelte/store';
import type { Post } from '../../types/post';

/** Store for your data.
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
 **/
export const apiData:Writable<Post[]> = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
 **/
export const posts = derived(apiData, ($apiData) => {
	console.log($apiData)
	if ($apiData) return $apiData;
});