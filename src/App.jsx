import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import {Header} from "./molecules/Header/Header";
import {Footer} from "./molecules/Footer/Footer";
import {PageIndex} from "./views/PageIndex/PageIndex";
import {PageNews} from "./views/PageNews/PageNews";


export const App = (props) => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<PageIndex />} />
                    <Route path="/news" element={<PageNews />} />
                </Routes>
                <Footer />
            </BrowserRouter>


            {/* <section className="page__body page-body page-body--width-sidebar">
                <Routes>

                    <section className="page__body page-body page-body--width-sidebar"></section>

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

             */}
        </>
    );
};