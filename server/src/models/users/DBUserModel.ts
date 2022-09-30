export type DBUserModel = {
    id: string;
    name: string | null;
    surname: string | null;
    patronymic: string | null;
    role: string;
    active: 1 | 0;
    phone: string | null;
    email: string;
    image: string | null;
    password: string;
    refresh_token: string;
};