import axios from "axios";

import { CustomHead } from "@/components/pages/head";
import { IndexWelcome } from "@/components/index/indexWelcome";
import { Links, OuterContainer } from "@/styles/globals.styled.jsx";
import Layout from "@/components/animations/layout";
import { LatestBlog, IndexList, IndexItem, Subtitle, IndexH2, IndexPostTitle } from "@/styles/index.styled.jsx";

function Home(props) {
  const latestPost = props.latestPost;
  const featuredProject = props.featuredProject;
  const item = {visible: { opacity: 1, y:0},
  hidden: { opacity: 0, y:50 },
  transition:{ duration: 0.05 }};
  const list = {visible: { opacity: 1, y:0, transition: { when: "beforeChildren", staggerChildren: 0.05 }},
  hidden: { opacity: 0, y:50, transition: { when: "afterChildren" } 
  }};
  return (
    <Layout>
      <CustomHead text="//Home" meta={{ property:"og:image", content:"https://res.cloudinary.com/dhfmjugt0/image/upload/v1680130330/Screenshot_from_2023_03_30_09_21_52_0de5e91286.png?updated_at=2023-03-29T22:52:11.653Z"}} />
        <IndexWelcome />
          <OuterContainer>
            <LatestBlog>
              <IndexH2>Latest Blog Post</IndexH2>
              <IndexList>
                <IndexItem whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                      whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}
                      variants={item}
                      key={latestPost.id}>
                  <Links href={latestPost.attributes.slug}>
                    <IndexPostTitle>{latestPost.attributes.Title}</IndexPostTitle>
                    <Subtitle>{latestPost.attributes.Subtitle}</Subtitle>
                  </Links>
                </IndexItem>
              </IndexList>
            </LatestBlog>
            <LatestBlog>
              <IndexH2>Featured Project</IndexH2>
              <IndexList>
                <IndexItem whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
                      whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}
                      variants={item}
                      key={featuredProject.id} >
                  <Links href="/portfoliogame">
                    <IndexPostTitle>{featuredProject.Title}</IndexPostTitle>
                    <Subtitle>{featuredProject.Subtitle}</Subtitle>
                  </Links>
                </IndexItem>
              </IndexList>
            </LatestBlog>
          </OuterContainer>
      </Layout>
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

