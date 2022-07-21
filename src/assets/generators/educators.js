import { educators } from "./items";

export const generateEducators = () => educators;

export const generateEducator = (value) => educators.find(({ id }) => id === value);