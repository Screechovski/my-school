import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore';
import 'css-reset-and-normalize';

const renderEntireTree = (store) => {
    const state = store.getState();
    ReactDOM.render(
        <React.StrictMode>
            <App
                navLinks={state.navLinks}
                news={state.posts}
                sidebarNews={state.posts.slice(0, 4)}
                subjectsElements={state.subjects}
                educatorsElements={state.educators}
                reviews={state.allUsersReview}
                currentReviewUserName={state.allUsersReview.currentUser.userName}
                currentReviewUserTitle={state.allUsersReview.currentUser.title}
                currentReviewUserMessage={state.allUsersReview.currentUser.message}
                getEducator={undefined}
                getNav={undefined}
                getPost={undefined}
                getReview={undefined}
                getSubject={undefined}
                dispatch={store.dispatch.bind(store)}
                getEducatorsBySubjectId={undefined}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

renderEntireTree(store);

store.subscribe(()=> {
    renderEntireTree(store)
});