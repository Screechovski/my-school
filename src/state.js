import img0 from './images/writing-tool.svg';
import img1 from './images/reading.svg';
import img2 from './images/carpenter.svg';
import img3 from './images/planet-earth.svg';
import img4 from './images/calculating.svg';
import img5 from './images/singing.svg';
import img6 from './images/paint.svg';
import img7 from './images/kremlin.svg';
import img8 from './images/fitness.svg';
import img9 from './images/house.svg';
import img10 from './images/church.svg';
import img11 from './images/foreign-language.svg';
import img12 from './images/overpopulation.svg';
import img13 from './images/history.svg';
import img14 from './images/history_writing.svg';
import img15 from './images/library.svg';
import img16 from './images/life-jacket.svg';
import img17 from './images/project-management.svg';
import img18 from './images/world-map.svg';
import img19 from './images/biology.svg';
import img20 from './images/computer.svg';
import img21 from './images/communities.svg';
import img22 from './images/divider.svg';
import img23 from './images/algebra.svg';
import img24 from './images/shapes.svg';
import img25 from './images/relativity.svg';
import img26 from './images/chemistry.svg';
import img27 from './images/economic.svg';
import img28 from './images/justice.svg';
import img29 from './images/yin-yang.svg';
import img30 from './images/eco.svg';
import img31 from './images/astronomy.svg';

const store = {
    _state: {
        subjects: [{
            id: 0,
            title: "Чистописание",
            href: "calligraphy"
        },
        {
            id: 1,
            title: "Чтение",
            href: "reading"
        },
        {
            id: 2,
            title: "Труд",
            href: "work"
        },
        {
            id: 3,
            title: "Природоведение",
            href: "natural_science"
        },
        {
            id: 4,
            title: "Математика",
            href: "mathematics"
        },
        {
            id: 5,
            title: "Музыка (Пение)",
            href: "music_(singing)"
        },
        {
            id: 6,
            title: "Изобразительное искусство (Рисование)",
            href: "fine_arts_(drawing)"
        },
        {
            id: 7,
            title: "Русский язык",
            href: "russian_language"
        },
        {
            id: 8,
            title: "Физкультура",
            href: "physical_education"
        },
        {
            id: 9,
            title: "Родной язык",
            href: "native_language"
        },
        {
            id: 10,
            title: "Основы религиозных культур и светской этики",
            href: "foundations_of_religious_cultures_and_secular_ethics"
        },
        {
            id: 11,
            title: "Иностранный язык",
            href: "foreign_language"
        },
        {
            id: 12,
            title: "Граждановедение",
            href: "citizenship"
        },
        {
            id: 13,
            title: "Краеведение",
            href: "local_history"
        },
        {
            id: 14,
            title: "История",
            href: "history"
        },
        {
            id: 15,
            title: "Литература",
            href: "literature"
        },
        {
            id: 16,
            title: "Основы безопасности жизнедеятельности (ОБЖ)",
            href: "fundamentals_of_life_safety_(obzh)"
        },
        {
            id: 17,
            title: "Технология",
            href: "technology"
        },
        {
            id: 18,
            title: "География",
            href: "geography"
        },
        {
            id: 19,
            title: "Биология",
            href: "biology"
        },
        {
            id: 20,
            title: "Информатика",
            href: "computer_science"
        },
        {
            id: 21,
            title: "Обществознание",
            href: "social_science"
        },
        {
            id: 22,
            title: "Черчение",
            href: "drawing"
        },
        {
            id: 23,
            title: "Алгебра",
            href: "algebra"
        },
        {
            id: 24,
            title: "Геометрия",
            href: "geometry"
        },
        {
            id: 25,
            title: "Физика",
            href: "physics"
        },
        {
            id: 26,
            title: "Химия",
            href: "chemistry"
        },
        {
            id: 27,
            title: "Основы экономики",
            href: "fundamentals_of_economics"
        },
        {
            id: 28,
            title: "Правоведение",
            href: "jurisprudence"
        },
        {
            id: 29,
            title: "Философия",
            href: "philosophy"
        },
        {
            id: 30,
            title: "Экология",
            href: "ecology"
        },
        {
            id: 31,
            title: "Астрономия",
            href: "astronomy"
        }],
        subjectsIcons: [
            img0, 
            img1, 
            img2, 
            img3, 
            img4, 
            img5, 
            img6, 
            img7, 
            img8, 
            img9, 
            img10, 
            img11, 
            img12, 
            img13, 
            img14, 
            img15, 
            img16, 
            img17, 
            img18, 
            img19, 
            img20, 
            img21, 
            img22, 
            img23, 
            img24, 
            img25, 
            img26, 
            img27, 
            img28, 
            img29, 
            img30, 
            img31
        ],
        educators: [{
            id: 0,
            name: 'Тарасов Макар Мэлсович'
        },
        {
            id: 1,
            name: 'Жукова Верона Семёновна'
        },
        {
            id: 2,
            name: 'Тетерин Касьян Лаврентьевич'
        },
        {
            id: 3,
            name: 'Кириллова Залина Богдановна'
        },
        {
            id: 4,
            name: 'Веселов Дмитрий Никитевич'
        },
        {
            id: 5,
            name: 'Васильева Дина Феликсовна'
        },
        {
            id: 6,
            name: 'Якушев Виктор Иринеевич'
        },
        {
            id: 7,
            name: 'Никонова Индира Аркадьевна'
        },
        {
            id: 8,
            name: 'Ильин Гордей Проклович'
        },
        {
            id: 9,
            name: 'Аксёнова Ярослава Фроловна'
        }],
        posts: [{
            "userId": 1,
            "date": "2021-06-10",
            "id": 24,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "date": "2021-06-11",
            "id": 23,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "date": "2021-09-07",
            "id": 22,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "date": "2021-10-01",
            "id": 21,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 1,
            "date": "2021-11-24",
            "id": 20,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }, {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
            "userId": 1,
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
            "userId": 1,
            "id": 9,
            "title": "nesciunt iure omnis dolorem tempora et accusantium",
            "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
        {
            "userId": 2,
            "id": 11,
            "title": "et ea vero quia laudantium autem",
            "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
            "userId": 2,
            "id": 12,
            "title": "in quibusdam tempore odit est dolorem",
            "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
            "userId": 2,
            "id": 13,
            "title": "dolorum ut in voluptas mollitia et saepe quo animi",
            "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
        },
        {
            "userId": 2,
            "id": 14,
            "title": "voluptatem eligendi optio",
            "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
        },
        {
            "userId": 2,
            "id": 15,
            "title": "eveniet quod temporibus",
            "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
        },
        {
            "userId": 2,
            "id": 16,
            "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
            "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
        },
        {
            "userId": 2,
            "id": 17,
            "title": "fugit voluptas sed molestias voluptatem provident",
            "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
        },
        {
            "userId": 2,
            "id": 18,
            "title": "voluptate et itaque vero tempora molestiae",
            "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
        },
        {
            "userId": 2,
            "id": 19,
            "title": "adipisci placeat illum aut reiciendis qui",
            "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
        }
    ]
    },
    getState(){
        return this._state;
    },
    getSubject(id = null){
        return (id === null) ?  this._state.subjects : this._state.subjects[id];
    },
    getSubjectIcon(id = null){
        return (id === null) ?  this._state.subjectsIcons : this._state.subjectsIcons[id];
    },
    getEducator(id = null){
        return (id === null) ?  this._state.educators : this._state.educators[id];
    },
    getPost(id = null){
        return (id === null) ?  this._state.posts : this._state.posts[id];
    }
}

export default store;