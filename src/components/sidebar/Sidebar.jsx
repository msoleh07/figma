import React from "react";
import "./Sidebar.css";
import { MdClose } from "react-icons/md";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router";

function Sidebar({ setSidebarClick }) {
  const closeSidebar = () => {
    setSidebarClick(false);
  };

  return (
    <div className="sidebar_page">
      <div id="container">
        <div className="sidebar_container">
          <div className="sidebar">
            <img src={Logo} alt="Sidebar logo" />

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
          <button onClick={closeSidebar}>
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
