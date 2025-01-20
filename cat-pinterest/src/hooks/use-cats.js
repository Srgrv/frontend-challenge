import { useState, useCallback, useEffect } from "react";

const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = process.env.REACT_APP_API_KEY;

export function useCats() {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    });

    const requestOptions = {
      method: "GET",
      headers,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${API_URL}?limit=10`, requestOptions);
      const newCats = await response.json();
      setCats((prevCats) => [...prevCats, ...newCats]);
    } catch (error) {
      console.log("Ошибка загрузки котят:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  return { cats, loadMore, isLoading };
}
