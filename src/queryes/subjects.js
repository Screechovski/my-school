import {myFetch} from "../assets/helper";

export const subjectsQuery = () => myFetch("/subjects");
export const subjectQuery = (id) => () => myFetch("/subjects/" + id);
