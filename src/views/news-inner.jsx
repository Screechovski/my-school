//react
import React from 'react';
//components
import RNewsInnerContent from './../components/newsInnerContent/newsInnerContent'
import RSidebar from './../components/sidebar/sidebar';
import RMain from './../components/mainContent/mainContent';
import RNewsCard from './../components/newsCard/newsCard';
//state
import state from './../state';

const newsInner = (props) => {
    const sidebarNews = state.getPost().slice(0,4).map(elem=> <RNewsCard key={elem.id} id={elem.id}/>);

    return (
        <div className="r-container page-body__r-container">     
            <RSidebar parentClass="page-body__sidebar" title="Другие новости" slot={sidebarNews}/>

            <RMain parentClass="page-body__content page-body__content--sidebar" typeContent="" slot={<RNewsInnerContent newsId={props.match.params.newsId}/>}/>
        </div>
    )
}

export default newsInner;