import { TitleContainer } from '@/components/titleContainer';
import axios from "axios";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Head from 'next/head';

function Home(props) {
  const latestPost = props.latestPost;
  return (
    <>
    <Head>
      <title>| Home</title>
    </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Welcome to My Portfolio.</h1>
        </div>
        <div className={styles.right}>
          <img src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1679973639/Emoticon_Smile_Face_78f3e97e36.png?updated_at=2023-03-28T03:20:40.998Z" alt="Image could not be loaded" />
        </div>
      </div>
      <div className={styles.latestBlog}>
        <h2>Latest Blog Post</h2>
        <ul className={styles.list}>
          <li key={latestPost.id} className={styles.item}>
            <Link className={styles.link} href={latestPost.attributes.slug}>
              <h3 className={styles.postTitle}>{latestPost.attributes.Title}</h3>
              <p className={styles.subtitle}>{latestPost.attributes.Subtitle}</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // fetch all blog posts
    const result = await axios.get("https://strapi-portfolio.herokuapp.com/api/blogs");
    const data = result.data;

    // sort posts by date in descending order
    const sortedPosts = data.data.sort(
      (a, b) =>
        new Date(b.attributes.date).getTime() -
        new Date(a.attributes.date).getTime()
    );

    // get the most recent post
    const latestPost = sortedPosts[0];

    return {
      props: {
        latestPost,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Home;

