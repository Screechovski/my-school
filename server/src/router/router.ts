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
import {authorization} from "../controllers/authorizationController";
import {resetPassword, resetPasswordConfirm, resetPasswordEnd} from "../controllers/resetPasswordController";
// @ts-ignore
export const router = new Router();

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
router.post('/registration', registration);
router.post('/registration-confirm', registrationConfirm);
router.post('/registration-end', registrationEnd);

/* AUTH */
router.post('/auth', authorization);

/* RESET PASSWORD */
router.post('/reset-password', resetPassword);
router.post('/reset-password-confirm', resetPasswordConfirm);
router.post('/reset-password-end', resetPasswordEnd);
