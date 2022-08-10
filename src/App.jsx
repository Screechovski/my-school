import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.sass";
import {Header} from "./molecules/Header/Header";
import {Footer} from "./molecules/Footer/Footer";
import {PageIndex} from "./views/PageIndex/PageIndex";
import {PageNews} from "./views/PageNews/PageNews";
import {PageSubjects} from "./views/PageSubjects/PageSubjects";
import {PageEducators} from "./views/PageEducators/PageEducators";
import {PageEducatorInner} from "./views/PageEducatorInner/PageEducatorInner";
import {PageNewsInner} from "./views/PageNewsInner/PageNewsInner";
import {PageSubjectInner} from "./views/PageSubjectInner/PageSubjectInner";
import {PageEvents} from "./views/PageEvents/PageEvents";
import {PageAuthForm} from "./views/PageAuthForm/PageAuthForm";
import {PageRegisterForm} from "./views/PageRegisterForm/PageRegisterForm";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<PageIndex />} />
                <Route path="/news" element={<PageNews />} />
                <Route path="/subjects" element={<PageSubjects />} />
                <Route path="/educators" element={<PageEducators />} />

                <Route path="/about" element={<span />} />
                <Route path="/events" element={<PageEvents />} />

                <Route
                    path="/educator-inner/:educatorId"
                    element={<PageEducatorInner />}
                />
                <Route path="/news-inner/:newsId" element={<PageNewsInner />} />
                <Route
                    path="/subjects-inner/:subjectId"
                    element={<PageSubjectInner />}
                />
                <Route path="/event-inner/:eventId" element={<span />} />

                <Route path="/auth" element={<PageAuthForm />} />
                <Route path="/register" element={<PageRegisterForm />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
