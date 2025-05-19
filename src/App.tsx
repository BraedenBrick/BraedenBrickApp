import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Education from './Education';
import Hobbies from './Hobbies';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>My Portfolio</h1>
      </header>
      <main>
        <AboutMe />
        <Education />
        <Hobbies />
        <Projects />
      </main>
    </div>
  );
}

export default App;
