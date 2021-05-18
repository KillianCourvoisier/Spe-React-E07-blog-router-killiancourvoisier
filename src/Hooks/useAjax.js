import axios from 'axios';
import { useState, useEffect } from 'react';

export default (url) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios({
      method: 'get',
      url,
    })
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [results, loading];
};
