import React from 'react';
import RMain from '../molecules/MainContent/MainContent';
import REducatorCard from './../components/educatorCard/educatorCard';
import RSidebar from './../components/sidebar/sidebar';

const educators = ({educatorsElements}) => {
    return (
        <div className="r-container page-body__r-container">     
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Новости" 
            />
            
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