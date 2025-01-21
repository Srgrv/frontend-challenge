import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const API_URL = "https://api.thecatapi.com/v1/images/search";

const REACT_APP_STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const CatsContext = createContext(undefined);

export function CatsProvider({ children }) {
  const [cats, setCats] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": REACT_APP_API_KEY,
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

  useEffect(() => {
    loadMore();
    const stored = localStorage.getItem(REACT_APP_STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing favorites:", error);
      }
    }
  }, [loadMore]);

  useEffect(() => {
    try {
      localStorage.setItem(REACT_APP_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  return (
    <CatsContext.Provider
      value={{
        cats,
        favorites,
        isLoading,
        loadMore,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
}

export function useCatsContext() {
  const context = useContext(CatsContext);
  if (context === undefined) {
    throw new Error("useCatsContext must be used within a CatsProvider");
  }
  return context;
}
