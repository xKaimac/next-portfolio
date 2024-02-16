import { Container, List, Item, Posts, PostTitle, Subtitle, Dates } from "@/styles/blogPosts.styled";
import { CustomHead }from "@/components/pages/head";
import { Title } from "@/components/pages/title";
import axios from "axios";
import React from 'react';

const head = "//Blog Posts";
const title = "//Dev Blog"

const BlogPosts = ({ posts }) => {

  const list = {
    visible: { 
      opacity: 1, 
      y:0, 
      transition: { staggerChildren: .1 }
    },
    hidden: { 
      opacity: 0, 
      y:50 
    }
  };
  const item = {
    visible: { 
      opacity: 1, 
      y:0 
    },
    hidden: { 
      opacity: 0, 
      y:50 
    },
    transition:{ duration: 0.05 }
  }

  return (
    <React.Fragment> 
      <CustomHead text={head}/>
      <Title text={title}/>
      <Container initial="hidden"
                animate="visible" 
                variants={list} >
        <List alignItems={"center"}>
          {posts.map((post) => {
            const postDate = new Date(post.attributes.Date).toLocaleDateString();
            return (
              <Item whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                    whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}    
                    variants={item}
                    key={post.id}
                    maxWidth="25%">
                <Posts href={post.attributes.slug}
                       justifyContent="center"
                       height="20rem">
                    <div>
                      <PostTitle marginBottom="0">{post.attributes.Title}</PostTitle>
                      <Subtitle>{post.attributes.Subtitle}</Subtitle>
                      <Dates>{postDate}</Dates>
                    </div>
                </Posts>
              </Item>
            );
          })}
        </List>
      </Container>
    </React.Fragment>
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
