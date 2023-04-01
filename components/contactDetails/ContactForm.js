import React from 'react'

import styled from 'styled-components'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

const SERVICE_ID = "service_kgx4plf";
const TEMPLATE_ID = "template_7fp5blp";
const USER_ID = "fsAp9_EBVSDfTpY1G";

const Subtitle = styled.h1`
font-size: 2rem;
margin-bottom: 2rem;
text-align: center;
`
const FormContainer = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 50px 20px;
background-color: #f9f9f9;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
text-align: center !important;
`

const Title = styled.h2`
text-align: center;
font-size: 2rem;
margin-bottom: 20px;
`
const FormFields = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
const FormLabel = styled.label`
font-size: 1.2rem;
margin-bottom: 5px;
`
const FormControl = styled.input`
padding: 10px;
font-size: 1.2rem;
border-radius: 5px;
border: none;
background-color: #fff;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
&:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
`
const FormText = styled.textarea`
height: 150px;
`
const ButtonContainer = styled.div`
display: inline-block;
text-align: center !important;
`
const FormButton = styled.button`
padding: 10px;
font-size: 1.2rem;
border-radius: 5px;
border: none;
background-color: #fff;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
margin-top: auto;

.button[type="submit"] {
  background-color: #0070f3;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button[type="submit"]:hover {
  background-color: #0053a8;
}
`
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...')
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    setFormStatus('Send')
    e.target.reset()
  };
  return (
    <>
      <Subtitle>
        {"Or you can use the below form and I'll get back to you:"}
      </Subtitle>
      <FormContainer>
        <Title>
          Contact me
        </Title>
        <form onSubmit={handleOnSubmit}>
          <FormFields>
            <FormLabel htmlFor="name">
              Name
            </FormLabel>
            <FormControl type="text" id="name" required />
          </FormFields>
          <FormFields>
            <FormLabel htmlFor="email">
              Email
            </FormLabel>
            <FormControl type="email" id="email" required />
          </FormFields>
          <FormFields>
            <FormLabel htmlFor="message">
              Message
            </FormLabel>
            <FormText id="message" required />
          </FormFields>
          <ButtonContainer>
            <FormButton type="submit" value="Send">
              {formStatus}
            </FormButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  )
}
export default ContactForm