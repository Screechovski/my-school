import {HTTP_CODES} from '../assets/constants';
import {error} from '../assets/helper';
import {AnswerType} from '../types';
import {Response, Request} from 'express';

export const roleMiddleware =
    (validRoles: string[] = []) =>
    (req: Request, res: Response<AnswerType>, next: any) => {
        try {
            // @ts-ignore
            if (!req.user && !validRoles.includes(req.user.role)) {
                res.status(HTTP_CODES.ACCESS_DENIED_403).json(
                    error('У вас нет доступа')
                );
            }
            next();
        } catch (e) {
            console.warn(e);
            res.status(HTTP_CODES.ACCESS_DENIED_403).json(
                error('У вас нет доступа')
            );
        }
    };
