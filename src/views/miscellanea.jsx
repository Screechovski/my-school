import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSidebar from './../components/sidebar/sidebar';
import RNewsCard from './../components/newsCard/newsCard';   
import state from './../state';

const miscellanea = () => {
    const sidebarNews = state.getPost().slice(0,4).map(elem=><RNewsCard key={elem.id} id={elem.id}/>);

    return (
        <div className="r-container page-body__r-container">
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews}/>
            
            <RMain parentClass="page-body__content page-body__content--sidebar" title="Разное"/>
        </div>
    )
}

export default miscellanea;