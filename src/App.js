import React from 'react';
import RHeader from './components/header/header';
import RSidebar from './components/sidebar/sidebar';
import RNewsCard from './components/newsCard/newsCard';
import tmpData from './tmpPostData';
import  './App.sass';

const App = () => {
  return (
    <div className="page">
      <RHeader />
      <div className="page__body page-body page-body--width-sidebar">
        <div className="r-container page-body__r-container">
          <RSidebar parentClass="page-body__sidebar" title={"Новости"} slot={tmpData.map((elem,index)=>{
            return <RNewsCard 
              id={elem.id} 
              title={elem.title} 
              text={elem.body} 
              linkUrl={'#' + index}
              date={elem.date}
            />
          })}/>
        </div>
      </div>
    </div>
  );
};

export default App;
