import axios from "axios";

import Link from "next/link";

import { motion } from "framer-motion";

import { BlogPostsHead } from "@/components/blogPosts/blogPostsHead";

import styles from "@/styles/blogPosts.module.css";

const BlogPosts = ({ posts }) => {
  const list = {visible: { opacity: 1, y:0, transition: { when: "beforeChildren", staggerChildren: 0.2 }},
  hidden: { opacity: 0, y:50, transition: { when: "afterChildren" } 
  }};
  const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:100}};
  const item = {visible: { opacity: 1, y:0},
  hidden: { opacity: 0, y:50 }};
  return (
    <>
    <BlogPostsHead />
    <motion.h1 initial="hidden"
               animate="visible"
               variants={page}
               className={styles.title}>{"//Dev Blog"}</motion.h1>
    <motion.div 
                className={styles.container}>
      <motion.ol initial="hidden"
                 animate="visible" 
                 variants={list} 
                 className={styles.list}>
        {posts.map((post) => {
          const postDate = new Date(post.attributes.Date).toLocaleDateString();
          return (
            <motion.li whileTap={{scale: [null, 1, 1.1]}}
                       whileHover={{scale: [null, 1.3, 1.2]}}
                       transition={{ duration: 0.2 }}
                       variants={item}
                       key={post.id} 
                       className={styles.item}>
              <Link className={styles.link} href={post.attributes.slug}>
                  <div className={styles.postText}>
                    <h2 className={styles.postTitle}>{post.attributes.Title}</h2>
                    <p className={styles.subtitle}>{post.attributes.Subtitle}</p>
                    <p className={styles.date}>{postDate}</p>
                  </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ol>
    </motion.div>
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
