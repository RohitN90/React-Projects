/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(urlPath) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // https://catfact.ninja/fact

  const reFetch = () => {
    setLoading(true);
    axios
      .get(urlPath)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const responce = await axios.get(urlPath);
        console.log(responce.data);
        setData(responce.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [urlPath]);

  return { data, loading, error, reFetch };
}

export default useFetch;
