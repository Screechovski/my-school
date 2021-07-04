import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//state
import { addReview, getCurrentReview, getEducator, getEducatorsBySubjectId, getNav, getPost, getReview, getSubject, setCurrentReviewMessage, setCurrentReviewName, setCurrentReviewTitle } from './redux/state';
import 'css-reset-and-normalize';

const navLinks = getNav();
const news = getPost();
const sidebarNews = news.slice(0, 4);
const subjectsElements = getSubject();
const educatorsElements = getEducator();
const reviews = getReview();


export const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                navLinks={navLinks}
                news={news}
                sidebarNews={sidebarNews}
                subjectsElements={subjectsElements}
                educatorsElements={educatorsElements}
                reviews={reviews}
                getCurrentReview={getCurrentReview}
                getEducator={getEducator}
                getNav={getNav}
                getPost={getPost}
                getReview={getReview}
                getSubject={getSubject}
                setCurrentReviewName={setCurrentReviewName}
                setCurrentReviewMessage={setCurrentReviewMessage}
                setCurrentReviewTitle={setCurrentReviewTitle}
                addReview={addReview}
                getEducatorsBySubjectId={getEducatorsBySubjectId}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

renderEntireTree();

reportWebVitals();