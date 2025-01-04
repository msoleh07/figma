import React from "react";
import "./BestTraveler.css";
import BestTravelerImg from "../../imgs/Best Traveler’s.png";
import { bestInfo } from "../../static/bestInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function BestTraveler() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="best_traveler_page">
      <div id="container" className="best_traveler_container" ref={ref}>
        <motion.img
          src={BestTravelerImg}
          alt="best traveler img text"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Shared photos
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

        <div className="best_traveler_card_container">
          {bestInfo?.map((item, inx) => (
            <motion.div
              key={inx}
              className="best_traveler_card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: inx * 0.2 }}
            >
              <img src={item?.img} alt="best traveler" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestTraveler;
