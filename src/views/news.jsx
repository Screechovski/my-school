import React from 'react';
import RMain from './../components/mainContent/mainContent';
import RNewsCard from './../components/newsCard/newsCard';

const news = ({news}) => {
    return (
        <div className="r-container page-body__r-container">     
            <RMain 
                parentClass="page-body__content" 
                title="Новости" 
                typeContent="news" 
                slot={news.map(elem=>
                    <RNewsCard
                        key={elem.id}
                        title={elem.title} 
                        id={elem.id}
                        date={elem.date} 
                        body={elem.body} 
                        mainImgUrl={elem.mainImgUrl}
                    />    
                )}
            />
        </div>
    )
}

export default news;