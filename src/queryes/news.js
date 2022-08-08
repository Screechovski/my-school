import {myFetch} from "../assets/helper";

export const newsQuery = () => myFetch("/news");
export const singleNewsQuery = (id) => () => myFetch("/news/" + id);
