import React from 'react';
import logo from './logo.svg';
import cinquePic from './cinque-terre.jpg';
import provencePic from './provence.jpg';
import './App.css';

import Travel from "./Travel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> This is my first react website. </h3>
      </header>
      <Travel
        photo = {cinquePic}
        destination = "Cinque Terre"
        country = "Italy"
        distance ="1918 km from Bucharest"
      />  
      <Travel
        photo = {provencePic}
        destination = "Provence"
        country = "France"
        distance ="2198 km from Bucharest"
      />  
    </div>
    
  );
}

export default App;
