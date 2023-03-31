import axios from "axios";

import ReactMarkdown from "react-markdown";

import Head from 'next/head';

import styles from "@/styles/slug.module.css";

import { AnimatePresence, motion} from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";




export default function Post({ post }) {
  const postDate = new Date(post.attributes.Date).toLocaleDateString();
  const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:50, transition:{duration:0.5}}, leave: { opacity: 0, y:-50, transition:{duration:0.1}}};
  const [isVisible, setVisible] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setVisible(false);
    }
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  })
  return (
    <>
    <Head>
      <title>{"//"}{post.attributes.Title}</title>
    </Head>
    <AnimatePresence >
      {isVisible ? (
      <motion.main initial="hidden"
                   animate="visible"
                   exit= "leave"
                   transision={{duration: 0.1}}
                   variants={page}
                   className={styles.container}>
        
          <article className={styles.article}>
            <h1 className={styles.title}>{post.attributes.Title}</h1>
            <p className={styles.subtitle}>{post.attributes.Subtitle}</p>
            <p className={styles.date}>{postDate}</p>
            <ReactMarkdown className={styles.body}>{post.attributes.Body}</ReactMarkdown>
          </article>
      </motion.main>
): null}
    </AnimatePresence>
    </>
  );
}

export async function getStaticPaths() {
  const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/blogs');
  const posts = result.data.data;
  const paths = posts.map((post) => ({
    params: { slug: post.attributes.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/blogs');
  const posts = result.data.data; 
  const post = posts.find((p) => p.attributes.slug === slug);

  return {
    props: { post }
  };
}
