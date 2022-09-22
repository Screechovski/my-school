const path = require('path');
import express from 'express';
export const app = express();
const port = 3333;
import {Posts} from './modules/posts';
import {HTTP_CODES, success, error} from './assets/helper';

const postsInstance = new Posts(20);

const jsonBodyMiddleware = express.json();

app.use(express.static(path.join(__dirname)));
app.use(jsonBodyMiddleware);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});
// read
app.get('/news', (req, res) => {
    res.status(HTTP_CODES.OK_200).json(success(postsInstance.getAll()));
});
// read
app.get('/news/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (postsInstance.has(id)) {
        res.status(HTTP_CODES.OK_200).json(success(postsInstance.get(id)));
        return;
    } else {
        res.status(HTTP_CODES.NOT_FOUND_404).json(error('Новость не найдена'));
        return;
    }
});
// create
app.post('/news', (req, res) => {
    const {title, message} = req.body;

    if (!title || !title.trim() || !message || !message.trim()) {
        res.status(HTTP_CODES.BAD_REQUEST_400).json(
            error("'title' or 'message' is empty")
        );
        return;
    }

    const createdPost = postsInstance.add(title, message);

    res.status(HTTP_CODES.CREATED_201).json(success(createdPost));
});
// update
app.put('/news/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {title, message} = req.body;

    if (!postsInstance.has(id)) {
        res.status(HTTP_CODES.NOT_FOUND_404).json(error('Новость не найдена'));
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
});
// delete
app.delete('/news/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!postsInstance.has(id)) {
        res.status(HTTP_CODES.NOT_FOUND_404).json(error('Новость не найдена'));
        return;
    }

    postsInstance.remove(id);

    res.status(HTTP_CODES.OK_200).json(success(id));
});

app.delete('/q3576jn3a5723467m246__test__', (req, res) => {
    postsInstance.clean();
    res.sendStatus(HTTP_CODES.NO_CONTENT_204);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
