//react
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import RHeader from './components/header/header';
import RFooter from './components/footer/footer';
//pages
import PageIndex from './views/index';
import PageSubjects from './views/subjects';
import PageAbout from './views/about';
import PageNews from './views/news';
import PageEducators from './views/educators';
import PageEducatorsInner from './views/educators-inner';
import PageSubjectsInner from './views/subjects-inner';
import PageMiscellanea from './views/miscellanea';
import PageNewsInner from './views/news-inner'
//css
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
            <Route exact path="/educators" > 
              <PageEducators /> 
            </Route>
            <Route path="/miscellanea">
              <PageMiscellanea/>
            </Route>

            <Route path="/educators-inner/:educatorId" component={PageEducatorsInner}/>
            <Route path="/subjects-inner/:subjectId" component={PageSubjectsInner}/>
            <Route path="/news-inner/:newsId" component={PageNewsInner}/>
          </Switch>   
        </section>
        
        <RFooter/>
      </div>
    </BrowserRouter>
  );
};

export default App;
