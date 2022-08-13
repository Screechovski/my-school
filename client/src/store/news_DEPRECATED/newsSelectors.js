export const getNews = (state) => state.newsReducer.news;
export const getNewsShort = (count) => (state) => state.newsReducer.news.slice(0, count);
export const getNewsItem = (id) => (state) => state.newsReducer.news.find(i => i.id === id);
export const newsLoading = (state) => state.newsReducer.loading;
export const newsInited = (state) => state.newsReducer.inited;
export const newsError = (state) => state.newsReducer.error;