export type Group = {
    id: number;
    name: string;
    description?: string | null;
    isPrivate?: boolean | null;
    creatorId: number;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export type CreateGroup = Omit<Group, "id" | "creatorId" | "createdAt" | "updatedAt" | "deletedAt">;

export type GroupMember = {
    id: number;
    groupId: number;
    userId: number;
    createdAt?: Date | null;
    createdById?: number;
};

export type CreateGroupMember = Omit<GroupMember, "id" | "createdAt" | "createdById">;

export type GroupJoinRequest = {
    id: number;
    groupId: number;
    userId: number;
    createdAt?: Date | null;
};

export type CreateGroupJoinRequest = Omit<GroupJoinRequest, "id" | "createdAt">;
