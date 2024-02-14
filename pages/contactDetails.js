import ContactForm from "@/components/contactDetails/ContactForm";
import { CustomHead }  from "@/components/pages/head";

import axios from "axios";


import { motion } from "framer-motion";

import styled from "styled-components";

import Layout from "@/components/animations/layout";

const Container = styled.div`
margin: 2rem auto;
max-width: 700px;
padding: 0 1rem;
`

const Title = styled.h1`
font-size: 3rem;
margin-bottom: 2rem;
text-align: center;
`

const List = styled(motion.ol)`
list-style-type: none;
margin: 1rem;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Links = styled.a`
color: #0070f3;
text-decoration: none;
font-size: 1.2rem;
margin-right: 1rem;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
`

const Icon = styled.img`
width: 7rem;
height: 7rem;

@media screen and (max-width: 768px) {
width: 5rem;
height: 5rem;
margin: 0;
}
` 

const ContactDetails = ({contacts}) => {

  const list = {visible: { opacity: 1, y:0, 
                transition: { staggerChildren: 0.1 }},
                hidden: { opacity: 0, y:50 }};
  const links = {visible: { opacity: 1, y:0},
                hidden: { opacity: 0, y:50 }};
    return (
      <Layout>
        <CustomHead text="//Contact Details"/>
        <Container>
            <Title>Get In Touch</Title>
            <List initial="hidden"
                  animate="visible" 
                  variants={list}>
              {contacts.data.map((contact) => (              
                <motion.li  whileTap={{scale: [null, 1.02, 1.02]}}
                            whileHover={{scale: [null, 1.025, 1.025]}}
                            transition={{ duration: 0.1 }}
                            variants={links} key={contact.id}>
                  <Links href={contact.attributes.Info}>
                    <Icon alt="Image could not be loaded"
                           width="50"
                           height="50"
                           src={contact.attributes.icon.data.attributes.url }/>
                  </Links>
                </motion.li>
              ))}
            </List>
            <ContactForm />
        </Container>
        </Layout>
      )
};

export async function getStaticProps() {
    try {
        const contactResult = await axios.get('https://strapi-portfolio.herokuapp.com/api/contact-infos', {params:{ populate: "*"}});
        const contactData = contactResult.data;
        console.log(contactData);
        return {
            props: {
                contacts: contactData,
            }
        }
    } catch (error) {
        console.log(error);
    }
}


export default ContactDetails;