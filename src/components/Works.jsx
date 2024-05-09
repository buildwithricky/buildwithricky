import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionnWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { client } from '../cms'


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  
  const [data, setData] = useState([])
  console.log(data)
  
  useEffect(() => {
    client.fetch('*')
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='object-cover w-full h-full rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'
            >
              <img
                src={github}
                alt='source code'
                className='object-contain w-1/2 h-1/2'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                My work
            </p>
            <h2 className={styles.sectionHeadText}>
                Projects.
            </h2>
        </motion.div>

        <div className="flex w-full">
          <motion.p 
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
           Explore my portfolio to witness firsthand demonstrations of my skills and expertise through engaging real-world projects. Each project is not just a showcase but a testament to my capability in tackling challenges, navigating diverse technologies, and orchestrating projects with finesse. Dive in to discover code repositories and live demos, illuminating my journey of problem-solving and effective project management.
          </motion.p>
        </div>

        <div className="flex flex-wrap mt-20 gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
    </>
  )
}

export default SectionnWrapper(Works, "");