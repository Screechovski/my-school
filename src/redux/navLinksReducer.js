const initialState = [
    {
        value: 'Главная',
        path: '/'
    },{
        value: 'О школе',
        path: '/about'
    },{
        value: 'Новости',
        path: '/news'
    },{
        value: 'Предметы',
        path: '/subjects'
    },{
        value: 'Педагоги',
        path: '/educators'
    }, {
        value: 'Разное',
        path: '/miscellanea'
    },{
        value: 'Отзывы',
        path: '/review'
    }
];
const navLinkReducer = (state = initialState, action) => {
    return state;
}

export default navLinkReducer;