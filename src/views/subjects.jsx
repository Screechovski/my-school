import React from 'react';
import RMain from '../molecules/MainContent/MainContent';
import RSubjectCard from './../components/subjectCard/subjectCard';
import RSidebar from './../components/sidebar/sidebar';

const subjects = ({subjectsElements}) => {
    return (
        <div className="r-container page-body__r-container">        
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Новости"
            />

            <RMain 
                parentClass="page-body__content page-body__content--sidebar" 
                title="Предметы" 
                typeContent="subjects" 
                slot={subjectsElements.map(elem=>
                    <RSubjectCard
                        id={elem.id}
                        key={elem.id * Math.random()}
                        title={elem.title}
                        image={elem.image}
                    />
                )}
            />
        </div>

    )
}

export default subjects;