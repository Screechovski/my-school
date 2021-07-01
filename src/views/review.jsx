//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import RSidebar from '../components/sidebar/sidebar';
import RNewsCard from '../components/newsCard/newsCard';  
import RMessageForm from '../components/messageForm/messageForm';  
import RRviewWrap from './../components/reviewWrap/reviewWrap'
//state 
import state from './../redux/state';

const about = () => {
    const sidebarNews = state.getPost().slice(0,4).map(elem=><RNewsCard key={elem.id} id={elem.id}/>);

    return (
        <div className="r-container page-body__r-container">  
            <RSidebar 
                parentClass="page-body__sidebar" 
                title="Новости" 
                slot={sidebarNews}
            />
            
            <RMain 
                parentClass="page-body__content page-body__content--sidebar"
                typeContent="" 
                title="Отзывы или пожелания" 
                slot={[<RRviewWrap key={0}/>, <RMessageForm key={1}/>]}
            />
        </div>

    )
}

export default about;