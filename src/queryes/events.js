import {myFetch} from "../assets/helper";

export const eventsQuery = () => {
    return myFetch("/events");
};
