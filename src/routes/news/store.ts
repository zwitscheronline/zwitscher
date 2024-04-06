import { writable, derived, type Writable } from 'svelte/store';

/** Store for your data.
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
 **/
interface Article {
	source: {
		id: string;
		name: string;
	},
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}
interface NewsResponse {
	status: string;
	totalResults: number;
	articles: Article[];
}

const initialData: NewsResponse = {
	status: "",
	totalResults: 0,
	articles: []
};
export const apiData: Writable<NewsResponse> = writable(initialData);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
 **/
export const articles = derived(apiData, ($apiData) => {
	if ($apiData.articles){
		return $apiData.articles.filter((article) => article.title && article.content);
	}
	return [];
});