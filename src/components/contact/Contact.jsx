import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>tanveerahmed08.1999@gmail.com</h5>
            <a href="mailto:tanveerahmed08.1999@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>Tanveer Ahmed</h5>
            <a href="https://m.me/profile.php?id=61561120005578" target='_blank'>Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            <h5>+923053565751</h5>
            <a href="https://api.whatsapp.com/send?phone+923053565751" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Emial' />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
