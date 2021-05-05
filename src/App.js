import React from 'react';
import RHeader from './components/header/header';
import RSidebar from './components/sidebar/sidebar';
import RNewsCard from './components/newsCard/newsCard';
import RFooter from './components/footer/footer';
import tmpPostData from './tmpPostData';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageIndex from './views/index';
import PageSubjects from './views/subjects';
import PageAbout from './views/about';
import PageNews from './views/news';
import PageEducators from './views/educators';
import PageMiscellanea from './views/miscellanea';
import  './App.sass';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <RHeader />

        <section className="page__body page-body page-body--width-sidebar">
          <div className="r-container page-body__r-container">
            <RSidebar parentClass="page-body__sidebar" title="Новости" slot={tmpPostData.map((elem,index)=>{
              return <RNewsCard
                key={elem.id}
                id={elem.id}
                title={elem.title}
                text={elem.body}
                linkUrl={'#' + index}
                date={elem.date}
              />
            })}/>

            <Switch>
              <Route exact path="/" >  
                <PageIndex /> 
              </Route>
              <Route path="/about" > 
              <PageAbout />
               </Route>
              <Route path="/news" >  
                <PageNews /> 
              </Route>
              <Route path="/subjects" >  
                <PageSubjects /> 
              </Route>
              <Route path="/educators" > 
                <PageEducators /> 
              </Route>
              <Route path="/miscellanea" > 
                <PageMiscellanea /> 
              </Route>
            </Switch>


          </div>          
        </section>
        
        <RFooter/>
      </div>
    </BrowserRouter>
  );
};

export default App;
