import { redirect } from '@sveltejs/kit';

export function load() {
	// ...
	redirect(302, '/explore'); // needs `throw` in v1
}