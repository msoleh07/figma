import React from "react";
import "./HeroSection.css";
import Rectangle from "../../imgs/Rectangle.png";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";

function HeroSection() {
  return (
    <div className="hero_section">
      <div
        id="container"
        style={{
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
        className="hero_section_container"
      >
        <header>
          <Link to={"/"}>
            <img className="logo_img" src={Logo} alt="Logo img" />
          </Link>

          <div className="header_links">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About Us</Link>
            <Link style={{ color: "#0000006d" }} to={"/"}>
              Destinations
            </Link>
            <Link style={{ color: "#0000006d" }} to={"/"}>
              Tours
            </Link>
            <Link style={{ color: "#0000006d" }} to={"/"}>
              Shop
            </Link>
            <Link style={{ color: "#0000006d" }} to={"/"}>
              Blogs
            </Link>
          </div>
          <div className="header_button">
            <Link to={"/"}>
              <b>Sign in</b>
            </Link>
            <button>SignUp</button>
          </div>
        </header>

        <div className="hero_section_about">
          <span class="heading">Explorer and Travel</span>
          <h1>Let’s Go Now</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </span>

          <div className="hero_section_about_location">
            <div className="location">
              <CiLocationOn />
              <div className="location_text">
                <span>Location</span>
                <b>Thailand</b>
              </div>
            </div>

            <div className="date">
              <MdOutlineDateRange />
              <div className="date_text">
                <span>Date</span>
                <b>13 May, 2023</b>
              </div>
            </div>

            <button>
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
