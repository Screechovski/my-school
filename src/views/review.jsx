//react
import React from 'react';
//components
import RMain from '../molecules/MainContent/MainContent';
import RSidebar from '../molecules/Sidebar/Sidebar';
import RMessageFormContainer from '../components/messageForm/messageFormContainer';
import ReviewWrapContainer from './../components/reviewWrap/reviewWrapContainer';

export default class Review extends React.Component {
    render(){
        return (
            <div className="r-container page-body__r-container">
                <RSidebar
                    parentClass="page-body__sidebar"
                    title="Новости"
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

}