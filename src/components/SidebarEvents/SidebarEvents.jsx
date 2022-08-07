import React, {memo} from "react";
import {getNumberArray} from "../../assets/helper";
import {EventCard, EventCardLoading} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {Sidebar} from "../../molecules/Sidebar/Sidebar";
import {useQuery} from "@tanstack/react-query";
import {eventsQuery} from "../../queryes/events";
import {NUM} from "../../assets/constants";

export const SidebarEvents = memo(() => {
    const {isSuccess, isError, isLoading, data, error, refetch} = useQuery(
        ["events"],
        eventsQuery
    );

    return (
        <Sidebar title="Мероприятия" cssClass="page__sidebar">
            {isLoading && (
                <ul className="page__sidebarList">
                    {getNumberArray(NUM.events.sidebar).map((id) => (
                        <li key={id}>
                            <EventCardLoading />
                        </li>
                    ))}
                </ul>
            )}

            {isSuccess && (
                <ul className="page__sidebarList">
                    {data.data
                        .slice(0, NUM.events.sidebar)
                        .map(({date, id, message, title}) => (
                            <li key={id}>
                                <EventCard
                                    title={title}
                                    id={id}
                                    date={date}
                                    body={message}
                                />
                            </li>
                        ))}
                </ul>
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </Sidebar>
    );
});
