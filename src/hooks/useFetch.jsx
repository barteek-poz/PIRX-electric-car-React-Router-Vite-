import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    };
    dataFetch();
  }, []);

  return { data };
};

export default useFetch;
