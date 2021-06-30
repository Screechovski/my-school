import img0 from './images/subjects/writing-tool.svg';
import img1 from './images/subjects/reading.svg';
import img2 from './images/subjects/carpenter.svg';
import img3 from './images/subjects/planet-earth.svg';
import img4 from './images/subjects/calculating.svg';
import img5 from './images/subjects/singing.svg';
import img6 from './images/subjects/paint.svg';
import img7 from './images/subjects/kremlin.svg';
import img8 from './images/subjects/fitness.svg';
import img9 from './images/subjects/house.svg';
import img10 from './images/subjects/church.svg';
import img11 from './images/subjects/foreign-language.svg';
import img12 from './images/subjects/overpopulation.svg';
import img13 from './images/subjects/history.svg';
import img14 from './images/subjects/history_writing.svg';
import img15 from './images/subjects/library.svg';
import img16 from './images/subjects/life-jacket.svg';
import img17 from './images/subjects/project-management.svg';
import img18 from './images/subjects/world-map.svg';
import img19 from './images/subjects/biology.svg';
import img20 from './images/subjects/computer.svg';
import img21 from './images/subjects/communities.svg';
import img22 from './images/subjects/divider.svg';
import img23 from './images/subjects/algebra.svg';
import img24 from './images/subjects/shapes.svg';
import img25 from './images/subjects/relativity.svg';
import img26 from './images/subjects/chemistry.svg';
import img27 from './images/subjects/economic.svg';
import img28 from './images/subjects/justice.svg';
import img29 from './images/subjects/yin-yang.svg';
import img30 from './images/subjects/eco.svg';
import img31 from './images/subjects/astronomy.svg';
import m1 from './images/educators/m-1.jpg';
import m2 from './images/educators/m-2.jpg';
import m3 from './images/educators/m-3.jpg';
import m4 from './images/educators/m-4.jpg';
import m5 from './images/educators/m-5.jpg';
import m6 from './images/educators/m-6.jpg';
import m7 from './images/educators/m-7.jpg';
import w1 from './images/educators/w-1.jpg';
import w2 from './images/educators/w-2.jpg';
import w3 from './images/educators/w-3.jpg';
import w4 from './images/educators/w-4.jpg';
import w5 from './images/educators/w-5.jpg';
import w6 from './images/educators/w-6.jpg';
import w7 from './images/educators/w-7.jpg';
import w8 from './images/educators/w-8.jpg';
import { hasInArray } from './assets';
import statePostsGenerator from './statePostsGenerator';


