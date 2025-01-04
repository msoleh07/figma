import React from "react";
import "./Popular.css";
import popular_text from "../../imgs/popular_text.png";
import { popularInfo } from "../../static/popularInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Popular = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="popular_page">
      <div id="container" className="popular_container" ref={ref}>
        <motion.img
          src={popular_text}
          alt="popular img text"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Tour packages
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </motion.span>

        <div className="popular_card_container">
          {popularInfo?.map((item, inx) => (
            <motion.div
              key={inx}
              className="popular_card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: inx * 0.2 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
