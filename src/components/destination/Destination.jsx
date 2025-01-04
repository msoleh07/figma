import React from "react";
import "./Destination.css";
import choose_your_img from "../../imgs/Choose your.png";
import { detinationInfo } from "../../static/destinationInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Destination() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="destination_page">
      <div id="container" className="destination_page_container">
        <motion.img
          src={choose_your_img}
          alt="Choose Your Destination"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Destination
        </motion.h1>

        <div className="destination_page_img_container" ref={ref}>
          {detinationInfo?.map((item, index) => (
            <motion.div
              key={item.id}
              className={`destination_card destination_card_${item.id} item_${item.id}`}
              style={{
                backgroundImage: `url(${item.imgBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.img
                src={item.imgTx}
                alt="Destination text"
                className={`destination_text destination_text_${item.id}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.3 }}
              />
              <motion.button
                className="destination_button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.btnTx}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="destination_page_btn"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          View more
        </motion.button>
      </div>
    </div>
  );
}

export default Destination;
