import React from "react";

const StatisticsContainer = ({
  totalCount,
  title,
  iconName,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <div
      className={`${backgroundColor} border border-${borderColor} rounded-xl p-4 shadow-md h-30 min-h-full`}
    >
      <div className="grid grid-cols-2 items-center">
        <div className="mr-4">
          <img
            src={`/icons/Dashboard icons/home icons/${iconName}.svg`}
            width={70}
            height={70}
            alt={`${title} icon`}
          ></img>
        </div>
        <div>
          <h1 className={`font-bold text-xl md:text-3xl ${textColor} mb-2`}>
            {totalCount}
          </h1>
          <p
            className={`text-[#787887] font-bold text-xs md:text-sm ${textColor}`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
