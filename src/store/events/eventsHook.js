import {useSelector} from "react-redux";
import {eventsError, eventsInited, eventsLoading, getEvents, getEventsShort} from "./eventsSelectors";

export const eventsHook = (count = null) => ({
    eventsInited: useSelector(eventsInited),
    eventsLoading: useSelector(eventsLoading),
    eventsError: useSelector(eventsError),
    events: count ? useSelector(getEventsShort(count)) : useSelector(getEvents),
})