import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'


const data = [
  {
    id: 1,
    image: Img1,
    title: 'this is portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 1,
    image: Img2,
    title: 'this is portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 1,
    image: Img3,
    title: 'this is portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 1,
    image: Img4,
    title: 'this is portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className="portfolio-item-img">
                  <img src={image} alt="title" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
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