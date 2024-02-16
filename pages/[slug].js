import { Dates, Subtitle } from "@/styles/slug.styled";
import { ArticleTemplate } from "@/components/pages/articleTemplate";
import { CustomHead } from "@/components/pages/head";
import { Title } from "@/components/pages/title";
import { Body } from "@/styles/globals.styled";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/animations/layout";
import axios from "axios";

const Post = ({ post }) => {
  const postDate = new Date(post.attributes.Date).toLocaleDateString();

  return (
    <Layout>
    <CustomHead text={"//"+post.attributes.Title}/>
      <ArticleTemplate>
          <Title text={post.attributes.Title}/>
          <Subtitle>{post.attributes.Subtitle}</Subtitle>
          <Dates>{postDate}</Dates>
          <Body>
            <ReactMarkdown>
              {post.attributes.Body}
            </ReactMarkdown>
          </Body>
      </ArticleTemplate>
    </Layout>
  );
}

export async function getStaticPaths() {
  const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/blogs');
  const posts = result.data.data;
  const paths = posts.map((post) => ({
    params: { slug: post.attributes.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/blogs');
  const posts = result.data.data; 
  const post = posts.find((p) => p.attributes.slug === slug);

  return {
    props: { post }
  };
}

export default Post;