export const CONSTANTS = {
    URLS: {
        reviews: 'https://6101a51049a5370017871243.mockapi.io/api/reviews',
        posts: 'https://6101a51049a5370017871243.mockapi.io/api/posts'
    },
    NAV_LINKS: {
        index: {
            value: 'Главная',
            path: '/'
        },
        about: {
            value: 'О школе',
            path: '/about'
        },
        news: {
            value: 'Новости',
            path: '/news'
        },
        events: {
            value: 'Мероприятия',
            path: '/events'
        },
        subjects: {
            value: 'Предметы',
            path: '/subjects'
        },
        educators: {
            value: 'Педагоги',
            path: '/educators'
        }
    }
};

export const NUM = {
    news: {
        loading: 20,
        sidebar: 4,
        count: 20,
        indexPage: 10
    },
    subjects: {
        count: 32
    },
    events: {
        sidebar: 4,
        indexPage: 10,
        count: 20
    },
    password: {
        minLength: 6,
        maxLength: 20
    },
    code: {
        length: 6
    }
};

export const QUERY_CONFIG = {
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    retryOnMount: false,
    retryDelay: false
};
