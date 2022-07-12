//react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import RHeader from './components/header/header';
import RFooter from './components/footer/footer';
//pages
import PageIndex from './views/PageIndex';
import PageSubjects from './views/subjects';
import PageAbout from './views/about';
import PageNews from './views/news';
import PageEducators from './views/educators';
import PageEducatorsInner from './views/educators-inner';
import PageSubjectsInner from './views/subjects-inner';
import PageMiscellanea from './views/miscellanea';
import PageNewsInner from './views/news-inner'
import PageReview from './views/review'
//css
import './App.sass';

const App = ({
    navLinks,
    news,
    reviews,
    subjectsElements,
    educatorsElements,
    getPost,
    getEducator,
    getSubject,
    getEducatorsBySubjectId,
    store
}) => {
    return (
        <BrowserRouter>
            <div className="page">
                <RHeader navLinks={navLinks} />

                <section className="page__body page-body page-body--width-sidebar">
                    <Routes>

                        <Route exact path="/" element={<PageIndex />} />

                        <Route path="/about" element={<PageAbout />} />

                        <Route path="/news" element={<PageNews news={news} />} />

                        <Route path="/subjects" element={<PageSubjects subjectsElements={subjectsElements} />} />

                        <Route path="/educators" element={<PageEducators educatorsElements={educatorsElements} />} />

                        <Route path="/miscellanea" element={<PageMiscellanea />} />

                        <Route path="/review" element={
                            <PageReview
                                reviews={reviews}
                                store={store}
                            />
                        } />

                        <Route path="/educators-inner/:educatorId" element={({ match }) => {
                            const educator = getEducator(Number(match.params.educatorId));
                            const coursesTaught = educator.coursesTaught.map(getSubject);

                            return <PageEducatorsInner
                                educator={educator}
                                coursesTaught={coursesTaught}
                            />
                        }} />

                        <Route path="/subjects-inner/:subjectId" element={({ match }) => {
                            const { title, id } = getSubject(Number(match.params.subjectId));
                            const educators = getEducatorsBySubjectId(id);

                            return <PageSubjectsInner
                                educators={educators}
                                title={title}
                                subjects={subjectsElements}
                                subjectId={match.params.subjectId}
                            />
                        }} />

                        <Route path="/news-inner/:newsId" element={({ match }) => {
                            const { mainImgUrl, title, date, body } = getPost(Number(match.params.newsId));

                            return <PageNewsInner
                                mainImgUrl={mainImgUrl}
                                title={title}
                                date={date}
                                body={body}
                            />
                        }} />

                    </Routes>

                </section>

                <RFooter />
            </div>
        </BrowserRouter>
    );
};

export default App;
