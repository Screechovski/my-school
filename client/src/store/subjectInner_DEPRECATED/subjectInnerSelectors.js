export const getSubjectInner = (id) => (state) => state.subjectInnerReducer[id]?.subjectInner;
export const getSubjectInnerEducators = (id) => (state) => state.subjectInnerReducer[id]?.subjectInnerEducators;
export const subjectInnerLoading = (id) => (state) => state.subjectInnerReducer[id]?.loading;
export const subjectInnerInited = (id) => (state) => state.subjectInnerReducer[id]?.inited;
export const subjectInnerError = (id) => (state) => state.subjectInnerReducer[id]?.error;