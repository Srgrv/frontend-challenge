import React, { useState } from "react";

//icons
import { Heart } from "lucide-react";

const CatsCard = ({ cat, isFavorite, toggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      //   ref={isLastItem ? lastCatElementRef : null}
      className="relative bg-white  shadow-md overflow-hidden group aspect-square"
    >
      <img
        src={cat.url || "/placeholder.svg"}
        alt="Cat"
        className="w-full h-full max-w-[225px] min-w-full min-h-full object-cover"
      />
      <button
        className={`absolute bottom-2 right-2 p-2 rounded-full transition-colors `}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        onClick={toggleFavorite}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Heart
          className={`w-6 h-6 ${
            isFavorite
              ? "fill-[#F24E1E] stroke-[#F24E1E]"
              : isHovered
              ? "fill-[#F24E1E]  stroke-[#F24E1E]"
              : "fill-none stroke-[#F24E1E]"
          }`}
        />
      </button>
    </div>
  );
};

export default CatsCard;
