// context
import { useCatsContext } from "../contexts/CatsContext";

// components
import CatsGrid from "./CatsGrid";

export default function FavoritesCats() {
  const { cats, toggleFavorite, isFavorite } = useCatsContext();
  const favoriteCats = cats.filter((cat) => isFavorite(cat.id));

  return (
    <div>
      <CatsGrid
        cats={favoriteCats}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        isLoading={false}
        loadMore={null}
      />
    </div>
  );
}