const store = {
    _state: {
        subjects: [{
            id: 0,
            title: "Чистописание",
            href: "calligraphy",
            image: img0,
            years: [true,false,false,false,false,false,false,false,false,false,false]
        },
        {
            id: 1,
            title: "Чтение",
            href: "reading",
            image: img1,
            years: [true,true,true,true,false,false,false,false,false,false,false]

        },
        {
            id: 2,
            title: "Труд",
            href: "work",
            image: img2,
            years: [true,true,true,true,false,false,false,false,false,false,false]
        },
        {
            id: 3,
            title: "Природоведение",
            href: "natural_science",
            image: img3,
            years: [true,true,true,true,true,false,false,false,false,false,false]
        },
        {
            id: 4,
            title: "Математика",
            href: "mathematics",
            image: img4,
            years: [true,true,true,true,true,true,false,false,false,false,false]
        },
        {
            id: 5,
            title: "Музыка (Пение)",
            href: "music_(singing)",
            image: img5,
            years: [true,true,true,true,true,true,true,false,false,false,false]
        },
        {
            id: 6,
            title: "Изобразительное искусство (Рисование)",
            href: "fine_arts_(drawing)",
            image: img6,
            years: [true,true,true,true,true,true,true,true,true,true,true]
        },
        {
            id: 7,
            title: "Русский язык",
            href: "russian_language",
            image: img7,
            years: [true,true,true,true,true,true,true,true,true,true,true]
        },
        {
            id: 8,
            title: "Физкультура",
            href: "physical_education",
            image: img8,
            years: [true,true,true,true,true,true,true,true,true,true,true]
        },
        {
            id: 9,
            title: "Родной язык",
            href: "native_language",
            image: img9,
            years: [false,true,true,true,true,true,true,true,true,true,true]
        },
        {
            id: 10,
            title: "Основы религиозных культур и светской этики",
            href: "foundations_of_religious_cultures_and_secular_ethics",
            image: img10,
            years: [false,false,false,true,true,false,false,false,false,false,false]
        },
        {
            id: 11,
            title: "Иностранный язык",
            href: "foreign_language",
            image: img11,
            years: [false,false,false,true,true,true,true,true,true,true,true]
        },
        {
            id: 12,
            title: "Граждановедение",
            href: "citizenship",
            image: img12,
            years: [false,false,false,false,true,true,true,false,false,false,false]
        },
        {
            id: 13,
            title: "Краеведение",
            href: "local_history",
            image: img13,
            years: [false,false,false,false,true,true,true,false,false,false,false]
        },
        {
            id: 14,
            title: "История",
            href: "history",
            image: img14,
            years: [false,false,false,false,true,true,true,true,true,true,true]
        },
        {
            id: 15,
            title: "Литература",
            href: "literature",
            image: img15,
            years: [false,false,false,false,true,true,true,true,true,true,true]
        },
        {
            id: 16,
            title: "Основы безопасности жизнедеятельности (ОБЖ)",
            href: "fundamentals_of_life_safety_(obzh)",
            image: img16,
            years: [false,false,false,false,true,true,true,true,true,true,true]
        },
        {
            id: 17,
            title: "Технология",
            href: "technology",
            image: img17,
            years: [false,false,false,false,true,true,true,true,true,true,true]
        },
        {
            id: 18,
            title: "География",
            href: "geography",
            image: img18,
            years: [false,false,false,false,false,true,true,true,true,true,false]
        },
        {
            id: 19,
            title: "Биология",
            href: "biology",
            image: img19,
            years: [false,false,false,false,false,true,true,true,true,true,true]
        },
        {
            id: 20,
            title: "Информатика",
            href: "computer_science",
            image: img20,
            years: [false,false,false,false,false,true,true,true,true,true,true]
        },
        {
            id: 21,
            title: "Обществознание",
            href: "social_science",
            image: img21,
            years: [false,false,false,false,false,true,true,true,true,true,true]
        },
        {
            id: 22,
            title: "Черчение",
            href: "drawing",
            image: img22,
            years: [false,false,false,false,false,false,true,true,false,false,false]
        },
        {
            id: 23,
            title: "Алгебра",
            href: "algebra",
            image: img23,
            years: [false,false,false,false,false,false,true,true,true,true,true]
        },
        {
            id: 24,
            title: "Геометрия",
            href: "geometry",
            image: img24,
            years: [false,false,false,false,false,false,true,true,true,true,true]
        },
        {
            id: 25,
            title: "Физика",
            href: "physics",
            image: img25,
            years: [false,false,false,false,false,false,true,true,true,true,true]
        },
        {
            id: 26,
            title: "Химия",
            href: "chemistry",
            image: img26,
            years: [false,false,false,false,false,false,false,true,true,true,true]
        },
        {
            id: 27,
            title: "Основы экономики",
            href: "fundamentals_of_economics",
            image: img27,
            years: [false,false,false,false,false,false,false,false,false,true,true]
        },
        {
            id: 28,
            title: "Правоведение",
            href: "jurisprudence",
            image: img28,
            years: [false,false,false,false,false,false,false,false,false,true,true]
        },
        {
            id: 29,
            title: "Философия",
            href: "philosophy",
            image: img29,
            years: [false,false,false,false,false,false,false,false,false,true,true]
        },
        {
            id: 30,
            title: "Экология",
            href: "ecology",
            image: img30,
            years: [false,false,false,false,false,false,false,false,false,true,true]
        },
        {
            id: 31,
            title: "Астрономия",
            href: "astronomy",
            image: img31,
            years: [false,false,false,false,false,false,false,false,false,false,true]
        }],
        educators: [{
            id: 0,// история
            name: 'Тарасов Макар Мэлсович',
            educationLevel: 'высшее образование - специалитет',
            tel: '741(48)634-12-42',
            email: 'wuquibanabrei-6943@yopmail.com',
            coursesTaught: [12,13,14] ,
            image: m1
        },
        {
            id: 1, // история
            name: 'Зимина Гражина Александровна',
            position: '',
            educationLevel: '',
            tel: '2(6714)437-0227547',
            email: 'yeifreujocrouxa-1742@yopmail.com',
            coursesTaught: [10,14,21,27],
            image: w1
        },
        {
            id: 2,  // матем
            name: 'Тетерин Касьян Лаврентьевич',
            position: '',
            educationLevel: '',
            tel: '2(0755)860-0413371',
            email: 'quiyarauvubra-3784@yopmail.com',
            coursesTaught: [27,24,23,4],
            image: m2
        },
        {
            id: 3,  // математ
            name: 'Рогов Леонтий Яковлевич',
            position: '',
            educationLevel: '',
            tel: '25(6398)749-4512588',
            email: 'proiyatteyaubreu-1743@yopmail.com',
            coursesTaught: [22,23,24,4],
            image: m3
        },
        {
            id: 4,  // георг
            name: 'Веселов Дмитрий Никитевич',
            position: '',
            educationLevel: '',
            tel: '0(7171)150-2028991',
            email: 'cicocrequossi-3052@yopmail.com',
            coursesTaught: [18],
            image: m4
        },
        {
            id: 5,  // фнгл
            name: 'Васильева Дина Феликсовна',
            position: '',
            educationLevel: '',
            tel: '766(51)743-6237908',
            email: 'jonoitrerequei-6613@yopmail.com',
            coursesTaught: [11],
            image: w2
        },
        {
            id: 6,  // обж
            name: 'Якушев Виктор Иринеевич',
            position: '',
            educationLevel: '',
            tel: '208(1084)730-7164315',
            email: 'veuquokoineje-8739@yopmail.com',
            coursesTaught: [16],
            image: m5
        },
        {
            id: 7,  // труд
            name: 'Никонова Индира Аркадьевна',
            position: '',
            educationLevel: '',
            tel: '9(3517)080-7016826',
            email: 'lepugeipreque-3076@yopmail.com',
            coursesTaught: [17],
            image: w3
        },
        {
            id: 8,  // физ-ра
            name: 'Ильин Гордей Проклович',
            position: '',
            educationLevel: '',
            tel: '65(051)254-4153088',
            email: 'foiquequappotre-1359@yopmail.com',
            coursesTaught: [8],
            image: m6
        },
        {
            id: 9,  // информатика
            name: 'Аксёнова Ярослава Фроловна',
            position: '',
            educationLevel: '',
            tel: '5(24)044-6373939',
            email: 'quegeiyouddibra-3856@yopmail.com',
            coursesTaught: [20,22],
            image: w4
        },
        {
            id: 10,  // физика
            name: 'Кириллова Залина Богдановна',
            position: '',
            educationLevel: '',
            tel: '45(571)125-5234495',
            email: 'doinejukuffeu-5376@yopmail.com',
            coursesTaught: [25,31],
            image: w5
        },
        {
            id: 11,  // рус
            name: 'Лукин Ростислав Иванович',
            position: '',
            educationLevel: '',
            tel: '488(2419)137-5731202',
            email: 'yivaddagremei-8606@yopmail.com',
            coursesTaught: [7,9,15],
            image: m7
        },
        {
            id: 12,  // рус
            name: 'Жукова Верона Семёновна',
            position: '',
            educationLevel: '',
            tel: '2(878)132-7065957',
            email: 'puboifremacrei-8128@yopmail.com',
            coursesTaught: [0,1,7],
            image: w6
        },
        {
            id: 13,  // химия
            name: 'Мишина Розалия Федосеевна',
            position: '',
            educationLevel: '',
            tel: '66(80)373-5038353',
            email: 'queullefajepri-5547@yopmail.com',
            coursesTaught: [26,30],
            image: w7
        },
        {
            id: 14,  // биология
            name: 'Колобова Юна Авдеевна',
            position: '',
            educationLevel: '',
            tel: '3(44)617-2667494',
            email: 'nakauttabenu-2083@yopmail.com',
            coursesTaught: [19],
            image: w8
        }],
        posts: statePostsGenerator,
    },
    getState(){
        return this._state;
    },
    getSubject(id = null){
        return (id === null) ?  this._state.subjects : this._state.subjects[id];
    },
    getEducator(id = null){
        return (id === null) ?  this._state.educators : this._state.educators[id];
    },
    getPost(id = null){
        return (id === null) ?  this._state.posts : this._state.posts[id];
    },
    getEducatorsBySubjectId(id = null) {
        if (id === null) {
            return this._state.educators;
        } else {
            return this._state.educators.filter(educator=>hasInArray(educator.coursesTaught, id));
        }
    }
}

export default store;