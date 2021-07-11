import m1 from "../images/educators/m-1.jpg";
import w1 from "../images/educators/w-1.jpg";
import m2 from "../images/educators/m-2.jpg";
import m3 from "../images/educators/m-3.jpg";
import m4 from "../images/educators/m-4.jpg";
import w2 from "../images/educators/w-2.jpg";
import m5 from "../images/educators/m-5.jpg";
import w3 from "../images/educators/w-3.jpg";
import m6 from "../images/educators/m-6.jpg";
import w4 from "../images/educators/w-4.jpg";
import w5 from "../images/educators/w-5.jpg";
import m7 from "../images/educators/m-7.jpg";
import w6 from "../images/educators/w-6.jpg";
import w7 from "../images/educators/w-7.jpg";
import w8 from "../images/educators/w-8.jpg";

const initialState = [
    {
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
    }
];

const educatorsReducer = (state = initialState, action) => {
    return state;
}

export default educatorsReducer;