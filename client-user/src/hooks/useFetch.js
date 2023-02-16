import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false))
  }, [])

  return [data, isLoading]
}