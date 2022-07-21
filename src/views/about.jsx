import React from 'react';
import RMain from '../molecules/MainContent/MainContent';
import RSidebar from '../molecules/Sidebar/Sidebar';

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