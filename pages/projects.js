import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import styles from "@/styles/projects.module.css";

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title >AM || Projects</title>
      </Head>    
      <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <ul className={styles.list}>
        {projects.data.map((project) => (
          <li key={project.id} className={styles.item}>
            <Link className= {styles.link} href={project.attributes.link}>
              <p>{project.attributes.Title}</p>
            </Link>
            <p className={styles.subtitle}>Article: {project.attributes.Subtitle}</p>
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