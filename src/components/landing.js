import React from 'react'
import "../sass/landing.scss"
import CrownStudioLogo from '../images/crown-logo.svg'

const Landing = () => {
  return (
    <section className="landing-section">
      <div className="navbar-wrapper">
        <img src={CrownStudioLogo} className="nav-logo" />
        <nav className="navbar">
          <a className="nav-links">About</a>
          <a className="nav-links">Work</a>
          <a className="nav-links">Contact</a>
        </nav>
      </div>
      <div className="landing-main">
        <div className="landing-description-wrapper">
          <h1 className="landing-header">CrownStudio</h1>
          <div className="landing-description">Grow your business with our team of designers, developers, and marketers</div>
          <button className="landing-button">Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Landing
