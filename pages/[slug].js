import axios from "axios";

import ReactMarkdown from "react-markdown";

import Head from 'next/head';

import styled from 'styled-components';
import styles from '@/styles/slug.module.css';

import Layout from "@/components/animations/layout";

const Container = styled.div`
width: 50vw;
margin: 0 auto;
justify-content: center;
padding-bottom: 2rem;
padding-top: 2rem;

@media screen and (max-width: 810px) {
    width: 85vw;
    padding-bottom: 2rem;
}
`

const Article = styled.article`
display: block;
background-color: #ffffff;
border: 2px solid #ddd;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
text-decoration: none;
border-radius: 1rem;
justify-content: center;
padding:1rem;

@media screen and (max-width: 1280px) {
      flex-basis: calc(50% - 1rem);
      padding-bottom: 1rem;
      padding-top: 0;
      max-width: 85vw;
}
`

const Title = styled.h1`
font-size: 2rem;
font-weight: bold;
color: #333;
padding-left: 2rem;
padding-right: 2rem;

@media screen and (max-width: 768px) {
font-size: 1.5rem;
padding-left: 1rem;
padding-right: 1rem;
}
`

const Subtitle = styled.p`
padding-left: 2rem;
padding-right: 2rem;

@media screen and (max-width: 768px) {
padding-left: 1rem;
padding-right: 1rem;
}
`

const Dates = styled.p`
padding-left: 2rem;
padding-right: 2rem;

@media screen and (max-width: 768px) {
padding-left: 1rem;
padding-right: 1rem;
}
`

const Post = ({ post }) => {
  const postDate = new Date(post.attributes.Date).toLocaleDateString();

  return (
    <Layout>
    <Head>
      <title>{"//"}{post.attributes.Title}</title>
    </Head>
      <Container>
        <Article>
          <Title>{post.attributes.Title}</Title>
          <Subtitle>{post.attributes.Subtitle}</Subtitle>
          <Dates>{postDate}</Dates>
          <ReactMarkdown className={styles.body}>{post.attributes.Body}</ReactMarkdown>
        </Article>
      </Container>
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