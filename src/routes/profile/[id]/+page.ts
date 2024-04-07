import { userAPI } from '../../../api/handler.js';
import type { User } from '../../../types/user.js';

export async function load({ params }) {
	let result = null;

	const id = parseInt(params.id);

	if (isNaN(id)) {
		return {
			error: 'Invalid ID.',
			user: null
		};
	}

	try {
		result = await userAPI.fetchUser(id);
	} catch (error) {
		return {
			error: 'Unable to fetch user. Please try again later.',
			user: null
		};
	}

	if (result && result.status === 200) {
		return {
			error: null,
			user: result.data.user as User
		};
	} else {
		if (result && result.status === 404) {
			return {
				error: 'User not found.',
				user: null
			};
		}
		return {
			error: 'Unable to fetch user. Please try again later.',
			user: null
		};
	}
}