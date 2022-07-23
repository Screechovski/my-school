import React, {useEffect, memo} from "react";
import {getNumberArray} from "../../assets/helper";
import {EventCard, EventCardLoading} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {eventsInit} from "../../store/events/eventsActions";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {eventsHook} from "../../store/events/eventsHook";
import {useDispatch} from "react-redux";

export const SidebarEvents = memo(() => {
    const { eventsInited, eventsLoading, eventsError, events } = eventsHook(4);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!eventsInited && !eventsLoading && !eventsError) dispatch(eventsInit());
    }, [])

    return (
        <Sidebar
            title="Мероприятия"
            cssClass="page__sidebar"
        >
            {eventsLoading &&
                <ul className="page__sidebarList">
                    {getNumberArray(4).map(id => <li key={id}>
                        <EventCardLoading />
                    </li>)}
                </ul>}

            {eventsInited &&
                <ul className="page__sidebarList">
                    {events.map(({
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
    )
})