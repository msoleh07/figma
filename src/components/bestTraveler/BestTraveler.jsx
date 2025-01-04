import React from "react";
import "./BestTraveler.css";
import BestTravelerImg from "../../imgs/Best Traveler’s.png";
import { bestInfo } from "../../static/bestInfo";

function BestTraveler() {
  return (
    <div className="best_traveler_page">
      <div id="container" className="best_traveler_container">
        <img src={BestTravelerImg} alt="best traveler img text" />
        <h1>Shared photos</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </span>

        <div className="best_traveler_card_container">
          {bestInfo?.map((item, inx) => (
            <div key={inx} className="best_traveler_card">
              <img src={item?.img} alt="best traveler" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestTraveler;
