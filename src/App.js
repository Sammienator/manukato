// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import './App.css'



const App = () => {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>

      {/* Other content */}
    </div>
  );
}

export default App;
