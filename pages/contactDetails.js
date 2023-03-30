import ContactForm from "@/components/contactDetails/ContactForm";
import { ContactDetailsHead }  from "@/components/contactDetails/contactDetailsHead";

import axios from "axios";

import Image from "next/image";
import Link from 'next/link';

import style from '@/styles/contactDetails.module.css';



const ContactDetails = ({contacts}) => {
    return (
      <>
        <ContactDetailsHead />
        <div className={style.container}>
            <h1 className={style.title}>Get In Touch</h1>
            <ul className={style.contactList}>
              {contacts.data.map((contact) => (                
                <li key={contact.id}>
                  <Link className={style.link} href={contact.attributes.Info}>
                    <Image alt="Image could not be loaded"
                           width="50"
                           height="50"
                           className={style.icon}
                           src={contact.attributes.icon.data.attributes.url }/>
                  </Link>
                </li>
              ))}
            </ul>
            <ContactForm />
        </div>
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