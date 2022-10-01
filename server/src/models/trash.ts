export type DBUsersModel = {
    id: number;
    name: string | null;
    surname: string | null;
    patronymic: string | null;
    role: string;
    active: 1 | 0;
    phone: string | null;
    email: string;
    image: string | null;
    password: string;
    refresh_token: string | null;
};
export type UserSafe = {
    id: number;
    name: string | null;
    surname: string | null;
    patronymic: string | null;
    role: string;
    active: boolean;
    phone: string | null;
    email: string;
    image: string | null;
};
export type CardUserModel = {
    id: number;
    name: string | null;
    email: string;
    image: string | null;
};
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
export type InputEducatorIdModel = {
    id: string;
};
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
export type DBSubjectYearsModel = {
    id: string;
    title: string;
    image: string;
    description: string | null;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
};
export type ViewSubjectYearsModel = {
    id: string;
    title: string;
    image: string;
    description: string | null;
    years: number[];
};
export type DBSubjectModel = {
    id: string;
    title: string;
    image: string;
    description: string;
};
export type ViewSubjectModel = {
    id: string;
    title: string;
    image: string;
    description: string;
};
export type RegistrationUserBodyEmail = {
    email: string;
};
export type CreatePostBodyModel = {title: string; message: string};
export type DeletePostParamsModel = {id: string};
export type ReadPostParamsModel = {id: string};
export type UpdatePostQueryModel = {id: string};
export type UpdatePostBodyModel = {title: string; message: string};
export type ViewPostModel = {
    id: string;
    image: string;
    title: string;
    message: string;
    created: string;
    updated: string;
    owner_id: string;
    moderation: string;
};
export type AuthorizationUserBodyData = {
    email: string;
    password: string;
};
