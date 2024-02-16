import { Container, Icon, Links, List } from "@/styles/contact.styled";
import { CustomHead } from "@/components/pages/head";
import { motion } from "framer-motion";
import { Title } from "@/components/pages/title";
import ContactForm from "@/components/contactDetails/ContactForm";
import React from "react";
import axios from "axios";


const head = "//Contact Details"
const title = "Get In Touch";

const ContactDetails = ({ contacts }) => {
  const list = {
    visible: {
      opacity: 1, y: 0,
      transition: { staggerChildren: 0.1 }
    },
    hidden: { 
      opacity: 0, 
      y: 50 
    }
  };
  const links = {
    visible: { 
      opacity: 1, 
      y: 0 
    },
    hidden: { 
      opacity: 0, 
      y: 50 
    }
  };

  return (
    <React.Fragment>
      <CustomHead text={head} />
      <Container>
        <Title text={title}/>
        <List initial="hidden"
              animate="visible"
              variants={list}
        >
          {contacts.data.map((contact) => (
            <motion.li whileTap={{ scale: [null, 1.02, 1.02] }}
                       whileHover={{ scale: [null, 1.025, 1.025] }}
                       transition={{ duration: 0.1 }}
                       variants={links} key={contact.id}
            >
              <Links href={contact.attributes.Info}>
                <Icon alt="Image could not be loaded"
                      width="50"
                      height="50"
                      src={contact.attributes.icon.data.attributes.url} 
                />
              </Links>
            </motion.li>
          ))}
        </List>
        <ContactForm />
      </Container>
    </React.Fragment>
  )
};

export async function getStaticProps() {
  try {
    const contactResult = await axios.get('https://strapi-portfolio.herokuapp.com/api/contact-infos', { params: { populate: "*" } });
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