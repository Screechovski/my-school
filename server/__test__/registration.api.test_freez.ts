import {error, success} from '../src/assets/helper';
import request from 'supertest';
import {app} from '../src';
import {HTTP_CODES} from '../src/assets/constants';

describe('/registration', () => {
    it('invalid email', async () => {
        await request(app)
            .post('/api/registration')
            .send({email: 'testmail.ru'})
            .expect(
                HTTP_CODES.BAD_REQUEST_400,
                error('Ошибка при регистрации', [
                    {
                        value: 'testmail.ru',
                        msg: 'Неверный email',
                        param: 'email',
                        location: 'body'
                    }
                ])
            );
    });
    it('valid  email', async () => {
        await request(app)
            .post('/api/registration')
            .send({email: 'test@mail.ru'})
            .expect(HTTP_CODES.OK_200, success(null));

    });
    it('empty email', async () => {
        await request(app)
            .post('/api/registration')
            .send({email: '   '})
            .expect(
                HTTP_CODES.BAD_REQUEST_400,
                error('Ошибка при регистрации', [
                    {
                        value: '   ',
                        msg: 'Неверный email',
                        param: 'email',
                        location: 'body'
                    }
                ])
            );
    });
    it('spaces email', async () => {
        await request(app)
            .post('/api/registration')
            .send({email: ''})
            .expect(
                HTTP_CODES.BAD_REQUEST_400,
                error('Ошибка при регистрации', [
                    {
                        value: '',
                        msg: 'Email не может быть пустым',
                        param: 'email',
                        location: 'body'
                    },
                    {
                        value: '',
                        msg: 'Неверный email',
                        param: 'email',
                        location: 'body'
                    }
                ])
            );
    });
    it('without email', async () => {
        await request(app)
            .post('/api/registration')
            .expect(
                HTTP_CODES.BAD_REQUEST_400,
                error('Ошибка при регистрации', [
                    {
                      msg: 'Email не может быть пустым',
                      param: 'email',
                      location: 'body'
                    },
                    { msg: 'Неверный email', param: 'email', location: 'body' }
                  ])
            )
    });
});