import React, { useState } from "react";

//icons
import { Heart } from "lucide-react";

const CatsCard = ({ cat, isFavorite, toggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Внешний слой для увеличения и тени */}
      <div
        className={`absolute inset-0 transition-transform duration-300 ${
          isHovered
            ? "scale-[112%] shadow-[0px_6px_5px_0px_rgba(0,0,0,0.24),0px_9px_18px_0px_rgba(0,0,0,0.18)]"
            : "scale-100 shadow-none"
        }`}
      ></div>

      {/* Фиксированный внутренний контейнер */}
      <div className="relative z-10 bg-white shadow-md overflow-hidden aspect-square">
        <img
          src={cat.url || "/placeholder.svg"}
          alt="Cat"
          className="w-full h-full object-cover"
        />
        {/* Кнопка */}
        <button
          className={`absolute bottom-2 right-2 p-2 rounded-full transition-colors ${
            !(isHovered || isFavorite) ? "invisible" : ""
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={toggleFavorite}
          onMouseEnter={() => setIsHeartHovered(true)}
          onMouseLeave={() => setIsHeartHovered(false)}
        >
          <Heart
            className={`w-6 h-6 ${
              isFavorite
                ? "fill-[#F24E1E] stroke-[#F24E1E]" // Если котик в избранном, закрашиваем иконку
                : isHovered && !isHeartHovered // Если наведен на картинку, но не на heart, то иконка без заливки
                ? "fill-none stroke-[#F24E1E]"
                : isHeartHovered // Если наведено на heart, то залить
                ? "fill-[#F24E1E] stroke-[#F24E1E]"
                : "fill-none stroke-[#F24E1E]" // По умолчанию, иконка без заливки
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CatsCard;
