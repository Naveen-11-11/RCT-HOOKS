import React, { useEffect, useRef, useState } from 'react'


// rendering elements by typing application renders 
const Ref = () => {
    const [inputValue, setInputValue] = useState("");

    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });

    const changing = ( e ) => {
        setInputValue(e.target.value); 
    }
  

  return (
    <div className='App'>

        <h1> useRef </h1>

        <input
        type="text"
        value={inputValue}
        onChange={ changing }
      />
      <h1>Render Count: {count.current}</h1>

    </div>
  )
}

export default Ref;


/*
auto focus for HTML
accessing DOM elements 

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


*/





/*Track Previous State

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}



*/