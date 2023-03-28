import axios from "axios";
import Link from 'next/link';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from 'next/head';

import style from '@/styles/aboutMe.module.css'

const AboutMe = ({aboutMes}) => {
    return (
        <>
        <Head>
            <title>| About Me</title>
        </Head>
            <main className={style.container}>
                <article className={style.article}>
                    <h1 className={style.aboutMeTitle}>About Me</h1>

                      {aboutMes.data.map((aboutMe) => (
                        <div key={aboutMe.id}>
                            <ReactMarkdown className={style.aboutMeBody}>{aboutMe.attributes.Description}</ReactMarkdown>
                            <br/>
                            <Link href="/contactDetails" className={style.contactLink}>If you would like to contact me, please click here.</Link>
                        </div>
                      ))}

                </article>
            </main>
        </>
      )
};

export async function getStaticProps() {
    try {
        const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/about-mes');
        const data = result.data;
        console.log(data);
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


