//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import RSubjectsInnerContent from '../components/subjectsInnerContent/subjectsInnerContent';
import RSidebar from '../components/sidebar/sidebar';
import RNewsCard from '../components/newsCard/newsCard';
//state
import state from '../state';

const subjects = (props) => {
    const sidebarNews = state.getPost().slice(0,4).map(elem=> <RNewsCard key={elem.id} id={elem.id}/>);

    return (
        <div className="r-container page-body__r-container">        
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews}/>

            <RMain parentClass="page-body__content page-body__content--sidebar" typeContent="" slot={<RSubjectsInnerContent subjectId={props.match.params.subjectId}/>}/>
        </div>

    )
}

export default subjects;