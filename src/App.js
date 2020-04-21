import React from 'react';
import './App.css';
import Home from './home'
import About from './aboutMe'
import Contact from './contact'

function App() {
  return (
    <div className="App">
     <Home className='home'/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
