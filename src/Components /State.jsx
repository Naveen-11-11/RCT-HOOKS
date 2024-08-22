import React, { useState } from 'react'
import '../App.css';

const State = () => {
    const [color, setColor] = useState("red");

    const changeColor = () => {
        setColor(color === "red" ? "lime" : "red");
    }

    const btntext = (color === "red" ? "Change to lime" : "Change to red");


        const myStyle = {
            color : color,
            
        }   
    return (
        <div className='App'>

            <h1>useState</h1>
            <h1 style = {myStyle}>My favorite color is {color}!</h1>
            <button onClick={changeColor}>{btntext}</button>

        </div>
    )
}


export default State;

/* In Object Method

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(ps => {
      // Toggle color between "red" and "blue"
      const newColor = ps.color === "red" ? "blue" : "red";
      return { ...ps, color: newColor };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >
        Toggle Color
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
*/