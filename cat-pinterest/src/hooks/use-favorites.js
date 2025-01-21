import { useState, useEffect, useCallback } from "react";

const REACT_APP_STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(REACT_APP_STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing favorites:", error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(REACT_APP_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const newFavorites = [...prev];
      if (newFavorites.includes(id)) {
        return newFavorites.filter((favoriteId) => favoriteId !== id);
      } else {
        return [...newFavorites, id];
      }
    });
  }, []);

  const isFavorite = useCallback(
    (id) => {
      return favorites.includes(id);
    },
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
}
