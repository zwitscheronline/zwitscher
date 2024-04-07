import { writable } from "svelte/store";
import type { UserCredentials } from "../types/credentials";

export const userCredentials = writable<UserCredentials|null>(null);

export const getAccessToken = (): string | null => {
    let token: string | null = null;
    userCredentials.subscribe((value) => {
        if (value) token = value.accessToken;
    });
    return token;
}

export const getRefreshToken = (): string | null => {
    let token: string | null = null;
    userCredentials.subscribe((value) => {
        if (value) token = value.refreshToken;
    });
    return token;
}
