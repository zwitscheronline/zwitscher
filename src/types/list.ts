export type List = {
    id: number;
    creatorId: number;
    name: string;
    description?: string;
    isPrivate?: boolean;
    createdAt?: Date | null;
    updatedAt?: Date | null;
};

export type CreateList = Omit<List, "id" | "createdAt" | "updatedAt">;
export type UpdateList = Omit<List, "id" | "creatorId" | "createdAt" | "updatedAt">;

export type ListFollower = {
    id: number;
    listId: number;
    userId: number;
    createdAt?: Date | null;
};

export type CreateListFollower = Omit<ListFollower, "id" | "createdAt">;

export type ListMember = {
    id: number;
    listId: number;
    userId: number;
    createdAt?: Date | null;
};

export type CreateListMember = Omit<ListMember, "id" | "createdAt">;
