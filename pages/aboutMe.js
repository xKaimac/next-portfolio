import axios from "axios";
import Link from 'next/link';

import { Title } from "@/components/pages/title";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Layout from "@/components/animations/layout";
import { CustomHead } from "@/components/pages/head";

import styled from 'styled-components';

const Container = styled.div`
width: 50vw;
margin: 0 auto;
justify-content: center;
padding-bottom: 2rem;

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

const Links = styled.a`
text-decoration: none;
font-size: 1.25rem;
padding-left: 1rem;
padding-right: 1rem;
`

const LinkText = styled.p`
text-align: center;
`

const Body = styled.p`
font-size: 1.25rem;
padding-left: 1rem;
padding-right: 1rem;
color: #292929;
line-height: 1.4;
`

const AboutMe = ({aboutMes}) => {
    return (
        <Layout>
            <CustomHead text="//About Me"/>
            <Title text="About Me"/>
            <Container>
                <Article>
                    {aboutMes.data.map((aboutMe) => (
                      <div key={aboutMe.id}>
                          <Body><ReactMarkdown>{aboutMe.attributes.Description}</ReactMarkdown></Body>
                          <br/>
                          <LinkText>
                              <Links href="/contactDetails">
                                  If you would like to contact me, please click here.
                              </Links>
                          </LinkText>
                      </div>
                    ))}
                </Article>
            </Container>
        </Layout>
      )
};

export async function getStaticProps() {
    try {
        const result = await axios.get('https://strapi-portfolio.herokuapp.com/api/about-mes');
        const data = result.data;
        return {
            props: {
                aboutMes: data
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default AboutMe;


