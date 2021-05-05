import React from 'react';
import RMain from './../components/mainContent/mainContent';
import ReducatorCard from './../components/educatorCard/educatorCard';

let educatorsData = [
    {
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
    }
]

const educators = () => {
    const educatorsElemts = educatorsData.map(elem => <ReducatorCard key={elem.id} name={elem.name} />)
    

    return (
        <RMain parentClass="page-body__content" title="Педагоги" typeContent="educators" slot={educatorsElemts}/>
    )
}

export default educators;