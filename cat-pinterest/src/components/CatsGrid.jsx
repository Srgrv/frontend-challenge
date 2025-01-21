import React, { useEffect, useRef } from "react";

// components
import CatsCard from "./CatsCard";

const CatsGrid = ({
  cats,
  toggleFavorite,
  isFavorite,
  loadMore,
  isLoading,
}) => {
  const lastCatRef = useRef(null);

  useEffect(() => {
    if (!loadMore || isLoading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = lastCatRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loadMore, isLoading]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[48px] lg:gap-[48px] mt-[48px] pl-[62px] pr-[62px]">
      {cats.map((cat, index) => {
        return (
          <div
            key={`${cat.id}_${index}`}
            ref={index === cats.length - 1 ? lastCatRef : null}
          >
            <CatsCard
              cat={cat}
              isFavorite={isFavorite(cat.id)}
              toggleFavorite={() => toggleFavorite(cat.id)}
            />
          </div>
        );
      })}

      {isLoading && (
        <div className="col-span-full text-center   leading-[21px] text-[14px] tracking-[0.25px] text-black font-roboto">
          {isLoading ? "... загружаем еще котиков ..." : ""}
        </div>
      )}
    </div>
  );
};

export default CatsGrid;
