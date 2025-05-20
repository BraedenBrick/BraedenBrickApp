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
        <AboutMe />
        <Education />
        <Hobbies />
        <Projects />
        </header>
      <main>
      </main>
    </div>
  );
}

export default App;
