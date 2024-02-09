// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import Clerk from '@clerk/clerk-js';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
}
