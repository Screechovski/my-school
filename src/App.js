import React from 'react';
import RHeader from './components/header/header';
import RSidebar from './components/sidebar/sidebar';
import RNewsCard from './components/newsCard/newsCard';
import RFooter from './components/footer/footer';
import RMain from './components/mainContent/mainContent';
import RSubjectCard from './components/subjectCard/subjectCard';
import tmpPostData from './tmpPostData';
import tmpSubjectsData from './tmpSubjectsData';
import tmpSubjectsIconsData from './tmpSubjectIconsData.js';
import  './App.sass';

const App = () => {
  return (
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

          <RMain parentClass="page-body__content" title="Предметы" typeContent="subjects" slot={tmpSubjectsData.map((elem,index)=>{
            return <RSubjectCard
              key={index}
              title={elem.title}
              image={tmpSubjectsIconsData[index]}
            />
          })}/>
        </div>
      </section>
      
      <RFooter/>
    </div>
  );
};

export default App;
