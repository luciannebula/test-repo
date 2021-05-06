import React from 'react';
import './App.css';
import IntroPage from './Intro-Page/Intro-page';
import SkillsContainer from './Skills-Container/Skills';

function App() {
  return (
    <div className="main-container">
      <IntroPage/>
      <SkillsContainer/>
    </div>
  );
}

export default App;
