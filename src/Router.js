import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Destination from "./components/destination/Destination";
import Activity from "./components/activity/Activity";
import Popular from "./components/popular/Popular";
import BestTraveler from "./components/bestTraveler/BestTraveler";
import Review from "./components/review/Review";

function Router() {
  return (
    <div>
      <HeroSection />
      <Destination />
      <Activity />
      <Popular />
      <BestTraveler />
      <Review />
    </div>
  );
}

export default Router;
