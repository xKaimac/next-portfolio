import axios from "axios";

import { IndexHead } from "@/components/index/indexHead";
import { IndexWelcome } from "@/components/index/indexWelcome";
import Layout from "@/components/animations/layout";
import { Links } from "@/components/index/indexLinks.styled"
import { OuterContainer } from "@/components/index/outerContainer.styled"
import { LatestBlog } from "@/components/index/latestBlog.styled"
import { IndexH2 } from "@/components/index/indexH2.styled"
import { IndexList } from "@/components/index/indexList.styled";
import { IndexItem } from "@/components/index/indexItem.styled";
import { IndexSubtitle } from "@/components/index/indexSubtitle.styled";
import { IndexPostTitle } from "@/components/index/indexPostTitle.styled";


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
      <IndexHead />
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
                    <IndexSubtitle>{latestPost.attributes.Subtitle}</IndexSubtitle>
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
                    <IndexSubtitle>{featuredProject.Subtitle}</IndexSubtitle>
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

