import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonLoading = () => {
  const isDark = localStorage.getItem("darkMode");
  const baseColor = isDark ? "#00000080" : undefined;
  const highlightColor = isDark ? "#333333" : undefined;
  return (
    <div className="grid pt-[92px] grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
      {Array.from({ length: 20 }, (item, i) => (
        <div key={i} className="w-80 ">
          <Skeleton
            highlightColor={highlightColor}
            baseColor={baseColor}
            height={160}
            width={320}
          />
          <h3 className="text-lg py-2 font-semibold dark:text-gray-300">
            <Skeleton
              highlightColor={highlightColor}
              baseColor={baseColor}
              width={220}
            />
          </h3>

          <div className="flex items-center underline underline-offset-2 dark:text-gray-300 text-gray-700 ">
            <div className="flex  w-full items-center justify-between ">
              <Skeleton
                highlightColor={highlightColor}
                baseColor={baseColor}
                width={200}
              />
              <Skeleton
                highlightColor={highlightColor}
                baseColor={baseColor}
                height={48}
                width={48}
                circle
              />
            </div>
          </div>
          <p className="  w-fit   rounded-full">
            <Skeleton
              highlightColor={highlightColor}
              baseColor={baseColor}
              width={120}
            />
          </p>
          <div className=" ">
            <Skeleton highlightColor={highlightColor} baseColor={baseColor} />
          </div>
          <Skeleton
            highlightColor={highlightColor}
            baseColor={baseColor}
            height={30}
          />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
