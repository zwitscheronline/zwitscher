import axios, { type AxiosRequestConfig } from "axios";
import { AuthRouteKey, AuthRoutes, BookmarkRouteKey, BookmarkRoutes, GroupRouteKey, GroupRoutes, ListRouteKey, ListRoutes, PostRouteKey, PostRoutes, UserRouteKey, UserRoutes } from "./routes";
import type { UpdateUser } from "../types/user";
import { getAccessToken, getRefreshToken } from "../hooks/auth";
import type { CreatePost } from "../types/post";
import type { CreateGroup } from "../types/group";
import type { CreateList } from "../types/list";
import type { RequestOptions } from "../types/request-options";

const baseConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:8080",
};

export const userAPI = {
    fetchUser(id: number) {
        let route = UserRoutes.get(UserRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    createUser(email: string, userTag: string, password: string, userName: string) {
        const route = UserRoutes.get(UserRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            email,
            userTag,
            password,
            userName,
        }, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    updateUser(data: UpdateUser) {
        let route = UserRoutes.get(UserRouteKey.UPDATE);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", data.id.toString());
        return axios.put(route, data, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        
        });
    },
    fetchUsers(options?: RequestOptions) {
        const route = UserRoutes.get(UserRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    fetchFollower(id: number, options?: RequestOptions) {
        let route = UserRoutes.get(UserRouteKey.FETCH_FOLLOWER);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        
        });
    },
    fetchFollowing(id: number, options?: RequestOptions) {
        let route = UserRoutes.get(UserRouteKey.FETCH_FOLLOWING);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        
        });
    },
    follow(id: number) {
        let route = UserRoutes.get(UserRouteKey.FOLLOW);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        
        });
    },
    unfollow(id: number, followerId: number) {
        let route = UserRoutes.get(UserRouteKey.UNFOLLOW);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":followerId", followerId.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchUserPosts(id: number, options?: RequestOptions) {
        let route = UserRoutes.get(UserRouteKey.FETCH_USER_POSTS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        
        });
    },
    fetchUserLists(id: number, options?: RequestOptions) {
        let route = UserRoutes.get(UserRouteKey.FETCH_USER_LISTS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    fetchUserGroups(id: number, options?: RequestOptions) {
        let route = UserRoutes.get(UserRouteKey.FETCH_USER_GROUPS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    fetchUserLikes(id: number, options?: RequestOptions) {
        let route = UserRoutes.get(UserRouteKey.FETCH_USER_LIKES);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
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
        let route = PostRoutes.get(PostRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchMultiple(options?: RequestOptions) {
        const route = PostRoutes.get(PostRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
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
    fetchComments(id: number, options?: RequestOptions) {
        let route = PostRoutes.get(PostRouteKey.FETCH_COMMENTS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    fetchLikes(id: number, options?: RequestOptions) {
        let route = PostRoutes.get(PostRouteKey.FETCH_LIKES);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    like(id: number) {
        let route = PostRoutes.get(PostRouteKey.LIKE);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    unlike(id: number) {
        let route = PostRoutes.get(PostRouteKey.UNLIKE);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
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
        let route = GroupRoutes.get(GroupRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchMultiple(options?: RequestOptions) {
        const route = GroupRoutes.get(GroupRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    fetchMembers(id: number, options?: RequestOptions) {
        let route = GroupRoutes.get(GroupRouteKey.FETCH_MEMBERS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    addMember(id: number, userId: number) {
        let route = GroupRoutes.get(GroupRouteKey.ADD_MEMBER);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":userId", userId.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    removeMember(id: number, userId: number) {
        let route = GroupRoutes.get(GroupRouteKey.REMOVE_MEMBER);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":userId", userId.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    createJoinRequest(id: number) {
        let route = GroupRoutes.get(GroupRouteKey.CREATE_JOIN_REQUEST);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchJoinRequests(id: number, options?: RequestOptions) {
        let route = GroupRoutes.get(GroupRouteKey.FETCH_JOIN_REQUESTS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    acceptJoinRequest(id: number, userId: number) {
        let route = GroupRoutes.get(GroupRouteKey.ACCEPT_JOIN_REQUEST);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":userId", userId.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    rejectJoinRequest(id: number, userId: number) {
        let route = GroupRoutes.get(GroupRouteKey.REJECT_JOIN_REQUEST);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":userId", userId.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchPosts(id: number, options?: RequestOptions) {
        let route = GroupRoutes.get(GroupRouteKey.FETCH_POSTS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
};

export const bookmarkAPI = {
    create(postId: number) {
        let route = BookmarkRoutes.get(BookmarkRouteKey.CREATE);
        if (!route) throw new Error("Route not found");
        route = route.replace(":postId", postId.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchMultiple(options?: RequestOptions) {
        const route = BookmarkRoutes.get(BookmarkRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    delete(id: number) {
        let route = BookmarkRoutes.get(BookmarkRouteKey.DELETE);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
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
        let route = ListRoutes.get(ListRouteKey.FETCH);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchMultiple(options?: RequestOptions) {
        const route = ListRoutes.get(ListRouteKey.FETCH_MULTIPLE);
        if (!route) throw new Error("Route not found");
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    fetchMembers(id: number, options?: RequestOptions) {
        let route = ListRoutes.get(ListRouteKey.FETCH_MEMBERS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
    addMember(id: number, userId: number) {
        let route = ListRoutes.get(ListRouteKey.ADD_MEMBER);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":userId", userId.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    removeMember(id: number, userId: number) {
        let route = ListRoutes.get(ListRouteKey.REMOVE_MEMBER);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        route = route.replace(":userId", userId.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    follow(id: number) {
        let route = ListRoutes.get(ListRouteKey.FOLLOW);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.post(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    unfollow(id: number) {
        let route = ListRoutes.get(ListRouteKey.UNFOLLOW);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.delete(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            ...baseConfig,
        });
    },
    fetchFollowers(id: number, options?: RequestOptions) {
        let route = ListRoutes.get(ListRouteKey.FETCH_FOLLOWERS);
        if (!route) throw new Error("Route not found");
        route = route.replace(":id", id.toString());
        return axios.get(route, {
            headers: {
                Authorization: getAccessToken(),
            },
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 25,
            },
            ...baseConfig,
        });
    },
};

export const authAPI = {
    login(usertag: string, password: string) {
        const route = AuthRoutes.get(AuthRouteKey.LOGIN);
        if (!route) throw new Error("Route not found");
        return axios.post(route, {
            password,
            userTag: usertag,
        }, {
            ...baseConfig
        });
    },
    refreshAccessToken() {
        const route = AuthRoutes.get(AuthRouteKey.REFRESH_ACCESS_TOKEN);
        if (!route) throw new Error("Route not found");
        return axios.post(route, { token: getRefreshToken() }, {
            ...baseConfig,
        });
    },
};
