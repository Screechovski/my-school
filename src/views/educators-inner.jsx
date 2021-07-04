//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import REducatorsInnerContent from '../components/educatorsInnerContent/educatorsInnerContent';
import RSidebar from '../components/sidebar/sidebar';
import RNewsCard from '../components/newsCard/newsCard';

const educatorsInner = ({coursesTaught, educator, sidebarNews}) => {
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

            <RMain parentClass="page-body__content page-body__content--sidebar" typeContent="" slot={
                <REducatorsInnerContent 
                    image={educator.image}
                    id={educator.id}
                    name={educator.name}
                    position={educator.position}
                    educationLevel={educator.educationLevel}
                    tel={educator.tel}
                    email={educator.email}
                    coursesTaught={coursesTaught}
                />
            }/>
        </div>
    )
}

export default educatorsInner;