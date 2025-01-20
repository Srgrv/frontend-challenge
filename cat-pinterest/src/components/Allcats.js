import React, { useCallback } from "react";
import { useRef, useEffect } from "react";

//hooks
import { useCats } from "../hooks/use-cats";

const AllCats = () => {
  const { cats, loadMore, isLoading } = useCats();

  const observer = useRef(null);

  const lastCatElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.1 }
      );

      if (node) observer.current.observe(node);
    },
    [isLoading, loadMore]
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-[48px] mt-[48px]">
      {cats.map((cat, index) => {
        const isLastItem = index === cats.length - 1;
        return (
          <div
            key={`{${cat.id}_${index}}`}
            ref={isLastItem ? lastCatElementRef : null}
            className="relative bg-white rounded-lg shadow-md overflow-hidden group "
          >
            <img
              src={cat.url || "/placeholder.svg"}
              alt="Cat"
              className="w-full aspect-square object-cover"
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

export default AllCats;
