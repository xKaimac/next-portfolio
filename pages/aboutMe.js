import axios from "axios";

import Link from 'next/link';

import { AboutMeHead } from "@/components/aboutMe/aboutMeHead";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import style from '@/styles/aboutMe.module.css'

const AboutMe = ({aboutMes}) => {
    return (
        <>
            <AboutMeHead />
            <div className={style.container}>
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
            </div>
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


