// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'



const App = () => {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* Other content */}
    </div>
  );
}

export default App;
