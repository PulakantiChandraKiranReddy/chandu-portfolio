import React from 'react'
import './About.css'
import ME from '../assets/chandu_DP.jpg'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Fresher</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certificate</h5>
                            <small>Microsoft Cyber Security Analysist</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>4+ Completed</small>
                        </article>
                    </div>

                    <p>
                    I am a careful and detail-oriented person who wants to become a 
                    professional penetration tester. My dream is to join a Pentest team 
                    and grow in the field of cybersecurity. In the next 5 years, I aim to earn 
                    certificates like CEH and CISSP. I have done projects like VAPT on
                     my college network, a secure web chat app, and certificate verification
                     using blockchain. I also completed online courses from Coursera, Cisco, Hackerrank, and TryHackMe. With skills in Python, Linux, penetration testing, and full-stack development, I am always learning and working hard to improve.

                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About