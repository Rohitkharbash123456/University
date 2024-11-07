import React from 'react'
import './Campus.css'

import campus_1 from '../../assets/campus_1.jpg'
import campus_2 from '../../assets/campus_2.jpg'
import campus_3 from '../../assets/campus_3.jpg'
import campus_4 from '../../assets/campus_4.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={campus_1} alt=''/>
        <img src={campus_2} alt=''/>
        <img src={campus_3} alt=''/>
        <img src={campus_4} alt=''/>
      </div>
      <button className='btn dark-btn'>See more here <span><FontAwesomeIcon icon = {faArrowRight} style={{color:"white"}}></FontAwesomeIcon></span></button>
    </div>
  )
}

export default Campus
