import axios from "axios";

import { motion } from "framer-motion";
import { BlogPostsHead } from "@/components/blogPosts/blogPostsHead";
import Layout from "@/components/animations/layout";


import styled from "styled-components";

const Title = styled.h1`
padding-top: 2rem;
text-align: center;
font-size: 5rem;
padding-bottom: 1rem;

@media screen and (max-width: 1280px) {
  .title {
    font-size: 3rem;
  }
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
justify-content: center;
align-items: center;
`
const Item = styled(motion.li)`
flex-basis: calc(33.33% - 1rem);
padding-left: .5rem; 
padding-right: .5rem;
padding-bottom: 1rem;
max-width: 25%;

@media screen and (max-width: 1280px) {
    flex-basis: calc(50% - 1rem);
    padding-bottom: 1rem;
    padding-top: 0;
    max-width: 85vw;
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
height: 20rem;
align-items: center;
justify-content: center;
&:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid #5CB0FF;
}

@media screen and (max-width: 768px) {
width: 85vw;
height: 85vw;
}
`

const PostTitle = styled.h2 `
margin-top: 0;
margin-bottom: 0;
font-size: 2rem;
font-weight: bold;
color: #333;
padding: 1rem;
}

@media screen and (max-width: 1280px) {

  .postTitle {
    font-size: 1.5rem;
    padding-top: 1rem;
  }
}
`
const Subtitle = styled.p `
font-size: 1.25rem;
color: #666;
margin-bottom: 0;
`

const Dates = styled.p`
font-size: 1rem;
color: #999;
margin-top: 5px;
`

const BlogPosts = ({ posts }) => {

  const list = {visible: { opacity: 1, y:0, transition: { staggerChildren: .1 }},
  hidden: { opacity: 0, y:50,}};
  const item = {visible: { opacity: 1, y:0},
    hidden: { opacity: 0, y:50 },
    transition:{ duration: 0.05 }

  }
  return (
    <Layout> 
      <BlogPostsHead />
      <Title>{"//Dev Blog"}</Title>
      <Container initial="hidden"
                animate="visible" 
                variants={list} 
                transition={{delay:0}}>
        <List>
          {posts.map((post) => {
            const postDate = new Date(post.attributes.Date).toLocaleDateString();
            return (
              <Item whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                    whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}    
                    variants={item}
                    key={post.id}>
                <Posts href={post.attributes.slug}>
                    <div>
                      <PostTitle>{post.attributes.Title}</PostTitle>
                      <Subtitle>{post.attributes.Subtitle}</Subtitle>
                      <Dates>{postDate}</Dates>
                    </div>
                </Posts>
              </Item>
            );
          })}
        </List>
      </Container>
    </Layout>
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
