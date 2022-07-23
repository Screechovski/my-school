import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import { Header } from "./molecules/Header/Header";
import { Footer } from "./molecules/Footer/Footer";
import { PageIndex } from "./views/PageIndex/PageIndex";
import { PageNews } from "./views/PageNews/PageNews";
import { PageSubjects } from "./views/PageSubjects/PageSubjects";
import { PageEducators } from './views/PageEducators/PageEducators';
import {PageEducatorInner} from "./views/PageEducatorInner/PageEducatorInner";
import {PageNewsInner} from "./views/PageNewsInner/PageNewsInner";


export const App = (props) => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<PageIndex />} />
                    <Route path="/news" element={<PageNews />} />
                    <Route path="/subjects" element={<PageSubjects />} />
                    <Route path="/educators" element={<PageEducators />} />

                    <Route path="/about" element={<span />} />
                    <Route path="/miscellanea" element={<span />} />
                    <Route path="/review" element={<span />} />

                    <Route path="/educator-inner/:educatorId" element={<PageEducatorInner />} />
                    <Route path="/news-inner/:newsId" element={<PageNewsInner />} />

                    {/*<Route path="/subjects-inner/:subjectId" element={<span />} />*/}
                    {/*<Route path="/news-inner/:newsId" element={<span />} />*/}
                </Routes>
                <Footer />
            </BrowserRouter>


            {/* <section className="page__body page-body page-body--width-Sidebar">
                <Routes>

                    <section className="page__body page-body page-body--width-Sidebar"></section>

                    <Route path="/about" element={<PageAbout />} />

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

                        return <PageEducatorInner
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