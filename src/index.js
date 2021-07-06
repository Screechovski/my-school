import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';
//state
import { store } from './redux/state';
import 'css-reset-and-normalize';

const navLinks = store.getNav();
const news = store.getPost();
const sidebarNews = news.slice(0, 4);
const subjectsElements = store.getSubject();
const educatorsElements = store.getEducator();
const reviews = store.getReview();

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                navLinks={navLinks}
                news={news}
                sidebarNews={sidebarNews}
                subjectsElements={subjectsElements}
                educatorsElements={educatorsElements}
                reviews={reviews}
                currentReviewUserName={store.getCurrentReview().userName}
                currentReviewUserTitle={store.getCurrentReview().title}
                currentReviewUserMessage={store.getCurrentReview().message}
                getEducator={store.getEducator.bind(store)}
                getNav={store.getNav.bind(store)}
                getPost={store.getPost.bind(store)}
                getReview={store.getReview.bind(store)}
                getSubject={store.getSubject.bind(store)}
                dispatch={store.dispatch.bind(store)}
                getEducatorsBySubjectId={store.getEducatorsBySubjectId.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

renderEntireTree();

store.subscribe(renderEntireTree);