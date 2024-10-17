import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilepic from '../../public/images/profile/r4.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills';
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref, {once:true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
},[isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
}
    })
}, [springValue, value])
return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>RooBan | About Page</title>
            <meta name='"Rooban is a web developer and cybersecurity enthusiast from Pondicherry, with expertise in full-stack development, IoT, and blockchain. Learn more about his journey in technology, projects, and goals."'
            content='Rooban is a web developer and cybersecurity enthusiast from Pondicherry, specializing in full-stack development, IoT, and Blockchain, with a passion for creating secure and innovative digital solutions.'/>
       </Head>

       <TransitionEffect />

       <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col items-start justify-start xL:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography
                </h2>
                <p className='font-medium'>
                   Hi, I’m Roopavanan from Pondicherry! I’m a web developer and cybersecurity enthusiast with a strong background in creating innovative and secure digital solutions. I hold a B.Tech in Computer Science Engineering from Manakula Vinayagar Institute of Technology, specializing in IoT, Cybersecurity, and Blockchain. My experience includes developing responsive and SEO-friendly websites as a Web Developer at Digi Pondy, and I’m expanding my expertise in full-stack development. I aspire to become a Cybersecurity Analyst to ensure safer online environments.
                    Outside of tech, I enjoy playing badminton and traveling.
                </p>

               
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                <Image src={profilepic} alt='RooBan' className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
                        <AnimatedNumbers value={5} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                        satisfied Clients
                    </h2>
                </div>

                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
                        <AnimatedNumbers value={10} />+
                    </span >
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> 
                        Projects completed
                    </h2>
                </div>

                <div className='flex flex-col items-end justify-center xl:items-center'>
                    {/* <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={1} />+
                    </span> */}
                    {/* <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                        year of Experience
                    </h2> */}
                </div>


            </div>

        </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
       </main>
    
    </>
  )
}

export default about

 
