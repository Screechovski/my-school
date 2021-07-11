import img0 from "../images/subjects/writing-tool.svg";
import img1 from "../images/subjects/reading.svg";
import img2 from "../images/subjects/carpenter.svg";
import img3 from "../images/subjects/planet-earth.svg";
import img4 from "../images/subjects/calculating.svg";
import img5 from "../images/subjects/singing.svg";
import img6 from "../images/subjects/paint.svg";
import img7 from "../images/subjects/kremlin.svg";
import img8 from "../images/subjects/fitness.svg";
import img9 from "../images/subjects/house.svg";
import img10 from "../images/subjects/church.svg";
import img11 from "../images/subjects/foreign-language.svg";
import img12 from "../images/subjects/overpopulation.svg";
import img13 from "../images/subjects/history.svg";
import img14 from "../images/subjects/history_writing.svg";
import img15 from "../images/subjects/library.svg";
import img16 from "../images/subjects/life-jacket.svg";
import img17 from "../images/subjects/project-management.svg";
import img18 from "../images/subjects/world-map.svg";
import img19 from "../images/subjects/biology.svg";
import img20 from "../images/subjects/computer.svg";
import img21 from "../images/subjects/communities.svg";
import img22 from "../images/subjects/divider.svg";
import img23 from "../images/subjects/algebra.svg";
import img24 from "../images/subjects/shapes.svg";
import img25 from "../images/subjects/relativity.svg";
import img26 from "../images/subjects/chemistry.svg";
import img27 from "../images/subjects/economic.svg";
import img28 from "../images/subjects/justice.svg";
import img29 from "../images/subjects/yin-yang.svg";
import img30 from "../images/subjects/eco.svg";
import img31 from "../images/subjects/astronomy.svg";

const initialState = [
    {
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
    }
];

const subjectsReducer = (state = initialState, action) => {
    return state;
}

export default subjectsReducer;