import useFetch from "./useFetch";

const Custom = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [data] = useFetch(url);
    
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };
  export default Custom ;


  /*
  import React from 'react';
import useFetch from './useFetch'; // Adjust the import path as needed

const YourComponent = () => {
  const url = 'https://api.example.com/data';
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data && data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default YourComponent;
 */