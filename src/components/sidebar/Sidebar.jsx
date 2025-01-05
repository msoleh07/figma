import React from "react";
import "./Sidebar.css";
import { MdClose } from "react-icons/md";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Sidebar({ setSidebarClick }) {
  const closeSidebar = () => {
    setSidebarClick(false);
  };

  return (
    <motion.div
      className="sidebar_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        id="container"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 70, damping: 15 }}
      >
        <div className="sidebar_container">
          <div className="sidebar">
            <motion.img
              src={Logo}
              alt="Sidebar logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            <ul className="sidebar_links">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Destinations</Link>
              </li>
              <li>
                <Link to={"/"}>Tours</Link>
              </li>
              <li>
                <Link to={"/"}>Shop</Link>
              </li>
              <li>
                <Link to={"/"}>Blogs</Link>
              </li>

              <div className="login_link_div">
                <li>
                  <Link to={"/"}>Sign in</Link>
                </li>
                <li>
                  <Link to={"/"}>SignUp</Link>
                </li>
              </div>
            </ul>
          </div>
          <motion.button
            onClick={closeSidebar}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdClose />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
