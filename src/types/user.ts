export type User = {
    id: number;
    userTag: string;
    userName?: string,
    email: string;
    biography?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type CreateUser = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UpdateUser = Omit<User, "userTag" | "email" | "createdAt" | "updatedAt">;

export type Follows = {
    id: number;
    followerId: number;
    followingId: number;
    createdAt?: Date | null;
};

export type LoginCredentials = {
    email?: string;
    userTag?: string;
    password: string;
}
