import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RNewsCard from './../components/newsCard/newsCard';
import state from './../state';

const news = () => {
    const newsCards = state.getPost().map((elem,index)=>{
        return <RNewsCard
            key={elem.id}
            id={elem.id}
            title={elem.title}
            text={elem.body}
            linkUrl={'#' + index}
            date={elem.date}
            imgUrl="test.com"
        />
    });


    return (
        <div className="r-container page-body__r-container">     
            <RMain parentClass="page-body__content" title="Новости" typeContent="news" slot={newsCards}/>
        </div>
    )
}

export default news;