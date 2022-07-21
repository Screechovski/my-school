//react
import React from 'react';
//components
import RNewsInnerContent from './../components/newsInnerContent/newsInnerContent'
import RSidebar from '../molecules/Sidebar/Sidebar';
import RMain from '../molecules/MainContent/MainContent';

const newsInner = ({mainImgUrl, title, date, body}) => {
    return (
        <div className="r-container page-body__r-container">     
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Другие новости" 
            />

            <RMain parentClass="page-body__content page-body__content--sidebar" typeContent="" slot={
                <RNewsInnerContent 
                    mainImgUrl={mainImgUrl}
                    title={title}
                    date={date}
                    body={body}
                />
            }/>
        </div>
    )
}

export default newsInner;