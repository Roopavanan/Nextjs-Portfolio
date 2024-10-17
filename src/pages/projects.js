import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/Phishing.png";
import project2 from "../../public/images/projects/Picture1.png";
import project3 from "../../public/images/projects/dr.png";
import project4 from "../../public/images/projects/trav2.png";
import project5 from "../../public/images/projects/me.png";
import project6 from "../../public/images/projects/hash.png";
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

        // FeaturedProjects components

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

    
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
      
        <FramerImage src={img} alt={title} className="w-full h-full object-cover"
        WhileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="{max-width: 768px} 100vw,
        {max-width: 1200px} 50vw, 50vw" />

      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="my-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          dark:bg-light dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

        // Project components

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 
    relative dark:bg-dark dark:border-light xs:p-4">

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      rounded-br-3xl md;-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-full object-cover"
        WhileHover={{scale:1.05}}
        transition={{duration:0.2}}/>
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">

          <Link href={link} target="_blank" className=" text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
          
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Rooban | Projects</title>
        <meta name="Discover Rooban's portfolio of web development and cybersecurity projects, showcasing expertise in full-stack development, IoT, Blockchain, and responsive, SEO-friendly websites." content="Showcasing my projects in Web and cybersecurity." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

        {/* Project-1 */}

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Securing The Digital Realm: Leveraging Transfer Learning In AI-Driven Threat Detection For Enhanced Cybersecurity"
                img={project1}
                summary="Developed an AI-driven threat detection system using transfer learning techniques to enhance cybersecurity. The project utilized deep learning models such as LSTM and BIGRU for effective anomaly detection in network traffic. Published the research findings in a Scopus-indexed journal, showcasing innovative use of AI in cybersecurity."
                link="https://kuey.net/index.php/kuey/article/view/3465"
                github="https://github.com/Roopavanan/Phishing-Malicious-Link-Detection.git"
                type="Main Project"
              />
            </div>
 {/* Project-2 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
              title="Personal Branding Site for Dr. Agila Asokan (Pediatrician)"
              img={project3}
              link = "https://dragilaasokan.com/"
              github="/"
              type = "Project" 
              />
            </div>
{/* Project-3 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
              title="Trav2Inde - Travel Booking Site"
              img={project4}
              link = "https://trav2inde.com/"
              github="/"
              type = "Project"
              />
            </div>
 {/* Project-4 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Health Monitoring Kit (IoT-based Health Monitoring System)"
                img={project2}
                summary="Developed an IoT-based health monitoring system aimed at elderly patients to prevent unforeseen heart-related deaths. The system uses temperature and heartbeat sensors (MAX30102) connected to an ESP8266, displaying real-time health data on an LCD screen and sending updates to a web server."
                link = "/"
                github="/"
                type = "Mini Project"   
              />
            </div>
{/* Project-5 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="My Perosnal Website"
                img={project5}
                link = "/"
                github="/"
                type = "Project" 
              />
            </div>
 {/* Project-6 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                 title="Hashtag Hive - Resort & Rooms"
                img={project6}
                link = "/"
                github="/"
                type = "Project"  
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;



// const FeaturedProject =  ({type, title, summary, img, link, github}) => {

//   return(
//     <article className='w-full flex flex-col md:flex-row items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
//   
//   <Link href={link} target="_blank" className='w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg rounded-br-3xl lg:w-full'>
//     <FramerImage src={img} alt={title} className="w-full h-full"
//     whileHover = {{scale:1.05}}
//     transition={{duration:0.2}}
//     priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//      />
//   </Link>

//   <div className='w-full md:w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
//     <span className='text-primary font-medium text-xl dark:text-primaryDark xs:test-base'>{type}</span>
//     <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
//       <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
//     </Link>
//     <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
//     <div className='mt-2 flex items-center'>
//       <Link href={github} target="_blank" className='w-10'>
//         <GithubIcon />
//       </Link>
//       <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark *:sm:px-4 sm:text-base'>
//         Visit Project
//       </Link>
//     </div>
//   </div>
// </article>

//   )
// }

// const Project = ({title, type, img, link, github  }) => {
//   return(
//     <article className='w-full flex flex-col items-center justify-between h-full min-h-[500px] rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative'>
//   <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

//   <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg dark:bg-light'>
//     <Image src={img} alt={title} className="w-full h-full object-cover" />
//   </Link>

//   <div className='w-full flex flex-col items-start justify-between mt-4'>
//     <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
//     <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
//       <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
//     </Link>

//     <div className='w-full mt-2 flex items-center justify-between'>
//       <Link href={link} target="_blank" className='text-lg font-semibold underline'>
//         Visit Project
//       </Link>
//       <Link href={github} target="_blank" className='w-8'>
//         <GithubIcon />
//       </Link>
//     </div>
//   </div>
// </article>

//   )
// }

// const projects = () => {
//   return (
//           <>
//           <Head>
//             <title>RooBan | Project Page</title>
//             <meta name='description' content='any description for about page'/>
//        </Head>  

//        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
//         <Layout className='pt-15'>
//           <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:b=mb:!text-6xl xs:!text-4xl' />

//           <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
//             <div className='col-span-12'>
//               <FeaturedProject
              
//     />


//             </div>
//            
//             <div className='col-span-6'>
// <Project
              
//               title="Trav2Inde - Travel Booking Site"
// img={project4}
// summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
// It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
// local currency."
// link = "https://trav2inde.com/"
// github="/"
// type = "Featured Projects"    />            </div>
//              <div className='col-span-12'>
//               <FeaturedProject
              
// title="Health Monitoring Kit (IoT-based Health Monitoring System)"
// img={project2}
// summary="Developed an IoT-based health monitoring system aimed at elderly patients to prevent unforeseen heart-related deaths. The system uses temperature and heartbeat sensors (MAX30102) connected to an ESP8266, displaying real-time health data on an LCD screen and sending updates to a web server."
// link = "/"
// github="/"
// type = "Featured Projects"    />


//             </div>
//             <div className='col-span-6'>
//               <Project
              
//               title="Perosnal Website for Rooban (Web Developer)"
// img={project5}
// summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
// It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
// local currency."
// link = "/"
// github="/"
// type = "Featured Projects"    />
//             </div>
//             <div className='col-span-6'>
//               <Project
              
//               title="Hashtag Hive - Resort & Rooms"
// img={project6}
// summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
// It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
// local currency."
// link = "/"
// github="/"
// type = "Featured Projects"    />
//             </div>

//           </div>
//         </Layout>
//        </main>
//       </>
//   )
// }
