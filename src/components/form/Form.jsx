import React from "react";
import "./Form.css";
import city_img from "../../imgs/city_img.png";
import { FaArrowRight } from "react-icons/fa";

const Form = () => {
  return (
    <div className="form_page">
      <div
        id="container"
        className="form_page_containser
      "
      >
        <img src={city_img} alt="" />

        <div className="form_page_input_container">
          <h1>Get Our Monthly Newsletter</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </span>
          <div className="input_box">
            <input
              type="text"
              placeholder="Input your emaill address in here"
            />
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
