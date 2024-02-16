import { Body, LinkText, Links } from "@/styles/aboutMe.styled";
import { ArticleTemplate } from "@/components/pages/articleTemplate";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CustomHead } from "@/components/pages/head";
import { Title } from "@/components/pages/title";
import Layout from "@/components/animations/layout";
import axios from "axios";

const head = "//About Me";
const title = "About Me";
const contactLink = "/contact-details";

const AboutMe = ({ aboutMes }) => {
    return (
        <Layout>
            <CustomHead text={head} />
            <Title text={title} />
            <ArticleTemplate>
                {aboutMes.data.map((aboutMe) => (
                    <div key={aboutMe.id}>
                        <Body>
                            <ReactMarkdown>
                                {aboutMe.attributes.Description}
                            </ReactMarkdown>
                        </Body>
                        <br />
                        <LinkText>
                            <Links href={contactLink}>
                                If you would like to contact me, please click here.
                            </Links>
                        </LinkText>
                    </div>
                ))}
            </ArticleTemplate>
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