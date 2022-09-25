import express from 'express';
import {RequestEmpty} from './types';
import {router} from './router/router';
import cookieParser from 'cookie-parser';
import path from 'path';

const port = 3333;

export const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);

app.get('/', (req: RequestEmpty, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

const start = () => {
    try {
        app.listen(port, () =>
            console.log(`Example app listening on port ${port}`)
        );
    } catch (e) {
        console.warn(e);
    }
};

start();
