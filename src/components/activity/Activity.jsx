import React from "react";
import "./Activity.css";
import travel_img from "../../imgs/travel_text.png";
import { activityInfo } from "../../static/activityInfo";

function Activity() {
  return (
    <div className="activity_page">
      <div id="container" className="activity_container">
        <img src={travel_img} alt="travel img text" />
        <h1>Activity</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </span>

        <div className="activity_card_container">
          {activityInfo?.map((item, index) => (
            <div
              key={index}
              className={`activity_card activity_card_${item.id}`}
            >
              <div className="activity_card_img">
                <img src={item.img} alt={item.title} />
              </div>
              <b>{item.title}</b>
              <span>{item.disc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
