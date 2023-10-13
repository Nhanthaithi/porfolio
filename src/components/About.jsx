import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { profile_photo1, github, gmail } from '../assets/';

import {SectionWrapper} from '../hoc';

const ServiceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img  src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <> 
      <div className='flex flex-wrap'>
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p 
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I love solving problems and enjoy learning! Currently, I'm a intern at RikkeiSoft Danang for full-stack developer. I have expereince with HTML5, CSS3, 
            Javascript, ReactJS, NodeJS (ExpressJS and NestJS).
          </motion.p>
          
          <button
            type='submit'
            onClick={() => window.open("https://drive.google.com/file/d/1f4HpaJEYi0raVFdyBs4wyfL1n9hVHF_0/view?usp=drive_link", "_blank")}
            className="mt-4 bg-[#14102e] hover:shadow-secondary duration-300 py-3 px-8 w-fit text-white font-bold shadow-md shadow-secondary/50 rounded-xl">
            My Curriculum Vitae
          </button>

        </div>

        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("left", "spring", 0.1, 3)}
            className='w-full bg-white p-[2px] rounded-[20px] shadow-card xs:mx-16'
            >
              <div
                options={{
                  max: 45, 
                  scale: 1,
                  speed: 450
                }}
                className="relative w-full"
              >
                <img  src={profile_photo1} alt="profile_photo" className="w-full h-full object-cover rounded-2xl"/>

                {/* linkedin and github icon */}
                <div className="absolute inset-x-0 bottom-0 flex justify-evenly m-3 card-img_hover">
                  <div
                    onClick={() => window.open("https://github.com/Thaithinhan", "_blank")}
                    className="black-gradient hover:scale-125 transition-all duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                  <img 
                    src={github}
                    alt="github" 
                    className='w-2/3 h-2/3 object-contain'
                  />
                  </div>

                  <div
                    onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}
                    className="black-gradient hover:scale-125 transition-all duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                  <img 
                    src={gmail}
                    alt="gmail" 
                    className='w-2/3 h-2/3 object-contain'
                  />
                  </div>

                </div>

              </div>
          </motion.div>
        </Tilt>

      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, 'about')