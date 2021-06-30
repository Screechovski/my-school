import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSubjectCard from './../components/subjectCard/subjectCard';
import RSidebar from './../components/sidebar/sidebar';
import RNewsCard from './../components/newsCard/newsCard';
import state from './../state';

const subjects = () => {
    const subjectsElements = state.getSubject().map((elem,index)=>{
        return (
            <RSubjectCard
                id={elem.id}
                key={elem.id} 
                title={elem.title}
                image={elem.image}
            />
        );
    })
    const sidebarNews = state.getPost().slice(0,4).map(elem => <RNewsCard key={elem.id} id={elem.id}/>);

    return (
        <div className="r-container page-body__r-container">        
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews}/>

            <RMain parentClass="page-body__content page-body__content--sidebar" title="Предметы" typeContent="subjects" slot={subjectsElements}/>
        </div>

    )
}

export default subjects;