import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Tanveer Ahmed</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <Headersocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
