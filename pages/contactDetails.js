import ContactForm from "@/components/ContactForm";
import Image from "next/image";

import axios from "axios";
import Link from 'next/link';

import style from '@/styles/contactDetails.module.css';
import Head from "next/head";


const ContactDetails = ({contacts}) => {

    return (
      <>
      <Head>
        <title>| Contact Details</title>
      </Head>
        <div className={style.container}>
            <h1 className={style.title}>Get In Touch</h1>
            <ul className={style.contactList}>
              {contacts.data.map((contact) => (                
                <li key={contact.id}>
                    <div className={style.links}>
                      <Link className={style.link} href={contact.attributes.Info}>
                        <img alt="Image could not be loaded"
                        width="50"
                        height="50"
                        className={style.icon}
                        src={contact.attributes.ImageUrl }/>
                      </Link>
                    </div>
                </li>
              ))}
            </ul>
            <h1 className={style.subTitle}>Or you can use the below form and I&apos;ll get back to you:</h1>
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