import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import styles from "@/styles/projects.module.css";

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title >{"//"}Projects</title>
      </Head>    
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.container}>
      <ul className={styles.list}>
        {projects.data.map((project) => (
          <li key={project.id} className={styles.item}>
          <Link className= {styles.link} href={project.attributes.link}>
            <div className={styles.postContent}>
              <div className={styles.postText}>
              <h2 className={styles.postTitle}>{project.attributes.Title}</h2>
              <p className={styles.subtitle}>{project.attributes.Subtitle}</p>
              <p className={styles.body}>{project.attributes.Body}</p>
              </div>
            </div>
          </Link>
          </li>
        ))}
      </ul>
    </div>
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