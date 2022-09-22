import {generateDate, getPrettyDate, messages, titles} from '../assets/items';

class Post {
    id: number;
    title: string;
    image: string;
    created: string;
    updated: string;
    message: string;

    constructor(
        id: number,
        title: string,
        image: string,
        created: string,
        updated: string,
        message: string
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.created = created;
        this.updated = updated;
        this.message = message;
    }
}

export class Posts {
    posts: Array<Post>;
    lastId: number;
    constructor(count: number) {
        this.posts = [];
        this.lastId = 0;

        for (let i = 0; i < count; i++) {
            const date = generateDate();
            const post = new Post(
                i + 1,
                // @ts-ignore
                titles()[i],
                'null',
                date,
                date,
                messages()[i]
            );
            this.lastId++;
            this.posts.push(post);
        }
    }
    has(id: number): boolean {
        return !!this.get(id);
    }
    get(id: number): Post | undefined {
        return this.posts.find((p) => p.id === id);
    }
    getAll(): Array<Post> {
        return this.posts;
    }
    add(title: string, message: string): Post {
        const date = getPrettyDate(new Date());

        const newPost = new Post(
            this.lastId,
            title,
            'null',
            date,
            date,
            message
        );

        this.posts.push(newPost);
        this.lastId++;

        return newPost;
    }
    update(id: number, title: string, message: string) {
        const targetPost = this.get(id);

        // @ts-ignore
        targetPost.title = title;
        // @ts-ignore
        targetPost.message = message;
        // @ts-ignore
        targetPost.updated = getPrettyDate(new Date());

        return targetPost;
    }
    remove(id: number) {
        this.posts = this.posts.filter((p) => p.id !== id);
    }
    clean() {
        this.posts = [];
    }
}
