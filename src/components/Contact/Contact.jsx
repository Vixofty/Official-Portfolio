import React from 'react';
import {useRef} from 'react'
import './Contact.css';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yxff3nc', 'template_uz9xaad', form.current, '6D2PxLR6eB-LUaliw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <div>
      <div className="form-container">
        <form className='form' ref={form} onSubmit={sendEmail}>
          <h2>Contact form</h2>
          <input type="name" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact