import React from "react";
import HomeHeader from "../../HomeHeader/HomeHeader";
import Main from "../../Main/Main";
import Ratings from "../../Ratings/Ratings";
import Offer from "../../Offers/Offer";
import PopularProduct from "../../PopularProducts/PopularProduct";

function Home() {
  return (
    <div className="w-full App">
      <div className="container mx-auto">
        <HomeHeader />
        <Main />
        <Ratings />
        <Offer />
        <PopularProduct />
      </div>
    </div>
  );
}

export default Home;
