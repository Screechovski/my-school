// import img0 from "../images/subjects/writing-tool.svg";
// import img1 from "../images/subjects/reading.svg";
// import img2 from "../images/subjects/carpenter.svg";
// import img3 from "../images/subjects/planet-earth.svg";
// import img4 from "../images/subjects/calculating.svg";
// import img5 from "../images/subjects/singing.svg";
// import img6 from "../images/subjects/paint.svg";
// import img7 from "../images/subjects/kremlin.svg";
// import img8 from "../images/subjects/fitness.svg";
// import img9 from "../images/subjects/house.svg";
// import img10 from "../images/subjects/church.svg";
// import img11 from "../images/subjects/foreign-language.svg";
// import img12 from "../images/subjects/overpopulation.svg";
// import img13 from "../images/subjects/history.svg";
// import img14 from "../images/subjects/history_writing.svg";
// import img15 from "../images/subjects/library.svg";
// import img16 from "../images/subjects/life-jacket.svg";
// import img17 from "../images/subjects/project-management.svg";
// import img18 from "../images/subjects/world-map.svg";
// import img19 from "../images/subjects/biology.svg";
// import img20 from "../images/subjects/computer.svg";
// import img21 from "../images/subjects/communities.svg";
// import img22 from "../images/subjects/divider.svg";
// import img23 from "../images/subjects/algebra.svg";
// import img24 from "../images/subjects/shapes.svg";
// import img25 from "../images/subjects/relativity.svg";
// import img26 from "../images/subjects/chemistry.svg";
// import img27 from "../images/subjects/economic.svg";
// import img28 from "../images/subjects/justice.svg";
// import img29 from "../images/subjects/yin-yang.svg";
// import img30 from "../images/subjects/eco.svg";
// import img31 from "../images/subjects/astronomy.svg";

