export const getEducatorInner = (id) => (state) => state.educatorInnerReducer[id]?.educatorInner;
export const educatorInnerLoading = (id) => (state) => state.educatorInnerReducer[id]?.loading;
export const educatorInnerInited = (id) => (state) => state.educatorInnerReducer[id]?.inited;
export const educatorInnerError = (id) => (state) => state.educatorInnerReducer[id]?.error;