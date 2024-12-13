import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>TAILWIND</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
          </div>
        </div>

        {/* ======== END OF FRONTEND DEVELOPMENT ======== */}

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>MONGODB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className='experience-detail-icon' />
              <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
