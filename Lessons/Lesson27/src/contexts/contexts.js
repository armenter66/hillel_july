import { createContext } from "react";

export const LanguageContext = createContext('qwertyu');
export const UserContext = createContext({ value: { name: 'DEFAULT', role: 'DEFAULT' } });