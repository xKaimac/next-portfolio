import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import styles from "@/styles/blogPosts.module.css";

const BlogPosts = ({ posts }) => {
  return (
    <>
    <Head>
      <title>| Blog Posts</title>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Blog Posts</h1>
      <ol className={styles.list}>
        {posts.map((post) => {
          const postDate = new Date(post.attributes.Date).toLocaleDateString();
          return (
            <li key={post.id} className={styles.item}>
              <Link className={styles.link} href={post.attributes.slug}>
                <div className={styles.postContent}>
                  <div className={styles.postText}>
                    <h2 className={styles.postTitle}>{post.attributes.Title}</h2>
                    <p className={styles.subtitle}>{post.attributes.Subtitle}</p>
                    <p className={styles.date}>{postDate}</p>
                  </div>
                  {/* <img className={styles.postImage} src={'https://strapi-portfolio.herokuapp.com' + post.attributes.preview.data[0].attributes.url}/> */}
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const result = await axios.get("https://strapi-portfolio.herokuapp.com/api/blogs", {params:{ populate: "*"}});
    const data = result.data;

    // sort posts by date in descending order
    const sortedPosts = data.data.sort(
      (a, b) =>
        new Date(b.attributes.Date).getTime() -
        new Date(a.attributes.Date).getTime()
    );

    return {
      props: {
        posts: sortedPosts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default BlogPosts;
