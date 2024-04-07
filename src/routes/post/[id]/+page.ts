import { postAPI, userAPI } from '../../../api/handler.js';

export async function load({ params }) {
    let result = null;

    const id = parseInt(params.id);

    if (isNaN(id)) {
        return {
            error: "Invalid ID.",
            post: null,
        }
    }

    try {
        result = await postAPI.fetch(id);
    } catch (error) {
        return {
            error: "Unable to fetch post. Please try again later.",
            post: null,
        };
    }

    if (result && result.status === 200) {
        let authorResult = null;

        try {
            authorResult = await userAPI.fetchUser(result.data.authorId);
        } catch (error) {
            return {
                error: "Unable to fetch post. Please try again later.",
                post: null,
            };
        }

        if (authorResult && authorResult.status === 200) {
            result.data.author = authorResult.data;
        } else {
            return {
                error: "Unable to fetch author. Please try again later.",
                post: null,
            };
        }

        return {
            error: null,
            post: result.data,
        };
    } else {
        if (result && result.status === 404) {
            return {
                error: "Post not found.",
                post: null,
            };
        }
        return {
            error: "Unable to fetch post. Please try again later.",
            post: null,
        };
    }
}

export async function _likePost(postId: number) {
    let result = null;

    try {
        result = await postAPI.like(postId);
    } catch (error) {
        return {
            error: "Unable to like post. Please try again later.",
            success: false,
        };
    }

    if (result && result.status === 200) {
        return {
            error: null,
            success: true,
        };
    } else {
        return {
            error: "Unable to like post. Please try again later.",
            success: false,
        };
    }
}
