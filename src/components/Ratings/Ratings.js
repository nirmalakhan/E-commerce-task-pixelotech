import React from "react";
import Star from "../../images/star.jpg";

function Ratings() {
  return (
    <div className="flex">
      <div className="flex ml-[500px] mb-[300px]">
        <p className="w-[31px] h-[21px]">4.3</p>
        <div className="flex w-[22px] h-[22px]">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </div>
      </div>
      <div className="mt-[30px] ml-[-50px]">
        <p>(11.6k Totak Review)</p>
      </div>
    </div>
  );
}

export default Ratings;
