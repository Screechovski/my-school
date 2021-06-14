import React from 'react';
import RHeader from './components/header/header';
import RFooter from './components/footer/footer';
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
        </section>
        
        <RFooter/>
      </div>
    </BrowserRouter>
  );
};

export default App;
