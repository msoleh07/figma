import React, { useState } from "react";
import "./HeroSection.css";
import Rectangle from "../../imgs/Rectangle.png";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import Sidebar from "../sidebar/Sidebar";
import { MdClose } from "react-icons/md";

function HeroSection() {
  const [sidebarClick, setSidebarClick] = useState(false);

  const clickBtn = () => {
    setSidebarClick((prevState) => !prevState);
  };

  sidebarClick
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <motion.div
      className="hero_section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
            <Link to={"/"} className="signInLink">
              <b>Sign in</b>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="signUpBtn"
            >
              SignUp
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bars"
              onClick={clickBtn}
            >
              {sidebarClick ? <MdClose /> : <HiBars3 />}
            </motion.button>
          </div>
        </motion.header>
        {sidebarClick && <Sidebar setSidebarClick={setSidebarClick} />}

        <motion.div
          className="hero_section_about"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.span
            className="heading"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explorer and Travel
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Let’s Go Now
          </motion.h1>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hero_dsc"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </motion.span>

          <motion.div
            className="hero_section_about_location"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.div
              className="location"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CiLocationOn />
              <div className="location_text">
                <span>Location</span>
                <b>Thailand</b>
              </div>
            </motion.div>

            <motion.div
              className="date"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdOutlineDateRange />
              <div className="date_text">
                <span>Date</span>
                <b>13 May, 2023</b>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CiSearch />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
