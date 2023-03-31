import axios from "axios";
import Link from 'next/link';

import { AboutMeHead } from "@/components/aboutMe/aboutMeHead";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import style from '@/styles/aboutMe.module.css'

const AboutMe = ({aboutMes}) => {
    const router = useRouter();
    const [isVisible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleRouteChange = (url, { shallow }) => {
        setVisible(false);
      }
      router.events.on('routeChangeStart', handleRouteChange);
      return () => {
        router.events.off('routeChangeStart', handleRouteChange)
      }
    })

    const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:100}, leave: { opacity: 0, y:-50, transition:{duration:0.1}}};
    return (
        <>
            <AboutMeHead />
            <AnimatePresence>
                {isVisible ? (
                    <motion.div initial="hidden"
                                animate="visible"
                                exit="leave"
                                variants={page}>
                    <h1 className={style.title}>About Me</h1>
                        <motion.div className={style.container}
                                    initial="hidden"
                                    animate="visible"
                                    
                                    transition={{delay:.3,duration: 0.1}}
                                    variants={page}>
                            <article className={style.article}>
                                  {aboutMes.data.map((aboutMe) => (
                                    <div key={aboutMe.id}>
                                        <ReactMarkdown className={style.body}>{aboutMe.attributes.Description}</ReactMarkdown>
                                        <br/>
                                        <p className={style.linkText}>
                                            <Link href="/contactDetails" className={style.link}>
                                                If you would like to contact me, please click here.
                                            </Link>
                                        </p>
                                    </div>
                                  ))}
                            </article>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
      )
};

export async function getStaticProps() {
    try {
        const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/about-mes');
        const data = result.data;
        return {
            props: {
                aboutMes: data
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default AboutMe;


