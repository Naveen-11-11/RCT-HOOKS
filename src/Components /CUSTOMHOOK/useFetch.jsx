import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
      
  }, [url]);

  return [data];
};

export default useFetch;

/*
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state when the URL changes
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message); // Store the error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
 */