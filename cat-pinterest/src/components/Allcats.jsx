//components
import CatsGrid from "./CatsGrid";

// context
import { useCatsContext } from "../contexts/CatsContext";

export default function AllCats() {
  const { cats, toggleFavorite, isFavorite, loadMore, isLoading } =
    useCatsContext();

  return (
    <div>
      <CatsGrid
        cats={cats}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        loadMore={loadMore}
        isLoading={isLoading}
      />
    </div>
  );
}
