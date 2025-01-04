import React from "react";
import "./Footer.css";
import forest from "../../imgs/forest.jpg";

const Footer = () => {
  return (
    <Footer>
      <div
        style={{
          backgroundImage: `url(${forest})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
        id="container"
      >
        Footer
      </div>
    </Footer>
  );
};

export default Footer;
