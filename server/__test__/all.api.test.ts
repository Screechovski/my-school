import {error, success} from '../src/assets/helper';
import request from 'supertest';
import {app} from '../src';
import {HTTP_CODES} from '../src/assets/constants';

describe('/registration', () => {
    it('invalid email', async () => {
        await request(app)
            .post('/api/registration')
            .send({email: 'testmail.ru'})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
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
            .expect(HTTP_CODES.OK_200)
            .expect(success(null));
    });
    it('empty email', async () => {
        await request(app)
            .post('/api/registration')
            .send({email: '   '})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
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
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
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
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        msg: 'Email не может быть пустым',
                        param: 'email',
                        location: 'body'
                    },
                    {msg: 'Неверный email', param: 'email', location: 'body'}
                ])
            );
    });
});

describe('/registration-confirm', () => {
    it('invalid code', async () => {
        await request(app)
            .post('/api/registration-confirm')
            .send({code: '346578mk'})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value: '346578mk',
                        msg: 'Неверный код',
                        param: 'code',
                        location: 'body'
                    }
                ])
            );
    });
    it('valid code', async () => {
        await request(app)
            .post('/api/registration-confirm')
            .send({code: 'a35y7u'})
            .expect(HTTP_CODES.OK_200)
            .expect(success(null));
    });
    it('empty code', async () => {
        await request(app)
            .post('/api/registration-confirm')
            .send({code: ''})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value: '',
                        msg: 'Поле code не может быть пустым',
                        param: 'code',
                        location: 'body'
                    },
                    {
                        value: '',
                        msg: 'Неверный код',
                        param: 'code',
                        location: 'body'
                    }
                ])
            );
    });
    it('spaces code', async () => {
        await request(app)
            .post('/api/registration-confirm')
            .send({code: '    '})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value: '    ',
                        msg: 'Неверный код',
                        param: 'code',
                        location: 'body'
                    }
                ])
            );
    });
    it('without code', async () => {
        await request(app)
            .post('/api/registration-confirm')
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        msg: 'Поле code не может быть пустым',
                        param: 'code',
                        location: 'body'
                    },
                    {msg: 'Неверный код', param: 'code', location: 'body'}
                ])
            );
    });
});

describe('/registration-end', () => {
    it('invalid email', async () => {
        await request(app)
            .post('/api/registration-end')
            .send({email: '346578mk', password: 'e457u3ea5'})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value: '346578mk',
                        msg: 'Неверный email',
                        param: 'email',
                        location: 'body'
                    }
                ])
            );
    });
    it('short pass', async () => {
        await request(app)
            .post('/api/registration-end')
            .send({email: 'new@email.com', password: '3ad46'})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value: '3ad46',
                        msg: 'Пароль должен быть от 6 до 20 символов',
                        param: 'password',
                        location: 'body'
                    }
                ])
            );
    });
    it('long pass', async () => {
        await request(app)
            .post('/api/registration-end')
            .send({
                email: 'new@email.com',
                password: '3a3q67jn357m3qa47m3qa7d463a3q67jn357m3qa47m3qa7d46'
            })
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value:
                            '3a3q67jn357m3qa47m3qa7d463a3q67jn357m3qa47m3qa7d46',
                        msg: 'Пароль должен быть от 6 до 20 символов',
                        param: 'password',
                        location: 'body'
                    }
                ])
            );
    });
    it('empty email', async () => {
        await request(app)
            .post('/api/registration-end')
            .send({email: '', password: '3qa4567jn3'})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
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
    it('empty pass', async () => {
        await request(app)
            .post('/api/registration-end')
            .send({email: 'asd@asd.aa', password: ''})
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        value: '',
                        msg: 'Пароль не может быть пустым',
                        param: 'password',
                        location: 'body'
                    },
                    {
                        value: '',
                        msg: 'Пароль должен быть от 6 до 20 символов',
                        param: 'password',
                        location: 'body'
                    }
                ])
            );
    });
    it('without email and pass', async () => {
        await request(app)
            .post('/api/registration-end')
            .expect(HTTP_CODES.BAD_REQUEST_400)
            .expect(
                error('Ошибка при регистрации', [
                    {
                        msg: 'Email не может быть пустым',
                        param: 'email',
                        location: 'body'
                    },
                    {msg: 'Неверный email', param: 'email', location: 'body'},
                    {
                        msg: 'Пароль не может быть пустым',
                        param: 'password',
                        location: 'body'
                    },
                    {
                        msg: 'Пароль должен быть от 6 до 20 символов',
                        param: 'password',
                        location: 'body'
                    }
                ])
            );
    });
});
