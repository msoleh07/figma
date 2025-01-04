import React from "react";
import "./Destination.css";
import choose_your_img from "../../imgs/Choose your.png";
import { detinationInfo } from "../../static/destinationInfo";

function Destination() {
  return (
    <div className="destination_page">
      <div id="container" className="destination_page_container">
        <img src={choose_your_img} alt="Choose Your Destination" />
        <h1>Destination</h1>

        <div className="destination_page_img_container">
          {detinationInfo?.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.imgBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
              className={`destination_card destination_card_${item.id} item_${item.id}`}
            >
              <img
                src={item.imgTx}
                alt="Destination text"
                className={`destination_text destination_text_${item.id}`}
              />
              <button className="destination_button">{item.btnTx}</button>
            </div>
          ))}
        </div>

        <button className="destination_page_btn">View more</button>
      </div>
    </div>
  );
}

export default Destination;
