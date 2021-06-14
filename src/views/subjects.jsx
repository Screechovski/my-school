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
                to={"/subjects/?id=" + elem.id}
                key={elem.id} 
                title={elem.title}
                image={state.getSubjectIcon(elem.id)}
            />
        );
    })
    const sidebarNews = state.getPost().slice(0,4).map((elem,index)=>{
        return <RNewsCard
            key={elem.id}
            id={elem.id}
            title={elem.title}
            text={elem.body}
            linkUrl={'#' + index}
            date={elem.date}
        />
    });

    return (
        <div className="r-container page-body__r-container">        
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews}/>

            <RMain parentClass="page-body__content" title="Предметы" typeContent="subjects" slot={subjectsElements}/>
        </div>

    )
}

export default subjects;