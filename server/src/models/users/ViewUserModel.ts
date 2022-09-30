export type ViewUserModel = {
    id: string;
    name: string | null;
    surname: string | null;
    patronymic: string | null;
    role: string;
    active: boolean;
    phone: string | null;
    email: string;
    image: string | null;
};