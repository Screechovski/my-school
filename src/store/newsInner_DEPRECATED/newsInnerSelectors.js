export const getNewsInner = (id) => (state) => state.newsInnerReducer[id]?.newsInner;
export const newsInnerLoading = (id) => (state) => state.newsInnerReducer[id]?.loading;
export const newsInnerInited = (id) => (state) => state.newsInnerReducer[id]?.inited;
export const newsInnerError = (id) => (state) => state.newsInnerReducer[id]?.error;