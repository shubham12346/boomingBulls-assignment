import React from "react";

const SubHeader = ({
  bText = "",
  titleStart = "",
  higlishtText = "",
  titleEnd = "",
  subTitle = "",
}) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <p className="p-1 px-2 border-[1px] rounded-full border-[rgba(255,255,255,0.25)] font-[600] text-[14px]  mb-4 bg-gradient-to-r from-purple-200 to-purple-300 text-transparent bg-clip-text inline-block">
        {bText}
      </p>
      <p className="text-5xl">
        {titleStart}{" "}
        <span className="text-[rgb(163,92,162)]">{higlishtText} </span>
        {titleEnd}
      </p>

      <p className="flex text-[rgba(255,255,255,0.75)] mt-2">{subTitle}</p>
    </div>
  );
};

export default SubHeader;
