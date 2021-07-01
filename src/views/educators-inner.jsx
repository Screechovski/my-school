//react
import React from 'react';
//components
import RMain from '../components/mainContent/mainContent';
import REducatorsInnerContent from '../components/educatorsInnerContent/educatorsInnerContent';
import RSidebar from '../components/sidebar/sidebar';
import RNewsCard from '../components/newsCard/newsCard';
//state   
import state from './../redux/state';

const educatorsInner = (props) => {
    const sidebarNews = state.getPost().slice(0,4).map(elem=><RNewsCard key={elem.id} id={elem.id}/>);    

    return (
        <div className="r-container page-body__r-container">     
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={sidebarNews}/>

            <RMain parentClass="page-body__content page-body__content--sidebar" typeContent="" slot={<REducatorsInnerContent educatorId={props.match.params.educatorId}/>}/>
        </div>
    )
}

export default educatorsInner;