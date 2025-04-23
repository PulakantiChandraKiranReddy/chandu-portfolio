import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'; // Font Awesome
import { RiDiscordLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa';

/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>CHANDRA KIRAN REDDY</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="mailto:chandrakiranreddy2003@gmail.com"><FaEnvelope /></a >
                <a href="https://www.linkedin.com/in/chandu-reddy-258b94257/"><FaLinkedinIn /></a>
                <a href="https://github.com/PulakantiChandraKiranReddy"><FaGithubAlt /></a>
                <a href="https://www.instagram.com/chandu.reddy20?igsh=MTVqZzhtcjBqamptNA=="><FaInstagram /></a >
                <a href="https://discord.gg/kURF5bh9"><RiDiscordLine /></a >
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/chandu-reddy-258b94257/">chandra kiran</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer