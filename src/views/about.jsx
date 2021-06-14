import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSidebar from './../components/sidebar/sidebar';
import RNewsCard from './../components/newsCard/newsCard';   
import state from './../state';

const about = () => {
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
            
            <RMain parentClass="page-body__content" title="О школе"/>
        </div>

    )
}

export default about;