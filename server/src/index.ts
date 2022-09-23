import express, {Request, Response} from 'express';
import {Posts} from './modules/posts';
import {HTTP_CODES, success, error} from './assets/helper';
import {DBInstance} from './db';
import {
    AnswerType,
    RequestEmpty,
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody
} from './types';
import {CreatePostBodyModel} from './models/news/CreatePostBodyModel';
import {
    UpdatePostBodyModel,
    UpdatePostQueryModel
} from './models/news/UpdatePostModel';
import {ReadPostParamsModel} from './models/news/ReadPostModel';
import {DeletePostParamsModel} from './models/news/DeletePostModel';
const path = require('path');
export const app = express();
const port = 3333;

const postsInstance = new Posts(20);

const jsonBodyMiddleware = express.json();

app.use(express.static(path.join(__dirname)));
app.use(jsonBodyMiddleware);

/* NEWS */
// read
app.get(
    '/api/news/:id',
    (
        req: RequestWithParams<ReadPostParamsModel>,
        res: Response<AnswerType | number>
    ) => {
        const id = parseInt(req.params.id);

        DBInstance.getNews(id)
            .then((data) => {
                const cleanData = Array.isArray(data) ? data[0] : null;
                res.status(HTTP_CODES.OK_200).json(success(cleanData));
            })
            .catch((error) => {
                console.warn(error);
                res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
            });
    }
);
// read
app.get(
    '/api/news',
    (
        req: RequestEmpty,
        res: Response<AnswerType | number>
    ) => {
        DBInstance.getAllNews()
            .then((data) => {
                res.status(HTTP_CODES.OK_200).json(success(data));
            })
            .catch((error) => {
                console.warn(error);
                res.sendStatus(HTTP_CODES.SERVER_ERROR_500);
            });
    }
);
// create
app.post(
    '/api/news',
    (
        req: RequestWithBody<CreatePostBodyModel>,
        res: Response<AnswerType>
    ) => {
        const {title, message} = req.body;

        if (!title || !title.trim() || !message || !message.trim()) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error("'title' or 'message' is empty")
            );
            return;
        }

        const createdPost = postsInstance.add(title, message);

        res.status(HTTP_CODES.CREATED_201).json(success(createdPost));
    }
);
// update
app.put(
    '/api/news/:id',
    (
        req: RequestWithParamsAndBody<
            UpdatePostQueryModel,
            UpdatePostBodyModel
        >,
        res
    ) => {
        const id = parseInt(req.params.id);
        const {title, message} = req.body;

        if (!postsInstance.has(id)) {
            res.status(HTTP_CODES.NOT_FOUND_404).json(
                error('Новость не найдена')
            );
            return;
        }

        if (!title || !title.trim() || !message || !message.trim()) {
            res.status(HTTP_CODES.BAD_REQUEST_400).json(
                error("'title' or 'message' is empty")
            );
            return;
        }

        const updatedPost = postsInstance.update(id, title, message);

        res.status(HTTP_CODES.OK_200).json(success(updatedPost));
    }
);
// delete
app.delete(
    '/api/news/:id',
    (
        req: RequestWithParams<DeletePostParamsModel>,
        res: Response<AnswerType>
    ) => {
        const id = parseInt(req.params.id);

        if (!postsInstance.has(id)) {
            res.status(HTTP_CODES.NOT_FOUND_404).json(
                error('Новость не найдена')
            );
            return;
        }

        postsInstance.remove(id);

        res.status(HTTP_CODES.OK_200).json(success(id));
    }
);

/* NEWS END */


app.get('/insertBDnew13', (req, res) => {
    DBInstance.test__addEducators()
        .then(data => {
            console.log(data);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})

app.get('/*', (req: RequestEmpty, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
