import React, {memo, useEffect} from "react";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {eventsHook} from "../../store/events/eventsHook";
import {useDispatch} from "react-redux";
import {eventsInit} from "../../store/events/eventsActions";
import {SidebarNews} from "../../components/SidebarNews/SidebarNews";

let fixStrict = true;
export const PageNewsInner = memo(({}) => {
    const { eventsInited, eventsLoading, eventsError, events } = eventsHook(4);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fixStrict) return;
        fixStrict = false;

        if (!eventsInited && !eventsLoading) dispatch(eventsInit());
    }, [])

    return (
        <div className="page r-container">
            <SidebarNews />

            <MainContent
                cssClass="page__mainContainer"
                title="Предметы"
            >
                {/*{subjectsLoading && "Loading..."}*/}

                {/*{subjectsInited &&*/}
                {/*    <ul className={css.pageSubjects__list}>*/}
                {/*        {subjects.map(({*/}
                {/*                           id,*/}
                {/*                           title,*/}
                {/*                           imageName,*/}
                {/*                       }) =>*/}
                {/*            <li key={id}>*/}
                {/*                <SubjectCard*/}
                {/*                    image={imageName}*/}
                {/*                    title={title}*/}
                {/*                    id={id}*/}
                {/*                />*/}
                {/*            </li>)}*/}
                {/*    </ul>}*/}

                {/*{subjectsError &&*/}
                {/*    <ErrorLine*/}
                {/*        message={subjectsError}*/}
                {/*        reload={() => dispatch(subjectsInit())}*/}
                {/*    />}*/}
            </MainContent>
        </div>
    )
})
