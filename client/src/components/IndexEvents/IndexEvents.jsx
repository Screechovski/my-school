import React, {memo} from "react";
import css from "./IndexEvents.module.sass";
import {EventCard, EventCardLoading} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {getNumberArray, queryConfig} from "../../assets/helper";
import {useQuery} from "@tanstack/react-query";
import {eventsQuery} from "../../queryes/events";
import {NUM} from "../../assets/constants";

export const IndexEvents = memo(({}) => {
    const {isSuccess, isError, isLoading, data, error, refetch} = useQuery(
        ["events"],
        eventsQuery,
        queryConfig
    );

    if (isLoading) {
        return (
            <ul className={css.indexEvents}>
                {getNumberArray(NUM.events.indexPage).map((id) => (
                    <li className={css.indexEvents__item} key={id}>
                        <EventCardLoading />
                    </li>
                ))}
            </ul>
        );
    }

    if (isSuccess) {
        return (
            <ul className={css.indexEvents}>
                {data.data.slice(0, NUM.events.indexPage).map((item) => (
                    <li className={css.indexEvents__item} key={item.id}>
                        <EventCard
                            title={item.title}
                            id={item.id}
                            date={item.created}
                            body={item.message}
                        />
                    </li>
                ))}
            </ul>
        );
    }

    if (isError) {
        return <ErrorLine message={error.error} reload={refetch} />;
    }

    return <></>;
});
