import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>3+ Yeras </small>
            </article>

            <article className='about-card'>
              <FiUser className='about-icon' />
              <h5>Clients</h5>
              <small>100+ </small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>80+ </small>
            </article>
          </div>
          <p>I m Front end developer. I keep it concise, focusing on my relevant technical skills, project experience, and alignment with the job. Highlight a key project, connect your skills to the company's needs, and express genuine enthusiasm for the role.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
