export const getEvents = (state) => state.eventsReducer.events;
export const getEventsShort = (count) => (state) => state.eventsReducer.events.slice(0, count);
export const eventsLoading = (state) => state.eventsReducer.loading;
export const eventsInited = (state) => state.eventsReducer.inited;
export const eventsError = (state) => state.eventsReducer.error;