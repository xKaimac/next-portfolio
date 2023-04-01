import axios from "axios";

import Link from "next/link";

import { ProjectsHead } from "@/components/projects/projectsHead";

import { motion } from "framer-motion";
 import Layout from "@/components/animations/layout";

import styled from "styled-components";

const Title = styled.h1`
padding-top: 2rem;
text-align: center;
font-size: 5rem;
padding-bottom: 1rem;

@media screen and (max-width: 1280px) {
    font-size: 3rem;
`

const Container = styled(motion.div)`
display: flex;
max-width: 100vw;
padding-left: 5rem;
padding-right: 5rem;
padding-bottom: 2rem;
justify-content: center;
`

const List = styled(motion.ol)`
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-wrap: wrap;
text-align: center;
padding-bottom: 1rem;
justify-content: center;
`
const Item = styled(motion.li)`
flex-basis: calc(33.33% - 20px);
padding-left: .5rem;
padding-right: .5rem;
padding-bottom: 1rem;

@media screen and (max-width: 1280px) {

  .item {
    flex-basis: calc(50% - 1rem);
    padding-bottom: 1rem;
    padding-top: 0;
    max-width: 85vw;
  }

  @media screen and (max-width: 810px) {

    .item {
      flex-basis: calc(50% - 1rem);
      padding-bottom: 1rem;
      padding-top: 0;
    }
    
`

const Posts = styled.a`
display: flex;
background-color: #ffffff;
border: 2px solid #ddd;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
transition: ease-in-out 0.1s;
text-decoration: none;
border-radius: 1rem;
height: 25rem;
width: 50rem;
align-items: center;
&:hover{
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid #5CB0FF;
}

@media screen and (max-width: 810px) {

  .link {
    width: 85vw;
    height: auto;
  }
`
const PostTitle = styled.h2`
margin-top: 0;
font-size: 2rem;
font-weight: bold;
color: #333333;
margin-bottom: 5px;

@media screen and (max-width: 1280px) {
    font-size: 1.5rem;
    padding-top: 1rem;
}
`

const Subtitle = styled.p`
font-size: 1rem;
color: #666666;
margin-bottom: 0;
`

const Body = styled.p`
font-size: 1.25rem;
padding-left: 5rem;
padding-right: 5rem;
color: #292929;

@media screen and (max-width: 810px) {
  font-size: 1.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
`


const Projects = ({ projects }) => {
  const list = {visible: { opacity: 1, y:0, 
                transition: { staggerChildren: 0.1 }},
                hidden: { opacity: 0, y:50}};
  const item = {visible: { opacity: 1, y:0},
                hidden: { opacity: 0, y:50 }};
  return (
    <Layout> 
      <ProjectsHead />
        <Title>My Projects</Title>
        <Container>
          <List initial="hidden"
                animate="visible" 
                variants={list} >
            {projects.data.map((project) => (
              <Item whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                    whileHover={{scale: [null, 1.025, 1.025]}}
                    transition={{ duration: 0.1 }}
                    variants={item} 
                    key={project.id} >
                <Posts href={project.attributes.link}>
                    <div>
                      <PostTitle>{project.attributes.Title}</PostTitle>
                      <Subtitle>{project.attributes.Subtitle}</Subtitle>
                      <Body>{project.attributes.Body}</Body>
                    </div>
                </Posts>
              </Item>
            ))}
          </List>
        </Container>
    </Layout>
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