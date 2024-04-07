export enum UserRouteKey {
    FETCH,
    CREATE,
    FETCH_MULTIPLE,
    UPDATE,
    FETCH_FOLLOWER,
    FETCH_FOLLOWING,
    FOLLOW,
    UNFOLLOW,
    FETCH_USER_POSTS,
    FETCH_USER_LISTS,
    FETCH_USER_GROUPS,
    FETCH_USER_LIKES,
    FETCH_GROUP_JOIN_REQUESTS,
}

export const UserRoutes: Map<UserRouteKey, string> = new Map([
    [UserRouteKey.FETCH, "/users/:id"],
    [UserRouteKey.CREATE, "/users/"],
    [UserRouteKey.FETCH_MULTIPLE, "/users/"],
    [UserRouteKey.UPDATE, "/users/:id"],
    [UserRouteKey.FETCH_FOLLOWER, "/users/:id/follower"],
    [UserRouteKey.FETCH_FOLLOWING, "/users/:id/following"],
    [UserRouteKey.FOLLOW, "/users/:id/follower"],
    [UserRouteKey.UNFOLLOW, "/users/:id/follower/:followerId"],
    [UserRouteKey.FETCH_USER_POSTS, "/users/:id/posts"],
    [UserRouteKey.FETCH_USER_LISTS, "/users/:id/lists"],
    [UserRouteKey.FETCH_USER_GROUPS, "/users/:id/groups"],
    [UserRouteKey.FETCH_USER_LIKES, "/users/:id/likes"],
    [UserRouteKey.FETCH_GROUP_JOIN_REQUESTS, "/users/:id/join_requests"],
]);

export enum PostRouteKey {
    FETCH,
    FETCH_MULTIPLE,
    CREATE,
    FETCH_COMMENTS,
    FETCH_LIKES,
    LIKE,
    UNLIKE,
}

export const PostRoutes: Map<PostRouteKey, string> = new Map([
    [PostRouteKey.FETCH, "/posts/:id"],
    [PostRouteKey.FETCH_MULTIPLE, "/posts/"],
    [PostRouteKey.CREATE, "/posts/"],
    [PostRouteKey.FETCH_COMMENTS, "/posts/:id/comments"],
    [PostRouteKey.FETCH_LIKES, "/posts/:id/likes"],
    [PostRouteKey.LIKE, "/posts/:id/likes"],
    [PostRouteKey.UNLIKE, "/posts/:id/likes"],
]);

export enum BookmarkRouteKey {
    CREATE,
    FETCH_MULTIPLE,
    DELETE,
}

export const BookmarkRoutes: Map<BookmarkRouteKey, string> = new Map([
    [BookmarkRouteKey.CREATE, "/bookmarks/:postId"],
    [BookmarkRouteKey.FETCH_MULTIPLE, "/bookmarks/"],
    [BookmarkRouteKey.DELETE, "/bookmarks/:id"],
]);

export enum ListRouteKey {
    CREATE,
    FETCH,
    FETCH_MULTIPLE,
    FETCH_MEMBERS,
    ADD_MEMBER,
    REMOVE_MEMBER,
    FOLLOW,
    UNFOLLOW,
    FETCH_FOLLOWERS,
}

export const ListRoutes: Map<ListRouteKey, string> = new Map([
    [ListRouteKey.CREATE, "/lists/"],
    [ListRouteKey.FETCH, "/lists/:id"],
    [ListRouteKey.FETCH_MULTIPLE, "/lists/"],
    [ListRouteKey.FETCH_MEMBERS, "/lists/:id/users"],
    [ListRouteKey.ADD_MEMBER, "/lists/:id/users/:userId"],
    [ListRouteKey.REMOVE_MEMBER, "/lists/:id/users/:userId"],
    [ListRouteKey.FOLLOW, "/lists/:id/follower"],
    [ListRouteKey.UNFOLLOW, "/lists/:id/follower/:followerId"],
    [ListRouteKey.FETCH_FOLLOWERS, "/lists/:id/follower"],
]);

export enum GroupRouteKey {
    CREATE,
    FETCH,
    UPDATE,
    FETCH_MULTIPLE,
    FETCH_MEMBERS,
    ADD_MEMBER,
    REMOVE_MEMBER,
    CREATE_JOIN_REQUEST,
    FETCH_JOIN_REQUESTS,
    ACCEPT_JOIN_REQUEST,
    REJECT_JOIN_REQUEST,
    FETCH_POSTS,
}

export const GroupRoutes: Map<GroupRouteKey, string> = new Map([
    [GroupRouteKey.CREATE, "/groups/"],
    [GroupRouteKey.FETCH, "/groups/:id"],
    [GroupRouteKey.UPDATE, "/groups/:id"],
    [GroupRouteKey.FETCH_MULTIPLE, "/groups/"],
    [GroupRouteKey.FETCH_MEMBERS, "/groups/:id/members"],
    [GroupRouteKey.ADD_MEMBER, "/groups/:id/members/:userId"],
    [GroupRouteKey.REMOVE_MEMBER, "/groups/:id/members/:userId"],
    [GroupRouteKey.CREATE_JOIN_REQUEST, "/groups/:id/join-requests"],
    [GroupRouteKey.FETCH_JOIN_REQUESTS, "/groups/:id/join-requests"],
    [GroupRouteKey.ACCEPT_JOIN_REQUEST, "/groups/:id/join-requests/:userId"],
    [GroupRouteKey.REJECT_JOIN_REQUEST, "/groups/:id/join-requests/:userId"],
    [GroupRouteKey.FETCH_POSTS, "/groups/:id/posts"],
]);

export enum AuthRouteKey {
    LOGIN,
    REFRESH_ACCESS_TOKEN,
}

export const AuthRoutes: Map<AuthRouteKey, string> = new Map([
    [AuthRouteKey.LOGIN, "/auth/"],
    [AuthRouteKey.REFRESH_ACCESS_TOKEN, "/auth/token"],
]);
