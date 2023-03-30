import ContactForm from "@/components/contactDetails/ContactForm";
import { ContactDetailsHead }  from "@/components/contactDetails/contactDetailsHead";

import axios from "axios";

import Image from "next/image";
import Link from 'next/link';

import {motion} from "framer-motion";

import style from '@/styles/contactDetails.module.css';



const ContactDetails = ({contacts}) => {
  const list = {visible: { opacity: 1, y:0, transition: { when: "beforeChildren", staggerChildren: 0.05 }},
                hidden: { opacity: 0, y:50, transition: { when: "afterChildren" } 
                }};
  const page = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:100}};
  const item = {visible: { opacity: 1, y:0},
                hidden: { opacity: 0, y:50 }};
    return (
      <>
        <ContactDetailsHead />
        <motion.div initial="hidden"
                    animate="visible"
                    variants={page} className={style.container}>
            <h1 className={style.title}>Get In Touch</h1>
            <motion.ol  initial="hidden"
                        animate="visible" 
                        variants={list} 
                        className={style.contactList}>
              {contacts.data.map((contact) => (              
                <motion.li  whileTap={{scale: [null, 1.02, 1.02]}}
                            whileHover={{scale: [null, 1.025, 1.025]}}
                            transition={{ duration: 0.1 }}
                            variants={item} key={contact.id}>
                  <Link className={style.link} href={contact.attributes.Info}>
                    <Image alt="Image could not be loaded"
                           width="50"
                           height="50"
                           className={style.icon}
                           src={contact.attributes.icon.data.attributes.url }/>
                  </Link>
                </motion.li>
              ))}
            </motion.ol>
            <ContactForm />
        </motion.div>
        </>
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