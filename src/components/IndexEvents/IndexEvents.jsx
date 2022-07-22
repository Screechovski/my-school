import React, {memo} from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {eventsInit} from "../../store/events/eventsActions";
import css from "./IndexEvents.module.sass";
import {EventCard} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";
import {eventsHook} from "../../store/events/eventsHook";

let fixStrict = false;

export const IndexEvents = memo(({}) => {
    const { eventsInited, eventsLoading, eventsError, events } = eventsHook(10);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        !eventsInited && dispatch(eventsInit())
    }, [])

    if (!eventsLoading && !eventsInited && !eventsError) {
        return <></>;
    }
    if (eventsLoading) {
        return (
            <ul className={css.indexEvents}>
                {([1, 2, 3, 4, 5]).map(id =>
                    <li
                        key={id}
                        className={css.indexEvents__item + " loading " + css.indexEvents__item_loading}
                    />)}
            </ul>
        )
    }
    if (eventsInited) {
        return (
            <ul className={css.indexEvents}>
                {events.map(item =>
                    <li className={css.indexEvents__item} key={item.id}>
                        <EventCard
                            title={item.title}
                            id={item.id}
                            date={item.date}
                            body={item.message}
                        />
                    </li>)}
            </ul>
        )
    }
    if (eventsError) {
        return <ErrorLine
            message={eventsError}
            reload={() => dispatch(eventsInit())}
        />
    }
    return <></>;
})
