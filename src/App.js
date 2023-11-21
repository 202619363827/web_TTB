import React from 'react';
import Header from './component/Header';
// import main from './component/NewPage';
import NewPage from './component/NewPage';
import ResumeProcess from './component/ResumeProcess';
import  SuccessStories from './component/SuccessStories';
import MeetOurTeam from './component/MeetOurTeam';
// import Footer from './component/Footer';

import Footer from './component/footer';
import AtsOptimize from './component/AtsOptimize';
// import './component/NewPage.css';
 

const App = () => {
  return (
    <div>
      <Header />
      <NewPage/>
      <AtsOptimize/>
      <ResumeProcess />
      <SuccessStories/>
      <MeetOurTeam />
      <Footer/>

      
      
    </div>
  );
};

export default App;
