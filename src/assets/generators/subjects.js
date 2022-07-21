const subjects = [
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

export const generateSubjects = () => subjects;

export const generateSubject = (value) => subjects.find(({ id }) => id === value);