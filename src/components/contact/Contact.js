import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hc5ez38', 'template_f3i0bqn', form.current, 'FTv053ZYsmETv1jgx')
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            {/* <form action="https://formspree.io/f/mgeqbenr" method="POST"> */}
            <h4>Email</h4>
            <h5 className="set">poonamssikarwar@gmail.com</h5>
            <a href="mailto:poonamssikarwar@gmail.com" target='_blank'>Send a Mail</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5 className="set">PoonamSikarwar</h5>
            <a href="https://www.facebook.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5 className="set">+7725870911</h5>
            <a href="https://api.whatsapp.com/send?phone7725870911" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact option */}

        <form action="https://formspree.io/f/mgeqbenr" method="POST" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"   rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
