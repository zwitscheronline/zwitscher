import axios, { type AxiosRequestConfig } from "axios";
import { AuthRouteKey, AuthRoutes, BookmarkRouteKey, BookmarkRoutes, GroupRouteKey, GroupRoutes, ListRouteKey, ListRoutes, PostRouteKey, PostRoutes, UserRouteKey, UserRoutes } from "./routes";
import type { UpdateUser } from "../types/user";
import { getAccessToken, getRefreshToken } from "../hooks/auth";
import type { CreatePost } from "../types/post";
import type { CreateGroup } from "../types/group";
import type { CreateList } from "../types/list";

const baseConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:8080",
};

export const userAPI = {
    fetchUser(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            params: {
                id,
            },
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    createUser(email: string, userTag: string, password: string) {
        const route = UserRoutes.get(UserRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            email,
            userTag,
            password,
        }, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    updateUser(data: UpdateUser) {
        const route = UserRoutes.get(UserRouteKey.UPDATE);
        if (!route) throw new Error("Route not found");
        return axios.put(route, data, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id: data.id,
            },
            ...baseConfig,
        
        });
    },
    fetchUsers() {
        const route = UserRoutes.get(UserRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchFollower(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_FOLLOWER);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        
        });
    },
    fetchFollowing(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_FOLLOWING);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        
        });
    },
    follow(id: number) {
        const route = UserRoutes.get(UserRouteKey.FOLLOW);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        
        });
    },
    unfollow(id: number, followerId: number) {
        const route = UserRoutes.get(UserRouteKey.UNFOLLOW);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                followerId,
            },
            ...baseConfig,
        });
    },
    fetchUserPosts(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_USER_POSTS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        
        });
    },
    fetchUserLists(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_USER_LISTS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchUserGroups(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_USER_GROUPS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchUserLikes(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_USER_LIKES);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchGroupJoinRequests(id: number) {
        const route = UserRoutes.get(UserRouteKey.FETCH_GROUP_JOIN_REQUESTS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
};

export const postAPI = {
    fetch(id: number) {
        const route = PostRoutes.get(PostRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchMultiple() {
        const route = PostRoutes.get(PostRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    create(data: CreatePost) {
        const route = PostRoutes.get(PostRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, data, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchComments(id: number) {
        const route = PostRoutes.get(PostRouteKey.FETCH_COMMENTS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchLikes(id: number) {
        const route = PostRoutes.get(PostRouteKey.FETCH_LIKES);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    like(id: number) {
        const route = PostRoutes.get(PostRouteKey.LIKE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    unlike(id: number) {
        const route = PostRoutes.get(PostRouteKey.UNLIKE);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
};

export const groupAPI = {
    create(data: CreateGroup) {
        const route = GroupRoutes.get(GroupRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, data, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetch(id: number) {
        const route = GroupRoutes.get(GroupRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchMultiple() {
        const route = GroupRoutes.get(GroupRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchMembers(id: number) {
        const route = GroupRoutes.get(GroupRouteKey.FETCH_MEMBERS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    addMember(id: number, userId: number) {
        const route = GroupRoutes.get(GroupRouteKey.ADD_MEMBER);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                userId,
            },
            ...baseConfig,
        });
    },
    removeMember(id: number, userId: number) {
        const route = GroupRoutes.get(GroupRouteKey.REMOVE_MEMBER);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                userId,
            },
            ...baseConfig,
        });
    },
    createJoinRequest(id: number) {
        const route = GroupRoutes.get(GroupRouteKey.CREATE_JOIN_REQUEST);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchJoinRequests(id: number) {
        const route = GroupRoutes.get(GroupRouteKey.FETCH_JOIN_REQUESTS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    acceptJoinRequest(id: number, userId: number) {
        const route = GroupRoutes.get(GroupRouteKey.ACCEPT_JOIN_REQUEST);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                userId,
            },
            ...baseConfig,
        });
    },
    rejectJoinRequest(id: number, userId: number) {
        const route = GroupRoutes.get(GroupRouteKey.REJECT_JOIN_REQUEST);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                userId,
            },
            ...baseConfig,
        });
    },
    fetchPosts(id: number) {
        const route = GroupRoutes.get(GroupRouteKey.FETCH_POSTS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
};

export const bookmarkAPI = {
    create(postId: number) {
        const route = BookmarkRoutes.get(BookmarkRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                postId,
            },
            ...baseConfig,
        });
    },
    fetchMultiple() {
        const route = BookmarkRoutes.get(BookmarkRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    delete(id: number) {
        const route = BookmarkRoutes.get(BookmarkRouteKey.DELETE);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
};

export const listAPI = {
    create(data: CreateList) {
        const route = ListRoutes.get(ListRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, data, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetch(id: number) {
        const route = ListRoutes.get(ListRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchMultiple() {
        const route = ListRoutes.get(ListRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchMembers(id: number) {
        const route = ListRoutes.get(ListRouteKey.FETCH_MEMBERS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    addMember(id: number, userId: number) {
        const route = ListRoutes.get(ListRouteKey.ADD_MEMBER);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                userId,
            },
            ...baseConfig,
        });
    },
    removeMember(id: number, userId: number) {
        const route = ListRoutes.get(ListRouteKey.REMOVE_MEMBER);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
                userId,
            },
            ...baseConfig,
        });
    },
    follow(id: number) {
        const route = ListRoutes.get(ListRouteKey.FOLLOW);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    unfollow(id: number) {
        const route = ListRoutes.get(ListRouteKey.UNFOLLOW);
        if (!route) throw new Error("Route not found");
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
    fetchFollowers(id: number) {
        const route = ListRoutes.get(ListRouteKey.FETCH_FOLLOWERS);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                id,
            },
            ...baseConfig,
        });
    },
};

export const authAPI = {
    login(usertag: string, password: string) {
        const route = AuthRoutes.get(AuthRouteKey.LOGIN);
        if (!route) throw new Error("Route not found");
        return axios.post(route, { userTag: usertag, password }, baseConfig);
    },
    refreshAccessToken() {
        const route = AuthRoutes.get(AuthRouteKey.REFRESH_ACCESS_TOKEN);
        if (!route) throw new Error("Route not found");
        return axios.post(route, { token: getRefreshToken() }, {
            ...baseConfig,
        });
    },
};
