import axios from "axios";

import { CustomHead } from "@/components/pages/head";
import { Title } from "@/components/pages/title";
import { Container, List, Item, Posts, PostTitle, Subtitle, Body } from "@/styles/blogPosts.styled";
import React from 'react'

const Projects = ({ projects }) => {
  const list = {
    visible: {
      opacity: 1, y: 0,
      transition: { staggerChildren: 0.1 }
    },
    hidden: { opacity: 0, y: 50 }
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };
  const reverseProjects = projects.data.slice().reverse();
  return (
    <React.Fragment>
      <CustomHead text="//Projects" />
      <Title text="My Projects" />
      <Container>
        <List initial="hidden"
          animate="visible"
          variants={list}
          paddingBottom="1rem"
        >
          {reverseProjects.map((project) => (
            <Item whileTap={
              {
                scale: [null, 1.02, 1.02],
                transition: { duration: 0.1 }
              }
            }
              whileHover={{ scale: [null, 1.025, 1.025] }}
              transition={{ duration: 0.1 }}
              variants={item}
              key={project.id} 
            >
              <Posts href={project.attributes.link}
                     height="25rem"
                     width="50rem">
                <div>
                  <PostTitle marginBottom="5px">{project.attributes.Title}</PostTitle>
                  <Subtitle>{project.attributes.Subtitle}</Subtitle>
                  <Body>{project.attributes.Body}</Body>
                </div>
              </Posts>
            </Item>
          ))}
        </List>
      </Container>
    </React.Fragment>
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