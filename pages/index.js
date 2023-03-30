import axios from "axios";

import Link from "next/link";

import styles from "@/styles/Home.module.css";

import { motion } from "framer-motion";

import { IndexHead } from "@/components/index/indexHead";
import { IndexWelcome } from "@/components/index/indexWelcome";


function Home(props) {
  const latestPost = props.latestPost;
  const featuredProject = props.featuredProject;
  const list = {visible: { opacity: 1, y:0, transition: { when: "beforeChildren", staggerChildren: 0.05 }},
  hidden: { opacity: 0, y:50, transition: { when: "afterChildren" } 
  }};
  const item = {visible: { opacity: 1, y:0},
  hidden: { opacity: 0, y:50 },
  transition:{ duration: 0.05 }};
  
  return (
    <>
      <IndexHead />
      <IndexWelcome />
      <div className={styles.outerContainer}>
        <div className={styles.latestBlog}>
          <h2>Latest Blog Post</h2>
          <ul className={styles.list}>
            <motion.li whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                       whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}
                       variants={item}
                       key={latestPost.id} 
                       className={styles.item}>
              <Link className={styles.link} href={latestPost.attributes.slug}>
                <h3 className={styles.postTitle}>{latestPost.attributes.Title}</h3>
                <p className={styles.subtitle}>{latestPost.attributes.Subtitle}</p>
              </Link>
            </motion.li>
          </ul>
        </div>
        <div className={styles.featuredProject}>
          <h2>Featured Project</h2>
          <ul className={styles.list}>
            <motion.li whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                       whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}
                       variants={item}
                       key={featuredProject.id} 
                       className={styles.item}>
              <Link className={styles.link} href="/portfoliogame">
                <h3 className={styles.postTitle}>{featuredProject.Title}</h3>
                <p className={styles.subtitle}>{featuredProject.Subtitle}</p>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // fetch all blog posts
    const postResult = await axios.get("https://strapi-portfolio.herokuapp.com/api/blogs");
    const projectResult = await axios.get("https://strapi-portfolio.herokuapp.com/api/projects");
    const data = postResult.data;
    

    // sort posts by date in descending order
    const sortedPosts = data.data.sort(
      (a, b) =>
        new Date(b.attributes.Date).getTime() -
        new Date(a.attributes.Date).getTime()
    );

    // get the most recent post and featured project
    const latestPost = sortedPosts[0];
    const featuredProject = projectResult.data.data[1].attributes;
    console.log(featuredProject);

    return {
      props: {
        latestPost,
        featuredProject
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Home;

