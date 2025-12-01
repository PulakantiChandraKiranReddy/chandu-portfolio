import React from 'react'
import './portfolio.css'
import IMG1 from '../assets/project1.png'
import IMG2 from '../assets/project2.png'
import IMG3 from '../assets/project3.png'
import IMG4 from '../assets/project4.png'
import IMG5 from '../assets/project5.png'
import IMG6 from '../assets/PROJECT6.png'
import IMG7 from '../assets/PROJECT7.png'
import IMG8 from '../assets/tinylink.jpg'
//Do not use the images in production
const data = [

    {
        id: 0,
        image: IMG8,
        title: 'TinyLink - URL Shortener using MERN Stack',
        github: 'https://github.com/PulakantiChandraKiranReddy/tinylink.git',
        demo: 'https://tinylink-pqo1.vercel.app/',

    },
        {
        id: 1,
        image: IMG6,
        title: 'Kube-Credentials — Kubernetes, Docker, AWS ECS & EKS deployment',
        github: 'https://github.com/PulakantiChandraKiranReddy/Kube-Credentials.git',
        demo: 'https://kube-credentials-fyc0.onrender.com/',
    },
        {
        id: 2,
        image: IMG7,
        title: 'Balance — Real-time Financial Dashboard using Next.js & Supabase',
        github: 'https://github.com/PulakantiChandraKiranReddy/F_Dashboard.git',
        demo: 'https://balance-khaki.vercel.app/',
    },
    {
        id: 3,
        image: IMG1,
        title: 'Certificate Issuing and verifying using Blockchain —solidity,truffle,ganache',
        github: 'https://github.com/PulakantiChandraKiranReddy',
        demo: 'https://github.com/PulakantiChandraKiranReddy',
    },
    {
        id: 4,
        image: IMG2,
        title: 'Cryptotalk - Secure Web Chat Application',
        github: 'https://github.com/PulakantiChandraKiranReddy',
        demo: 'https://github.com/PulakantiChandraKiranReddy',
    },
    // {
    //     id: 5,
    //     image: IMG3,
    //     title: 'Buffer Overflow Attack — python,bash ',
    //     github: 'https://github.com/PulakantiChandraKiranReddy',
    //     demo: 'https://github.com/PulakantiChandraKiranReddy',
    // },
    {
        id: 5,
        image: IMG4,
        title: 'VAPT on College Network',
        github: 'https://github.com/PulakantiChandraKiranReddy',
        demo: 'https://github.com/PulakantiChandraKiranReddy',
    },
    // {
    // id: 7,
    // image: IMG5,
    // title: 'GAME TIME-Python,Flutter',
    // github: 'https://github.com/PulakantiChandraKiranReddy',
    // demo: 'https://github.com/PulakantiChandraKiranReddy',
    // },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio