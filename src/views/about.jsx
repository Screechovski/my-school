import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RSidebar from './../components/sidebar/sidebar';

const about = () => {
    return (
        <div className="r-container page-body__r-container">  
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Новости"
            />
            
            <RMain parentClass="page-body__content page-body__content--sidebar" title="О школе"/>
        </div>

    )
}

export default about;