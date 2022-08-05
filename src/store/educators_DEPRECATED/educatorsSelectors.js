export const getEducators = (state) => state.educatorsReducer.educators;
export const getEducatorsShort = (count) => (state) => state.educatorsReducer.educators.slice(0, count);
export const educatorsLoading = (state) => state.educatorsReducer.loading;
export const educatorsInited = (state) => state.educatorsReducer.inited;
export const educatorsError = (state) => state.educatorsReducer.error;