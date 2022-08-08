import {myFetch} from "../assets/helper";

export const educatorsQuery = () => myFetch("/educators");

export const educatorQuery = (id) => () => myFetch("/educators/" + id);
