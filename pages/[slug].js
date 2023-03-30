import axios from "axios";

import ReactMarkdown from "react-markdown";

import Head from 'next/head';

import styles from "@/styles/slug.module.css";

import { AnimatePresence, motion, isVisible} from "framer-motion";


export default function Post({ post }) {
  const postDate = new Date(post.attributes.Date).toLocaleDateString();
  const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:100}, exit: { opacity:0, scale: [null, .1, .1], transition:{duration:0.5}}};
  return (
    <>
    <Head>
      <title>{"//"}{post.attributes.Title}</title>
    </Head>
      <motion.main initial="hidden"
                   animate="visible"
                   exit="exit"
                   variants={page}
                   className={styles.container}>
        <article className={styles.article}>
          <h1 className={styles.title}>{post.attributes.Title}</h1>
          <p className={styles.subtitle}>{post.attributes.Subtitle}</p>
          <p className={styles.date}>{postDate}</p>
          <ReactMarkdown className={styles.body}>{post.attributes.Body}</ReactMarkdown>
        </article>
      </motion.main>
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