const initialState = [
    {
        id: 0,
        title: "Чистописание",
        href: "calligraphy",
        imageName: "writing-tool.svg",
        years: [true,false,false,false,false,false,false,false,false,false,false]
    },
    {
        id: 1,
        title: "Чтение",
        href: "reading",
        imageName: "reading.svg",
        years: [true,true,true,true,false,false,false,false,false,false,false]

    },
    {
        id: 2,
        title: "Труд",
        href: "work",
        imageName: "carpenter.svg",
        years: [true,true,true,true,false,false,false,false,false,false,false]
    },
    {
        id: 3,
        title: "Природоведение",
        href: "natural_science",
        imageName: "planet-earth.svg",
        years: [true,true,true,true,true,false,false,false,false,false,false]
    },
    {
        id: 4,
        title: "Математика",
        href: "mathematics",
        imageName: "calculating.svg",
        years: [true,true,true,true,true,true,false,false,false,false,false]
    },
    {
        id: 5,
        title: "Музыка (Пение)",
        href: "music_(singing)",
        imageName: "singing.svg",
        years: [true,true,true,true,true,true,true,false,false,false,false]
    },
    {
        id: 6,
        title: "Изобразительное искусство (Рисование)",
        href: "fine_arts_(drawing)",
        imageName: "paint.svg",
        years: [true,true,true,true,true,true,true,true,true,true,true]
    },
    {
        id: 7,
        title: "Русский язык",
        href: "russian_language",
        imageName: "kremlin.svg",
        years: [true,true,true,true,true,true,true,true,true,true,true]
    },
    {
        id: 8,
        title: "Физкультура",
        href: "physical_education",
        imageName: "fitness.svg",
        years: [true,true,true,true,true,true,true,true,true,true,true]
    },
    {
        id: 9,
        title: "Родной язык",
        href: "native_language",
        imageName: "house.svg",
        years: [false,true,true,true,true,true,true,true,true,true,true]
    },
    {
        id: 10,
        title: "Основы религиозных культур и светской этики",
        href: "foundations_of_religious_cultures_and_secular_ethics",
        imageName: "church.svg",
        years: [false,false,false,true,true,false,false,false,false,false,false]
    },
    {
        id: 11,
        title: "Иностранный язык",
        href: "foreign_language",
        imageName: "foreign-language.svg",
        years: [false,false,false,true,true,true,true,true,true,true,true]
    },
    {
        id: 12,
        title: "Граждановедение",
        href: "citizenship",
        imageName: "overpopulation.svg",
        years: [false,false,false,false,true,true,true,false,false,false,false]
    },
    {
        id: 13,
        title: "Краеведение",
        href: "local_history",
        imageName: "history.svg",
        years: [false,false,false,false,true,true,true,false,false,false,false]
    },
    {
        id: 14,
        title: "История",
        href: "history",
        imageName: "history_writing.svg",
        years: [false,false,false,false,true,true,true,true,true,true,true]
    },
    {
        id: 15,
        title: "Литература",
        href: "literature",
        imageName: "library.svg",
        years: [false,false,false,false,true,true,true,true,true,true,true]
    },
    {
        id: 16,
        title: "Основы безопасности жизнедеятельности (ОБЖ)",
        href: "fundamentals_of_life_safety_(obzh)",
        imageName: "life-jacket.svg",
        years: [false,false,false,false,true,true,true,true,true,true,true]
    },
    {
        id: 17,
        title: "Технология",
        href: "technology",
        imageName: "project-management.svg",
        years: [false,false,false,false,true,true,true,true,true,true,true]
    },
    {
        id: 18,
        title: "География",
        href: "geography",
        imageName: "world-map.svg",
        years: [false,false,false,false,false,true,true,true,true,true,false]
    },
    {
        id: 19,
        title: "Биология",
        href: "biology",
        imageName: "biology.svg",
        years: [false,false,false,false,false,true,true,true,true,true,true]
    },
    {
        id: 20,
        title: "Информатика",
        href: "computer_science",
        imageName: "computer.svg",
        years: [false,false,false,false,false,true,true,true,true,true,true]
    },
    {
        id: 21,
        title: "Обществознание",
        href: "social_science",
        imageName: "communities.svg",
        years: [false,false,false,false,false,true,true,true,true,true,true]
    },
    {
        id: 22,
        title: "Черчение",
        href: "drawing",
        imageName: "divider.svg",
        years: [false,false,false,false,false,false,true,true,false,false,false]
    },
    {
        id: 23,
        title: "Алгебра",
        href: "algebra",
        imageName: "algebra.svg",
        years: [false,false,false,false,false,false,true,true,true,true,true]
    },
    {
        id: 24,
        title: "Геометрия",
        href: "geometry",
        imageName: "shapes.svg",
        years: [false,false,false,false,false,false,true,true,true,true,true]
    },
    {
        id: 25,
        title: "Физика",
        href: "physics",
        imageName: "relativity.svg",
        years: [false,false,false,false,false,false,true,true,true,true,true]
    },
    {
        id: 26,
        title: "Химия",
        href: "chemistry",
        imageName: "chemistry.svg",
        years: [false,false,false,false,false,false,false,true,true,true,true]
    },
    {
        id: 27,
        title: "Основы экономики",
        href: "fundamentals_of_economics",
        imageName: "economic.svg",
        years: [false,false,false,false,false,false,false,false,false,true,true]
    },
    {
        id: 28,
        title: "Правоведение",
        href: "jurisprudence",
        imageName: "justice.svg",
        years: [false,false,false,false,false,false,false,false,false,true,true]
    },
    {
        id: 29,
        title: "Философия",
        href: "philosophy",
        imageName: "yin-yang.svg",
        years: [false,false,false,false,false,false,false,false,false,true,true]
    },
    {
        id: 30,
        title: "Экология",
        href: "ecology",
        imageName: "eco.svg",
        years: [false,false,false,false,false,false,false,false,false,true,true]
    },
    {
        id: 31,
        title: "Астрономия",
        href: "astronomy",
        imageName: "astronomy.svg",
        years: [false,false,false,false,false,false,false,false,false,false,true]
    }
];

const subjectsReducer = (state = initialState, action) => {
    return state;
}