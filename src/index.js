//react
import React from 'react';
//react-dom
import ReactDOM from 'react-dom';
//components
import App from './App';
//store
import store from './redux/reduxStore';
//react-redux
import {Provider} from "react-redux";
//css
import 'css-reset-and-normalize';

const state = store.getState();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App
                navLinks={state.navLinks}
                news={state.posts.posts}
                subjectsElements={state.subjects}
                educatorsElements={state.educators}
                reviews={state.allUsersReview}
                getEducator={undefined}
                getNav={undefined}
                getPost={undefined}
                getReview={undefined}
                getSubject={undefined}
                dispatch={store.dispatch.bind(store)}
                getEducatorsBySubjectId={undefined}
                store={store}
            />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)