import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSubjectCard from './../components/subjectCard/subjectCard';
import tmpSubjectsData from './../tmpSubjectsData';
import tmpSubjectsIconsData from './../tmpSubjectIconsData.js';

const subjects = () => {
    const subjectsElements = tmpSubjectsData.map((elem,index)=>{
        return (
            <RSubjectCard
                to={"/subjects/" + elem.href}
                key={elem.id} 
                title={elem.title}
                image={tmpSubjectsIconsData[index]}
            />
        );
        
        
    })

    return (
        <RMain parentClass="page-body__content" title="Предметы" typeContent="subjects" slot={subjectsElements}/>
    )
}

export default subjects;