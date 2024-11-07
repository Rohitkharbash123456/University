import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <span><FontAwesomeIcon icon = {faPlay} onClick={()=>{setPlayState(true)}}></FontAwesomeIcon></span>

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
 <h2>Nurturing Tommorow's Leader Today</h2>
 <p>The University of Delhi is a premier university of the country with a venerable legacy
     and international acclaim for highest academic standards, diverse educational programmes,
      distinguished faculty, illustrious alumni, varied co-curricular activities and modern infrastructure.
       Over the many years of its existence, the University has sustained the highest global standards 
       and best practices in higher education.</p>
       <p>Its long-term commitment to nation building and unflinching adherence to
         universal human values are reflected in its motto: 'Nishtha Dhriti Satyam</p>
         <p>The President of India is the Visitor, the Vice-President is the Chancellor
             and the Chief Justice of the Supreme Court of India is the Pro-Chancellor of the University.</p>
      </div>
    </div>
  )
}

export default About
