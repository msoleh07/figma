import React from "react";
import "./Activity.css";
import travel_img from "../../imgs/travel_text.png";
import { activityInfo } from "../../static/activityInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Activity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="activity_page">
      <div id="container" className="activity_container" ref={ref}>
        <motion.img
          src={travel_img}
          alt="travel img text"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Activity
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

        <div className="activity_card_container">
          {activityInfo?.map((item, index) => (
            <motion.div
              key={index}
              className={`activity_card activity_card_${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="activity_card_img">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <b>{item.title}</b>
              <span>{item.disc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
