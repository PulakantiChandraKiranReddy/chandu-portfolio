import React, { useRef } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m6itcur', 'template_yweagnp', form.current, 'rBH6-7YUb9ZRpKlqh')
            .then((result) => {
                console.log(result.text);
                e.target.reset(); // Reset the form after the email is sent successfully
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h6>chandrakiranreddy2003@gmail.com</h6>
                        <a href="mailto:chandrakiranreddy2003@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <FaInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>chandu.reddy20</h5>
                        <a href="https://www.instagram.com/chandu.reddy20?igsh=MTVqZzhtcjBqamptNA==" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Chandra Kiran Reddy</h5>
                        <a href="https://www.linkedin.com/in/chandu-reddy-258b94257/" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Chandu Reddy' required />
                    <input type="email" name='email' placeholder='example@example.com' required />
                    <textarea name='message' rows="7" placeholder='Hi Chandu, I have a question...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
