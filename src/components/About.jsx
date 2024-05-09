import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionnWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
    return (
       <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
       </Tilt>
    )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                Introduction
            </p>
            <h2 className={styles.sectionHeadText}>
                Overview.
            </h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
           As a seasoned software developer with a deep expertise in JavaScript and TypeScript, I specialize in leveraging cutting-edge frameworks such as React.js, Node.js, and Three.js to deliver innovative solutions. My dedication to continuous learning and staying at the forefront of technology ensures that I provide you with the most advanced and efficient solutions tailored to your needs. With a proven track record in rapid learning, collaborative problem-solving, and being a team player, I excel in developing scalable, user-friendly software that not only meets but exceeds expectations. My mission is to transform your ideas into impactful, real-world products that address and solve complex challenges. Let's embark on this journey together to bring your vision to life!
        </motion.p>
        <motion.div>
            <a download="" href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-9f8a9.appspot.com/o/Patrick-Portfolio.pdf?alt=media&token=7212f652-b715-419e-acaf-50c48aeb6def" class="button button--flex" target='_blank'>
                Download CV <span class="material-symbols-outlined">download</span>
            </a>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
  )
}

export default SectionnWrapper(About, "about")
