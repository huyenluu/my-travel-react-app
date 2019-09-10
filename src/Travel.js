import React from "react";

const Travel = ({photo, destination, country,distance}) => (
  <div className = 'container'>
    
    <img
    src= {photo}
    alt={destination}
    className = 'picture'
    />
     
    <div className = 'text-block'>
      <h2>{destination}</h2>
      <p>{country}</p>
      <p>{distance}</p> 
    </div>
  </div>
);

export default Travel;