import React, {memo} from "react";
import {MainContent} from "../../molecules/MainContent/MainContent";
import css from "./MainContentEvents.module.sass";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {useQuery} from "@tanstack/react-query";
import {eventsQuery} from "../../queryes/events";
import {EventCard, EventCardLoading} from "../../molecules/EventCard/EventCard";
import {getNumberArray} from "../../assets/helper";
import {NUM} from "../../assets/constants";

export const MainContentEvents = memo(() => {
    const {isSuccess, isError, isLoading, data, error, refetch} = useQuery(
        ["events"],
        eventsQuery
    );

    return (
        <MainContent title="Мероприятия" cssClass="page__mainContainer">
            {isLoading && (
                <ul className={css.mainContentEvents__list}>
                    {getNumberArray(NUM.events.count).map((i) => (
                        <li key={i}>
                            <EventCardLoading />
                        </li>
                    ))}
                </ul>
            )}

            {isSuccess && (
                <ul className={css.mainContentEvents__list}>
                    {data.data.map((event) => (
                        <li key={event.id}>
                            <EventCard
                                title={event.title}
                                body={event.message}
                                id={event.id}
                                date={event.date}
                            />
                        </li>
                    ))}
                </ul>
            )}

            {isError && <ErrorLine message={error.error} reload={refetch} />}
        </MainContent>
    );
});
