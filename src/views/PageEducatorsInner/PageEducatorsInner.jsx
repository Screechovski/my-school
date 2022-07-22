import React, {memo, useEffect} from 'react';
import {EventCard} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {useDispatch} from "react-redux";
import {eventsInit} from "../../store/events/eventsActions";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {MainContent} from "../../molecules/MainContent/MainContent";
import {useParams} from "react-router-dom";
import {eventsHook} from "../../store/events/eventsHook";

let fixStrict = false;
export const PageEducatorsInner = memo(() => {
    const { eventsInited, eventsLoading, eventsError, events } = eventsHook(4);

    const dispatch = useDispatch();
    const { educatorId } = useParams();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        if (!eventsInited && !eventsLoading) dispatch(eventsInit());
    }, [])

    return (
        <div className="page r-container">
            <Sidebar
                title="Мероприятия"
                cssClass="page__sidebar"
            >
                {eventsLoading && "Loading..."}

                {eventsInited &&
                    <ul className="page__sidebarList">
                        {events.slice(0, 4).map(({
                            date,
                            id,
                            message,
                            title
                        }) =>
                            <li key={id}>
                                <EventCard
                                    title={title}
                                    id={id}
                                    date={date}
                                    body={message}
                                />
                            </li>)}
                    </ul>}

                {eventsError &&
                    <ErrorLine
                        message={eventsError}
                        loading={eventsLoading}
                        reload={() => dispatch(eventsInit())}
                    />}
            </Sidebar>

            <MainContent
                cssClass="page__mainContainer"
                title="Преподаватель"
            >
                {/*{subjectsLoadingPS && "Loading..."}*/}

                {/*{subjectsInitedPS &&*/}
                {/*    <REducatorsInnerContent*/}
                {/*        image={educator.image}*/}
                {/*        id={educator.id}*/}
                {/*        name={educator.name}*/}
                {/*        position={educator.position}*/}
                {/*        educationLevel={educator.educationLevel}*/}
                {/*        tel={educator.tel}*/}
                {/*        email={educator.email}*/}
                {/*        coursesTaught={coursesTaught}*/}
                {/*    />}*/}

                {/*{subjectsErrorPS &&*/}
                {/*    <ErrorLine*/}
                {/*        message={subjectsErrorPS}*/}
                {/*        reload={() => dispatch(subjectsInit())}*/}
                {/*    />}*/}
            </MainContent>
        </div>
    )
})