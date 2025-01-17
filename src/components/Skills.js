import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) =>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
      cursor-pointer  absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' 
      whileHover={{scale: 1.05}}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y, transition: {duration: 1.5}}}
      viewport={{once: true}}>
        {name}
      </motion.div>
  )
}
const Skills = () => {
  return (
  <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightLg md:dark:bg-circularDarkLg sm:bg-circularLightLg sm:dark:bg-circularDarkLg '>

      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
      cursor-pointer  dark:bg-light dark:text-dark lg;p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale: 1.05}}>
        Web
      </motion.div>
      <Skill name="CSS" x="-20vw" y="2vw" />
      <Skill name="Html" x="-8vw" y="-10vw" />
      <Skill name="JavaScript" x="-20vw" y="-6vw" />
      <Skill name="ReactJs" x="-9vw" y="10vw" />
      <Skill name="NextJs" x="-20vw" y="-15vw" />
      <Skill name="Bootstrap" x="15vw" y="-8vw" />
      <Skill name="Bootstrap" x="15vw" y="-8vw" />
      <Skill name="TailwindCss" x="20vw" y="1vw" />
      <Skill name="Networking" x="32vw" y="-5vw" />
      <Skill name="Cybersecurity" x="0vw" y="-20vw" />
      <Skill name="Python" x="-22vw" y="18vw" />
      <Skill name="Penteration testing" x="10vw" y="18vw" />
      <Skill name="Soc Analsyt" x="-30vw" y="4vw" />
      <Skill name="Web App secruity" x="15vw" y="10vw" />
      <Skill name="SEIM/GRC" x="20vw" y="-18vw" />
    </div>

  </>
  
  )
}

export default Skills