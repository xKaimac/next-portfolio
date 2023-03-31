import axios from "axios";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { BlogPostsHead } from "@/components/blogPosts/blogPostsHead";

import styles from "@/styles/blogPosts.module.css";

const BlogPosts = ({ posts }) => {
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
  
  const list = {visible: { opacity: 1, y:0, transition: { when: "beforeChildren", staggerChildren: 0.05 }},
  hidden: { opacity: 0, y:50, transition: { when: "afterChildren" } 
  }};
  const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:50}, leave: { opacity: 0, y:-50, transition:{duration:0.1}}};
  const item = {visible: { opacity: 1, y:0},
    hidden: { opacity: 0, y:50 },
    transition:{ duration: 0.05 }

  }
  return (
    <>
    <BlogPostsHead />
    <AnimatePresence>
      {isVisible ? (
        <motion.div initial="hidden"
                    animate="visible"
                    exit = "leave"
                    transition={{duration: 0.1}}
                    variants={page}>
          <h1 className={styles.title}>{"//Dev Blog"}</h1>

          <motion.div className={styles.container}>
            <motion.ol initial="hidden"
                       animate="visible" 
                       variants={list} 
                       className={styles.list}>
              {posts.map((post) => {
                const postDate = new Date(post.attributes.Date).toLocaleDateString();
                return (
                  <motion.li whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                             whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}
                     
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
        </motion.div>
      ) : null}
    </AnimatePresence>
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
