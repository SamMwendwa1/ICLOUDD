import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import {styles} from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies Used</p>
        <h2 className={styles.sectionHeadText}>Technologies: </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        At I-CLOUD, we have leveraged an array of modern technologies to design a robust and highly efficient cloud infrastructure. 
        The front-end of their system is built using HTML5 and CSS3 for structuring and styling, while incorporating JavaScript, TypeScript, ReactJS, and Redux 
        for creating dynamic and interactive user interfaces. Tailwind CSS is utilized to streamline the design process and ensure consistent, responsive designs. 
        The back-end is powered by Node.js, which facilitates efficient server-side scripting, and MongoDB, a flexible NoSQL database, to store and manage data. 
        Three.js is integrated into the platform to enable advanced 3D graphics rendering, enhancing user experience and interaction. 
        Nginx serves as a high-performance web server and reverse proxy, optimizing load balancing and ensuring seamless communication between clients and the server. 
        To store and manage critical data, ICLOUD employs TrueNAS, an open-source storage solution known for its reliability and scalability. 
        Docker containerization technology is utilized throughout the system to create lightweight, portable, and easily deployable environments, 
        significantly improving development, testing, and deployment workflows. 
      </motion.p>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");