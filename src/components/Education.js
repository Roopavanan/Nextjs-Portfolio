import React from 'react'
import { motion, useScroll } from 'framer-motion'
import  { useRef } from 'react';
import LiIcon from './LiIcon';


const Details = ({type, time, place, info}) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]'>
        
        <LiIcon reference= {ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl sx:text-lg'>{type}&nbsp;</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>{info}</p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )
  return (
    <div className='my-64'><h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div
    style={{scaleY: scrollYProgress}} className='absolute left-9  top-0 w-[4px] h-full bg-dark origin-top  dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
           type ="Bachelor of Technology in Computer Science & Engineering"
           time ="2020-2024"
           place ="Manakula Vinayagar Institute of Technology (MVIT)" 
           info ="Relevant courses included Internet of Things, Cybersecurity, and Blockchain Technologies."
            />
               <Details 
           type ="Higher Secondary School Certificate (HSC)"
           time ="2019-2020"
           place ="New Modern Vidhya Mandir Higher Secondary School (NMVMHS)" 
           info ="Relevant courses included French, English Biology, Chemistry, Physics, and Mathematics."
            />
             <Details 
           type ="Secondary School Leaving Certificate (SSLC)"
           time ="2017-2018"
           place ="New Modern Vidhya Mandir Higher Secondary School (NMVMHS)" 
           info ="Relevant courses included Tamil, English, Maths, Science, and Social Science."
            />
        </ul>
    </div>
    
    </div>
  )
}

export default Education