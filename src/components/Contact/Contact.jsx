import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uuy51l8', 'template_675q6j6', form.current, '0HICP7Cd4jm4c8gcr')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>corentin.loignon.pro@gmail.cmom</h5>
            <a href="mailto:corentin.loignon.pro@gmail.com" target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>corentin.loignon</h5>
            <a href="https://m.me/corentin.loignon" target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33 6 58 66 20 98</h5>
            <a href="https://api.whatsapp.com/send?phone=+33658662098" target='_blank'>Envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom et prénom' required />
          <input type="email" name='email' placeholder='Votre adresse email' required/>
          <textarea name="message" rows="10" placeholder='Votre message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer votre message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact