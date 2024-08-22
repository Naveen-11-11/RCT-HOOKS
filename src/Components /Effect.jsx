import React, { useEffect, useState } from 'react';
import '../App';

const Effect = () => {

  const [count, setCount] = useState(0);

  // infinte times run , runs on every render no dependency :
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count);
    }, 1000);
  });
  return (
    <div className='App'>

      <h1>useEffect</h1>

      <h1>I have rendered {count} times!</h1>

    </div>
  )
}

export default Effect;


/* runs on first render :

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here
  
  return <h1>I've rendered {count} times!</h1>;
}
*/





/* Runs depend on the dependency :

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

*/