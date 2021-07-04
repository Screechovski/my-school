//react
import React from 'react';
//components
import RNewsInnerContent from './../components/newsInnerContent/newsInnerContent'
import RSidebar from './../components/sidebar/sidebar';
import RMain from './../components/mainContent/mainContent';
import RNewsCard from './../components/newsCard/newsCard';

const newsInner = ({sidebarNews, mainImgUrl, title, date, body}) => {
    return (
        <div className="r-container page-body__r-container">     
            <RSidebar parentClass="page-body__sidebar" title="Другие новости" slot={sidebarNews.map(elem=>
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