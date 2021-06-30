import React from 'react';
import RMain from './../components/mainContent/mainContent';
import REducatorCard from './../components/educatorCard/educatorCard';
import RSidebar from './../components/sidebar/sidebar';
import RNewsCard from './../components/newsCard/newsCard';   
import state from './../state';

const educators = () => {
    const educatorsElemts = state.getEducator().map(elem => <REducatorCard key={elem.id} educatorId={elem.id}/>);
    const sidebarNews = state.getPost().slice(0,4).map(elem=><RNewsCard key={elem.id} id={elem.id}/>);    

    return (
        <div className="r-container page-body__r-container">     
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews}/>
            
            <RMain parentClass="page-body__content page-body__content--sidebar" title="Педагоги" typeContent="educators" slot={educatorsElemts}/>
        </div>
    )
}

export default educators;