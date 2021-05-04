import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSubjectCard from './../components/subjectCard/subjectCard';
import tmpSubjectsData from './../tmpSubjectsData';
import tmpSubjectsIconsData from './../tmpSubjectIconsData.js';

const subjects = () => {
    return (
        <RMain parentClass="page-body__content" title="Предметы" typeContent="subjects" slot={tmpSubjectsData.map((elem,index)=>{
            return <RSubjectCard
                key={index}
                title={elem.title}
                image={tmpSubjectsIconsData[index]}
            />
        })}/>
    )
}

export default subjects;