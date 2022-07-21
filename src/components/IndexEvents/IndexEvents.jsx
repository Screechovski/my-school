import React, {memo} from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {eventsError, eventsInited, eventsLoading, getEventsShort} from "../../store/events/eventsSelectors";
import {eventsInit} from "../../store/events/eventsActions";
import css from "./IndexEvents.module.sass";
import {EventCard} from "../../molecules/EventCard/EventCard";
import {ErrorLine} from "../../molecules/ErrorLine/ErrorLine";

let fixStrict = false;

export const IndexEvents = memo(({}) => {
    const events = useSelector(getEventsShort(10));
    const loading = useSelector(eventsLoading);
    const inited = useSelector(eventsInited);
    const error = useSelector(eventsError);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fixStrict) return;
        fixStrict = true;

        !inited && dispatch(eventsInit())
    }, [])

    if (!loading && !inited && !error) {
        return <></>;
    }
    if (loading) {
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
    if (inited) {
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
    if (error) {
        return <ErrorLine
            message={error}
            reload={() => dispatch(eventsInit())}
        />
    }
    return <></>;
})
