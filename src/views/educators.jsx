import React from 'react';
import RMain from './../components/mainContent/mainContent';
import REducatorCard from './../components/educatorCard/educatorCard';
import RSidebar from './../components/sidebar/sidebar';
import RNewsCard from './../components/newsCard/newsCard';

const educators = ({sidebarNews, educatorsElements}) => {
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
            
            <RMain parentClass="page-body__content page-body__content--sidebar" title="Педагоги" typeContent="educators" slot={educatorsElements.map(elem=>
                <REducatorCard
                    key={elem.id * Math.random()}
                    image={elem.image}
                    name={elem.name}
                    email ={elem.email}
                    educatorId={elem.id}
                />
            )}/>
        </div>
    )
}

export default educators;