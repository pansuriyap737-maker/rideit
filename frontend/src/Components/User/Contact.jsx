import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='get-in-touch'>
            <h2 id='touch-title'>📞 Get in Touch</h2>
            <p><b>Email:</b> support@tripool.com</p>
            <p><b>Phone:</b> +91 78628 93655</p>
            <p><b>Address: </b>Surat, Gujarat, India</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3999.2760921804543!2d72.87384842705505!3d21.22201138183854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0b63ebac43%3A0xfda247a07247b09c!2sSASSC!5e0!3m2!1sen!2sin!4v1754561592943!5m2!1sen!2sin" width="100%" height="300px"></iframe>
        </div>

        <div className='contact-us'>
            <h2 id='contact-title'>Contact Us</h2>
            <form action="post" className='form-contact'>
                <label>Full Name</label>
                <input type="text" name='fullname' required/>

                <label>Email:</label>
                <input type="email" name='email' required/>

                <label>Subject</label>
                <input type="text" name='sub' required/>

                <label>Message</label>
                <textarea name="message" id="text-area"></textarea>

                <button type='submit' id='send-msg'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact