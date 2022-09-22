import {error, HTTP_CODES, success} from '../src/assets/helper';
import request from 'supertest';
import {app} from '../src';

describe('/news', () => {
    beforeAll(async () => {
        await request(app).delete('/q3576jn3a5723467m246__test__');
    });

    it('bd is empty', async () => {
        await request(app).get('/news').expect(HTTP_CODES.OK_200, success([]));
    });

    it('bd is empty', async () => {
        await request(app)
            .get('/news/2')
            .expect(HTTP_CODES.NOT_FOUND_404, error('Новость не найдена'));
    });
    // TODO
});
