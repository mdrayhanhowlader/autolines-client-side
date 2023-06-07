import React from "react";
import Advertised from "./Advertised";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import useTitle from "./../../hooks/useTitle";
import Exclusive from "./Exclusive";
import BannerSlider from "./BannerSlider";
import NewBanner from "./NewBanner";
import MobileApp from "./MobileApp/MobileApp";
import TopRated from "./TopRated/TopRated";
import Comfort from "./Comfort/Comfort";
import Safety from "./Safety/Safety";
import RentCar from "./RentCar/RentCar";
import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";
import PremiumCarsRental from "./PremiumCarsRental/PremiumCarsRental";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      {/* <Banner></Banner> */}
      {/* <BannerSlider></BannerSlider> */}
      <NewBanner />
      {/* <Advertised></Advertised> */}
      <Categories></Categories>
      <MobileApp />
      {/* <Exclusive></Exclusive> */}
      <TopRated />
      <Comfort />
      <Safety />
      <RentCar />
      <MeetOurTeam />
      <PremiumCarsRental />
    </div>
  );
};

export default Home;
