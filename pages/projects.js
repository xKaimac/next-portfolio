import axios from "axios";

import Link from "next/link";

import { ProjectsHead } from "@/components/projects/projectsHead";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "@/styles/projects.module.css";

const Projects = ({ projects }) => {
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
  hidden: { opacity: 0, y:50 }};
  return (
    <> 
      <ProjectsHead />
      <AnimatePresence>
      {isVisible > 0 ? (
        <motion.div initial="hidden"
                    animate="visible"
                    exit = "leave"
                    transition={{duration: 0.1}}
                    variants={page}>
        <h1 className={styles.title}>My Projects</h1>
        <motion.div className={styles.container}>
          <motion.ul initial="hidden"
                     animate="visible" 
                     variants={list} 
                     className={styles.list}>
            {projects.data.map((project) => (
              <motion.li whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                         whileHover={{scale: [null, 1.025, 1.025]}}
                         transition={{ duration: 0.1 }}
                         variants={item} 
                         key={project.id} 
                         className={styles.item}>
                <Link className= {styles.link} href={project.attributes.link}>
                    <div className={styles.postText}>
                      <h2 className={styles.postTitle}>{project.attributes.Title}</h2>
                      <p className={styles.subtitle}>{project.attributes.Subtitle}</p>
                      <p className={styles.body}>{project.attributes.Body}</p>
                    </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        </motion.div>
      ) : null}
      </AnimatePresence>
    </>
  );
};

export async function getStaticProps() {
  try {
    const result = await axios.get("https://strapi-portfolio.herokuapp.com/api/projects");
    const data = result.data;
    console.log(data);
    return {
      props: {
        projects: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Projects;