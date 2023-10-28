// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css'



const App = () => {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      {/* Other content */}
    </div>
  );
}

export default App;
