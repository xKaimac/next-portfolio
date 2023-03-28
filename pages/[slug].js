import axios from "axios";
import ReactMarkdown from "react-markdown";
import Head from 'next/head';

import styles from "@/styles/slug.module.css";


export default function Post({ post }) {
  const postDate = new Date(post.attributes.Date).toLocaleDateString();
  return (
    <>
    <Head>
      <title>| {post.attributes.Title}</title>
    </Head>
    <main className={styles.container}>
      <article className={styles.article}>
        <h1 className={styles.title}>{post.attributes.Title}</h1>
        <p className={styles.subtitle}>{post.attributes.Subtitle}</p>
        <p className={styles.date}>{postDate}</p>
        <ReactMarkdown className={styles.body}>{post.attributes.Body}</ReactMarkdown>
      </article>
    </main>
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
