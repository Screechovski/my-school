//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import RSubjectsInnerContent from '../components/subjectsInnerContent/subjectsInnerContent';
import RSidebar from '../components/sidebar/sidebar';

const subjects = ({title, educators, subjects, subjectId}) => {
    return (
        <div className="r-container page-body__r-container">        
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Новости" 
            />

            <RMain parentClass="page-body__content page-body__content--sidebar" typeContent="" slot={
                <RSubjectsInnerContent 
                    subjectId={subjectId}
                    title={title}
                    educators={educators}
                    subjects={subjects}
                    
                />
            }/>
        </div>

    )
}

export default subjects;