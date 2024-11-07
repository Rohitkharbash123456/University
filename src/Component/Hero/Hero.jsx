import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
<h1>We ensure  better education for a better world</h1>
<p>Our focus is to provide a stimulating early learning and child care experience
     which promotes each child’s social/emotional, physical and cognitive development.</p>
<button className='btn'>Explore more <span><FontAwesomeIcon icon = {faArrowRight}></FontAwesomeIcon></span></button>
        </div>
      
    </div>
  )
}

export default Hero
