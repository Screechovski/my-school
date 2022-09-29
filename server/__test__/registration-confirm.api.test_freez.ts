import {error, success} from '../src/assets/helper';
import request from 'supertest';
import {app} from '../src';
import {HTTP_CODES} from '../src/assets/constants';

describe('/registration-confirm', () => {
    it('invalid code', async () => {
        await request(app)
            .post('/api/registration-confirm')
            .send({code: '346578mk'})
            .expect(
                HTTP_CODES.BAD_REQUEST_400,
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
});
