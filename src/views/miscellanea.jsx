import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSidebar from './../components/sidebar/sidebar';
import RNewsCard from './../components/newsCard/newsCard';

const miscellanea = ({sidebarNews}) => {
    return (
        <div className="r-container page-body__r-container">
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews.map(elem=>
                <RNewsCard 
                    key={elem.id} 
                    id={elem.id}
                    title={elem.title}
                    mainImgUrl={elem.mainImgUrl}
                    date={elem.date}
                    body={elem.body}
                />
            )}/>
            
            <RMain parentClass="page-body__content page-body__content--sidebar" title="Разное"/>
        </div>
    )
}

export default miscellanea;