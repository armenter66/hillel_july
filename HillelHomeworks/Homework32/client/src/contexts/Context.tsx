import { createContext } from "react";

export interface IUser {
	login: string;
	role?: string;
}

export interface IUserContextValue {
	value: IUser | null;
	change: (user: IUser | null) => void;
}

export const UserContext = createContext<IUserContextValue>({
	value: null,
	change: () => {},
});