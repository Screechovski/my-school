import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RNewsCard from './../components/newsCard/newsCard';
import state from './../state';

const news = () => {
    const newsCards = state.getPost().map(elem=> <RNewsCard key={elem.id} id={elem.id}/>);

    return (
        <div className="r-container page-body__r-container">     
            <RMain parentClass="page-body__content" title="Новости" typeContent="news" slot={newsCards}/>
        </div>
    )
}

export default news;