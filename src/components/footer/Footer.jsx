// import React from "react";
// import "./Footer.css";
// import forest from "../../imgs/forest.jpg";
// import footer_title_img from "../../imgs/footer_title_img.png";
// import { FaFacebookF, FaYoutube } from "react-icons/fa6";
// import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div
//         style={{
//           backgroundImage: `url(${forest})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           width: "100%",
//           height: "100%",
//         }}
//         id="container"
//       >
//         <div className="footer_container">
//           <div className="footer_dsc">
//             <img src={footer_title_img} alt="" />
//             <span>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </span>
//             <div className="footer_icons">
//               <span>
//                 <FaFacebookF />
//               </span>
//               <span>
//                 <IoLogoInstagram />
//               </span>
//               <span>
//                 <FaYoutube />
//               </span>
//               <span>
//                 <IoLogoTwitter />
//               </span>
//             </div>
//           </div>
//           <div className="footer_about">
//             <div className="footer_about_container">
//               <h1>About</h1>
//               <ul>
//                 <li>Menu</li>
//                 <li>Features</li>
//                 <li>News & Blogs</li>
//                 <li>Help & Supports</li>
//               </ul>
//             </div>
//             <div className="footer_about_container">
//               <h1>Company</h1>
//               <ul>
//                 <li>How we work</li>
//                 <li>Terms of service</li>
//                 <li>Pricing</li>
//                 <li>FAQ</li>
//               </ul>
//             </div>
//             <div className="footer_about_container">
//               <h1>Contact Us</h1>
//               <ul>
//                 <li>Akshya Nagar 1st Block 1st Cross</li>
//                 <li>+1 202-918-2132</li>
//                 <li>listeetravel@mail.com</li>
//                 <li>www.listeetravel.com</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import "./Footer.css";
// import forest from "../../imgs/forest.jpg";
// import footer_title_img from "../../imgs/footer_title_img.png";
// import { FaFacebookF, FaYoutube } from "react-icons/fa6";
// import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <motion.div
//       className="footer"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div
//         style={{
//           backgroundImage: `url(${forest})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           width: "100%",
//           height: "100%",
//         }}
//         id="container"
//       >
//         <div className="footer_container">
//           {/* Description Section */}
//           <motion.div
//             className="footer_dsc"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <img src={footer_title_img} alt="" />
//             <span>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </span>
//             <div className="footer_icons">
//               <motion.span
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <FaFacebookF />
//               </motion.span>
//               <motion.span
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <IoLogoInstagram />
//               </motion.span>
//               <motion.span
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <FaYoutube />
//               </motion.span>
//               <motion.span
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <IoLogoTwitter />
//               </motion.span>
//             </div>
//           </motion.div>

//           {/* About Section */}
//           <motion.div
//             className="footer_about"
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             <div className="footer_about_container">
//               <h1>About</h1>
//               <ul>
//                 <li>Menu</li>
//                 <li>Features</li>
//                 <li>News & Blogs</li>
//                 <li>Help & Supports</li>
//               </ul>
//             </div>
//             <div className="footer_about_container">
//               <h1>Company</h1>
//               <ul>
//                 <li>How we work</li>
//                 <li>Terms of service</li>
//                 <li>Pricing</li>
//                 <li>FAQ</li>
//               </ul>
//             </div>
//             <div className="footer_about_container">
//               <h1>Contact Us</h1>
//               <ul>
//                 <li>Akshya Nagar 1st</li>
//                 <li>+1 202-918-2132</li>
//                 <li>listeetravel@mail.com</li>
//                 <li>www.listeetravel.com</li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import "./Footer.css";
import forest from "../../imgs/forest.jpg";
import footer_title_img from "../../imgs/footer_title_img.png";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const footerElement = document.getElementById("footer-section");
    const rect = footerElement.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <motion.div
      className="footer"
      id="footer-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
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
        <div className="footer_container">
          <motion.div
            className="footer_dsc"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src={footer_title_img} alt="" />
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
            <div className="footer_icons">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFacebookF />
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoLogoInstagram />
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaYoutube />
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoLogoTwitter />
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            className="footer_about"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="footer_about_container">
              <h1>About</h1>
              <ul>
                <li>Menu</li>
                <li>Features</li>
                <li>News & Blogs</li>
                <li>Help & Supports</li>
              </ul>
            </div>
            <div className="footer_about_container">
              <h1>Company</h1>
              <ul>
                <li>How we work</li>
                <li>Terms of service</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer_about_container">
              <h1>Contact Us</h1>
              <ul>
                <li>Akshya Nagar 1st</li>
                <li>+1 202-918-2132</li>
                <li>listeetravel@mail.com</li>
                <li>www.listeetravel.com</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
