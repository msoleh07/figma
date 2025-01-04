import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import forest from "../../imgs/forest.jpg";
import footer_title_img from "../../imgs/footer_title_img.png";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <motion.div
      className="footer"
      id="footer-section"
      ref={footerRef}
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
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src={footer_title_img} alt="" />
            <span className="footer_dsc">
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
            animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
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
