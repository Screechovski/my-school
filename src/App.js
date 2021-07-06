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
import PageReview from './views/review'
//css
import  './App.sass';

const App = ({
               navLinks,
               news,
               sidebarNews,
               reviews,
               subjectsElements,
               educatorsElements,
               getPost,
               currentReviewUserName,
               currentReviewUserTitle,
               currentReviewUserMessage,
               getEducator,
               getSubject,
               dispatch,
               getEducatorsBySubjectId
}) => {
  return (
    <BrowserRouter>
      <div className="page">
        <RHeader navLinks={navLinks}/>

        <section className="page__body page-body page-body--width-sidebar">
          <Switch>
            <Route exact path="/" >  
              <PageIndex /> 
            </Route>
            <Route path="/about" > 
              <PageAbout sidebarNews={sidebarNews} />
            </Route>
            <Route path="/news" >  
              <PageNews news={news} /> 
            </Route>
            <Route path="/subjects" >  
              <PageSubjects sidebarNews={sidebarNews} subjectsElements={subjectsElements} /> 
            </Route>
            <Route path="/educators" > 
              <PageEducators sidebarNews={sidebarNews} educatorsElements={educatorsElements} /> 
            </Route>
            <Route path="/miscellanea">
              <PageMiscellanea sidebarNews={sidebarNews} />
            </Route>
            <Route path="/review">
              <PageReview
                sidebarNews={sidebarNews}
                reviews={reviews}
                userName={currentReviewUserName}
                title={currentReviewUserTitle}
                message={currentReviewUserMessage}
                dispatch={dispatch}
              />
                
            </Route>

            <Route path="/educators-inner/:educatorId" render={({match})=>
              {
                const educator = getEducator(Number(match.params.educatorId));
                const coursesTaught = educator.coursesTaught.map(getSubject);
                return <PageEducatorsInner 
                  sidebarNews={sidebarNews} 
                  educator={educator} 
                  coursesTaught={coursesTaught}
                />
              }
            }/>

            <Route path="/subjects-inner/:subjectId" render={({match})=>
              {                
                const {title, id} = getSubject(Number(match.params.subjectId));
                const educators = getEducatorsBySubjectId(id);
                
                return <PageSubjectsInner 
                  educators={educators} 
                  title={title} 
                  subjects={subjectsElements} 
                  subjectId={match.params.subjectId} 
                  sidebarNews={sidebarNews} 
                />
              }
            }/>
            <Route path="/news-inner/:newsId" render={({match})=>
              {
                const {mainImgUrl, title, date, body} = getPost(Number(match.params.newsId));

                return <PageNewsInner 
                  sidebarNews={sidebarNews}
                  mainImgUrl={mainImgUrl}
                  title={title}
                  date={date}
                  body={body}
                />
              }
            }/>
          </Switch>   
        </section>
        
        <RFooter/>
      </div>
    </BrowserRouter>
  );
};

export default App;
