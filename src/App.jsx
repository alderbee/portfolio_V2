import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="App">

      <div className="fixed top-4 right-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          {isDarkMode ? '🌙 Light Mode' : '🌞 Dark Mode'}
        </button>
      </div>

      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Home />
        <About />
        <Projects />
        <Experience />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
};

export default App;