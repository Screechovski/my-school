//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import REducatorsInnerContent from '../components/educatorsInnerContent/educatorsInnerContent';
import RSidebar from '../components/sidebar/sidebar';

const educatorsInner = ({ coursesTaught, educator }) => {
    return (
        <div className="r-container page-body__r-container">
            <RSidebar
                parentClass="page-body__sidebar"
                title="Новости"
            />

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
            } />
        </div>
    )
}

export default educatorsInner;