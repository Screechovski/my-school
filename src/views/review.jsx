//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import RSidebar from '../components/sidebar/sidebar';
import RNewsCard from '../components/newsCard/newsCard';  
import RMessageForm from '../components/messageForm/messageForm';  
import RRviewWrap from './../components/reviewWrap/reviewWrap';

const review = ({sidebarNews, reviews, userName, title, message, setCurrentReviewName, setCurrentReviewTitle, setCurrentReviewMessage, addReview}) => {
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
                    <RRviewWrap 
                        key={0} 
                        reviews={reviews}
                    />, 
                    <RMessageForm 
                        key={1}
                        userName={userName}
                        title={title}
                        message={message}
                        setCurrentReviewName={setCurrentReviewName}
                        setCurrentReviewTitle={setCurrentReviewTitle}
                        setCurrentReviewMessage={setCurrentReviewMessage}
                        addReview={addReview}
                    />
                ]}
            />
        </div>

    )
}

export default review;