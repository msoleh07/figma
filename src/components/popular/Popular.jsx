import React from "react";
import "./Popular.css";
import popular_text from "../../imgs/popular_text.png";
import { popularInfo } from "../../static/popularInfo";

const Popular = () => {
  return (
    <div className="popular_page">
      <div id="container" className="popular_container">
        <img src={popular_text} alt="popular img text" />
        <h1>Tour packages</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </span>

        <div className="popular_card_container">
          {popularInfo?.map((item, inx) => (
            <div key={inx} className="popular_card">
              <div className="card_img">
                <img src={item?.img} alt={item?.title} />
              </div>
              <div className="card_text">
                <div className="text_container">
                  <p>{item?.title}</p>
                  <span>{item?.disc}</span>
                </div>
                <b>${item?.price}K</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
