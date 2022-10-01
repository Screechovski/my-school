import {Router} from 'express';
import {readEvents, readSingleEvent} from '../controllers/eventsController';
import {
    readSingleSubject,
    readSubjects,
    readSubjectWithYears
} from '../controllers/subjectsController';
import {
    createNews,
    deleteNews,
    readNews,
    readSingleNews,
    updateNews
} from '../controllers/newsController';
import {
    readEducators,
    readSingleEducator
} from '../controllers/educatorsController';
import {
    registration,
    registrationConfirm,
    registrationEnd
} from '../controllers/registrationController';
import {body} from 'express-validator';
import {USER_ROLES, VALIDATION_RULES} from '../assets/constants';
import {authorization} from '../controllers/authorizationController';
import {readUsers, updateUser} from '../controllers/usersController';
import {authMiddleware} from '../middleware/authMiddleware';
import {roleMiddleware} from '../middleware/roleMiddleware';
import {logout} from '../controllers/logoutController';
import {refresh} from '../controllers/refreshController';
import {checkToken} from '../controllers/checkTokenController';
import {readConstantsUserRoles} from '../controllers/constantsController';
// @ts-ignore
export const router = new Router();

/* NEWS */
router.post('/news', createNews);
router.get('/news', readNews);
router.get('/news/:id', readSingleNews);
router.put('/news', updateNews);
router.delete('/news/:id', deleteNews);

/* EVENTS */
router.get('/events', readEvents);
router.get('/event/:id', readSingleEvent);

/* SUBJECTS */
router.get('/subjects', readSubjects);
router.get('/subject/:id', readSingleSubject);

/* EDUCATORS */
router.get('/educators', readEducators);
router.get('/educator/:id', readSingleEducator);

/* REGISTRATION */
router.post(
    '/registration',
    [
        body('email', 'Email не может быть пустым').notEmpty(),
        body('email', 'Неверный email').isEmail(),
        body('deviceId', 'Не найден идентификатор устройства').notEmpty()
    ],
    registration
);
router.post(
    '/registration-confirm',
    [
        body('code', 'Поле code не может быть пустым').notEmpty(),
        body(
            'code',
            `Длина кода должна быть ${VALIDATION_RULES.code.length}`
        ).isLength({
            max: VALIDATION_RULES.code.length,
            min: VALIDATION_RULES.code.length
        }),
        body('email', 'Email не может быть пустым').notEmpty(),
        body('email', 'Неверный email').isEmail(),
        body('deviceId', 'Не найден идентификатор устройства').notEmpty()
    ],
    registrationConfirm
);
router.post(
    '/registration-end',
    [
        body('code', 'Поле code не может быть пустым').notEmpty(),
        body(
            'code',
            `Длина кода должна быть ${VALIDATION_RULES.code.length}`
        ).isLength({
            max: VALIDATION_RULES.code.length,
            min: VALIDATION_RULES.code.length
        }),
        body('email', 'Email не может быть пустым').notEmpty(),
        body('email', 'Неверный email').isEmail(),
        body('password', 'Пароль не может быть пустым').notEmpty(),
        body('password', 'Пароль должен быть от 6 до 20 символов').isLength({
            min: VALIDATION_RULES.password.minLength,
            max: VALIDATION_RULES.password.maxLength
        }),
        body('deviceId', 'Не найден идентификатор устройства').notEmpty()
    ],
    registrationEnd
);

/* AUTHORIZATION */
router.post(
    '/authorization',
    [
        body('email', 'Email не может быть пустым').notEmpty(),
        body('email', 'Неверный email').isEmail(),
        body('password', 'Пароль не может быть пустым').notEmpty(),
        body('password', 'Пароль должен быть от 6 до 20 символов').isLength({
            min: VALIDATION_RULES.password.minLength,
            max: VALIDATION_RULES.password.maxLength
        })
    ],
    authorization
);

router.get('/users', [authMiddleware], readUsers); //, roleMiddleware(['user'])], readUsers);

router.get('/logout', logout);

router.get('/refresh', refresh);

router.get('/check-token', [authMiddleware], checkToken);

router.get(
    '/profile/users',
    [authMiddleware, roleMiddleware(['admin'])],
    readUsers
);

router.patch(
    '/profile/user/:id',
    [
        authMiddleware,
        roleMiddleware(['admin']),
        body('role', 'Параметр role не передан').notEmpty(),
        body('role', 'Неверная параметр role').isIn(Object.values(USER_ROLES)),
        body('active', 'Параметр active не передан').notEmpty(),
        body('active', 'Неверная параметр active').isBoolean()
    ],
    updateUser
);

router.get(
    '/profile/subjects',
    [authMiddleware, roleMiddleware(['admin'])],
    readSubjectWithYears
);

router.get(
    '/profile/educators',
    [authMiddleware, roleMiddleware(['admin'])],
    readEducators
);

router.get(
    '/constants/user-roles',
    [authMiddleware, roleMiddleware(['operator', 'admin'])],
    readConstantsUserRoles
);
