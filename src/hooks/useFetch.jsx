import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const modelsFetch = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData)
    };
    modelsFetch();
  }, []);

  return { data };
};

export default useFetch;
