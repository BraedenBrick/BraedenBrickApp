import React from 'react';
import './App.css';
import { useAppSelector } from './hooks';
import ThemeToggle from './ThemeToggle';
import AboutMe from './AboutMe';
import Education from './Education';
import Hobbies from './Hobbies';
import Projects from './Projects';

function App() {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <div className="header-bar">
        <h1>My Portfolio</h1>
        <ThemeToggle />
        </div>
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
