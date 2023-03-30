import axios from "axios";

import Link from 'next/link';

import { AboutMeHead } from "@/components/aboutMe/aboutMeHead";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { motion } from "framer-motion";

import style from '@/styles/aboutMe.module.css'

const AboutMe = ({aboutMes}) => {
    const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:100}};
    return (
        <>
            <AboutMeHead />
            <motion.h1 className={style.title}
                initial="hidden"
                animate="visible"
                variants={page}>About Me</motion.h1>
            <motion.div className={style.container}
                        initial="hidden"
                        animate="visible"
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


