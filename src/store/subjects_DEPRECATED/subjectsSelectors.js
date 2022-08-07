export const getSubjects = (state) => state.subjectsReducer.subjects;
export const getSubjectsShort = (count) => (state) => state.subjectsReducer.subjects.slice(0, count);
export const subjectsLoading = (state) => state.subjectsReducer.loading;
export const subjectsInited = (state) => state.subjectsReducer.inited;
export const subjectsError = (state) => state.subjectsReducer.error;