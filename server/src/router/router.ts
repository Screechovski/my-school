import {Router} from 'express';
import {
    eventsController,
    readSingleEvent
} from '../controllers/eventsController';
import {
    readSingleSubject,
    subjectsController
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
// @ts-ignore
export const router = new Router();
import {check, body} from 'express-validator';
import {VALIDATION_RULES} from '../assets/constants';
import {authorization} from '../controllers/authorizationController';
import {readUsers} from '../controllers/usersController';
import {authMiddleware} from '../middleware/authMiddleware';
import {roleMiddleware} from '../middleware/roleMiddleware';
import {logout} from '../controllers/logoutController';
import {refresh} from '../controllers/refreshController';
import {checkToken} from '../controllers/checkTokenController';

/* NEWS */
router.post('/news', createNews);
router.get('/news', readNews);
router.get('/news/:id', readSingleNews);
router.put('/news', updateNews);
router.delete('/news/:id', deleteNews);

/* EVENTS */
router.get('/events', eventsController);
router.get('/event/:id', readSingleEvent);

/* SUBJECTS */
router.get('/subjects', subjectsController);
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
    ],
    registration
);
router.post(
    '/registration-confirm',
    [
        body('code', 'Поле code не может быть пустым').notEmpty(),
        body('code', `Длина кода должна быть ${VALIDATION_RULES.code.length}`).isLength({max: VALIDATION_RULES.code.length, min: VALIDATION_RULES.code.length}),
        body('email', 'Email не может быть пустым').notEmpty(),
        body('email', 'Неверный email').isEmail(),
        // body('code', 'Неверный код').equals('a35y7u'),
    ],
    registrationConfirm
);
router.post(
    '/registration-end',
    [
        body('code', 'Поле code не может быть пустым').notEmpty(),
        body('code', `Длина кода должна быть ${VALIDATION_RULES.code.length}`).isLength({max: VALIDATION_RULES.code.length, min: VALIDATION_RULES.code.length}),
        body('email', 'Email не может быть пустым').notEmpty(),
        body('email', 'Неверный email').isEmail(),
        body('password', 'Пароль не может быть пустым').notEmpty(),
        body('password', 'Пароль должен быть от 6 до 20 символов').isLength({
            min: VALIDATION_RULES.password.minLength,
            max: VALIDATION_RULES.password.maxLength
        })
    ],
    registrationEnd
);

/* AUTHORIZATION */
router.post(
    '/authorization',
    [
        check('email', 'Email не может быть пустым').notEmpty(),
        check('email', 'Неверный email').isEmail(),
        check('password', 'Пароль не может быть пустым').notEmpty(),
        check('password', 'Пароль должен быть от 6 до 20 символов').isLength({
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
