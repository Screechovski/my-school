//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import RSidebar from '../components/sidebar/sidebar';
import RNewsCard from '../components/newsCard/newsCard';  
import RMessageFormContainer from '../components/messageForm/messageFormContainer';
import ReviewWrapContainer from './../components/reviewWrap/reviewWrapContainer';

const review = ({sidebarNews, reviews: { reviews }, store}) => {
    return (
        <div className="r-container page-body__r-container">  
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Новости" 
                slot={sidebarNews.map(elem=>
                    <RNewsCard 
                        key={elem.id} 
                        id={elem.id}
                        title={elem.title}
                        mainImgUrl={elem.mainImgUrl}
                        date={elem.date}
                        body={elem.body}
                    />
                )}
            />
            
            <RMain 
                parentClass="page-body__content page-body__content--sidebar"
                typeContent="" 
                title="Отзывы или пожелания" 
                slot={[

                ]}
            >
                <ReviewWrapContainer
                    key={0}
                />
                <RMessageFormContainer
                    key={1}
                />
            </RMain>
        </div>

    )
}

export default review;