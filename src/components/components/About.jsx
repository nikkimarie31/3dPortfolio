import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "./styles";
import { services } from "../../constants/index";
import SectionWrapper from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        I am a driven and passionate full-stack web developer who has finally decided to pursue her dreams. Although I am new to the field, I am commited to continuous learning and self-improvement to become the best developer I can be. I currently attend a top-tier development bootcamp where I am excelling in both front-end and back-end development. I have honed my skills in HTML, CSS, Javascript, Node js., React, and other relevant technologies, and I am eager to apply my knowledge to real-world projects. With several years of non-technical professional experience in other industries, I bring a unique perspective to my work that helps me see projects from both technical and end-user standpoints. I am a problem-solver at heart, and i take a collaborative and detail-oriented approach to every project I work on. whether you are looking to develop a sleek, responsive website or build a robust, scalable web application, I am up the challenge. Lets create something great together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// const About = () => {
//   return (
//     <AnimatePresence>
//       <>
//         <motion.div>
//           <p className={styles.sectionSubText}>Introduction</p>
//           <h2 className={styles.sectionHeadText}> Overview</h2>

//         </motion.div>

//         <motion.p
//           variants={fadeIn(',', 0.1, 1)}
//           className='mt-4 text-white
//         text-[17px] max-w-3xl leading-[30px]'
//         >
//           I am a driven and passionate full-stack web developer who has finally decided to pursue her dreams. Although I am new to the field, I am commited to continuous learning and self-improvement to become the best developer I can be. I currently attend a top-tier development bootcamp where I am excelling in both front-end and back-end development. I have honed my skills in HTML, CSS, Javascript, Node js., React, and other relevant technologies, and I am eager to apply my knowledge to real-world projects. With several years of non-technical professional experience in other industries, I bring a unique perspective to my work that helps me see projects from both technical and end-user standpoints. I am a problem-solver at heart, and i take a collaborative and detail-oriented approach to every project I work on. whether you are looking to develop a sleek, responsive website or build a robust, scalable web application, I am up the challenge. Lets create something great together!

//         </motion.p>
//         <div className='mt-20 flex flex-wrap gap-10'>
//           {services.map((service, index) => (
//             <ServiceCard key={service.title} index={index} {...service} />
//           ))}

//         </div>
//       </>
//     </AnimatePresence>
//   )
// }

export default SectionWrapper(About, 'about');