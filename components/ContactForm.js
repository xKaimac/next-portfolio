import React from 'react'
import style from '@/styles/ContactForm.module.css'


const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className={style.contactFormContainer}>
      <h2 className={style.contactFormTitle}>Contact me</h2>
      <form onSubmit={onSubmit}>
        <div className={style.contactFormFields}>
          <label className={style.formLabel} htmlFor="name">
            Name
          </label>
          <input className={style.formControl} type="text" id="name" required />
        </div>
        <div className={style.contactFormFields}>
          <label className={style.formLabel} htmlFor="email">
            Email
          </label>
          <input className={style.formControl} type="email" id="email" required />
        </div>
        <div className={style.contactFormFields}>
          <label className={style.formLabel} htmlFor="message">
            Message
          </label>
          <textarea className={style.formControl} id="message" required />
        </div>
        <div className={style.buttonContainer}>
          <button className={style.formControlButton} type="submit">
            {formStatus}
          </button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm