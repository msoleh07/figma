// import React from "react";
// import "./Review.css";
// import review_img from "../../imgs/Review & Testimonials.png";
// import massage_bg from "../../imgs/back_img_review.png";
// import massage_users from "../../imgs/review.png";
// import comma_img from "../../imgs/opostref.png";

// function Review() {
//   return (
//     <div className="review_page">
//       <div id="container" className="review_container">
//         <img src={review_img} alt="review img text" />
//         <h1>top reviews for etour</h1>
//         <span>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s,
//         </span>

//         <div className="review_info_massage_container">
//           <div
//             className="review_info_massage_text"
//             style={{
//               backgroundImage: `url(${massage_bg})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <img className="comma_img" src={comma_img} alt="comma img" />
//             <div className="title">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised in the 1960s.....
//             </div>
//           </div>
//           <div className="review_info_img">
//             <img src={massage_users} alt="top reviews for etour img" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Review;

import React from "react";
import "./Review.css";
import review_img from "../../imgs/Review & Testimonials.png";
import massage_bg from "../../imgs/back_img_review.png";
import massage_users from "../../imgs/review.png";
import comma_img from "../../imgs/opostref.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Review() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="review_page">
      <div id="container" className="review_container" ref={ref}>
        <motion.img
          src={review_img}
          alt="Review img text"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          top reviews for etour
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </motion.span>

        <div className="review_info_massage_container">
          <motion.div
            className="review_info_massage_text"
            style={{
              backgroundImage: `url(${massage_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img className="comma_img" src={comma_img} alt="comma img" />
            <div className="title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s.....
            </div>
          </motion.div>

          <motion.div
            className="review_info_img"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img src={massage_users} alt="top reviews for etour img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Review;
