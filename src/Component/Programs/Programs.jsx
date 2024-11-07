import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpeg'
import program_3 from '../../assets/program_3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={program_1} alt='' />
            <div className="caption">
                <FontAwesomeIcon icon = {faGraduationCap} style={{fontSize:"60px", color:"white"}}></FontAwesomeIcon>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt='' />
            <div className="caption">
                <FontAwesomeIcon icon = {faGraduationCap} style={{fontSize:"60px", color:"white"}}></FontAwesomeIcon>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt='' />
            <div className="caption">
                <FontAwesomeIcon icon = {faGraduationCap} style={{fontSize:"60px", color:"white"}}></FontAwesomeIcon>
                <p>Post Graduation</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
