import React, { useRef } from 'react'
import './Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.jpeg'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {

    
    const slider= useRef();
    let tx = 0;

const slideForward = () =>{
if (tx > -50){
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () =>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
    
      <span className='next-btn' onClick={slideForward} ><FontAwesomeIcon icon = {faArrowRight }></FontAwesomeIcon></span>
      <span className='back-btn' onClick={slideBackward}><FontAwesomeIcon icon ={faArrowLeft} ></FontAwesomeIcon></span>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt='' />
                    <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                </div>
                </div>
                <p>In my experience all the teachers are very supportive and friendly and the placement
                     process has been very smooth throughout. I would always be very grateful for the 
                     lifelong connections I made  My four years at Sharda have been a wonderful experience 
                     of learning with prolific exposure to outside. Huge respect, love and devotion for entire
                      faculty members and department.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt='' />
                    <div>
                    <h3>Sara Johns</h3>
                    <span>Barleys, USA</span>
                </div>
                </div>
                <p>"My experience at Sharda University is great and memorable. The mentors at Sharda University
                     helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement
                      cell for providing a platform to enhance my skills and an opportunity to showcase them. In
                       the last I am saying that The World is here at Sharda University."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt='' />
                    <div>
                    <h3>Ken Williams</h3>
                    <span>Edusity, USA</span>
                </div>
                </div>
                <p>“It was a great experience studying at Sharda University, a memory to cherish for lifetime.
                     My experience at Sharda was full of learning and grooming. Being a global university 
                     It gave me an opportunity to meet different kind of people from around the world and 
                     learnt many things from them. I am thankful to all the faculties, mentors and entire 
                     SET department for providing us with quality education. I am also grateful to TNP Cell 
                        </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt='' />
                    <div>
                    <h3>Samantha Irvin</h3>
                    <span>Boomer, USA</span>
                </div>
                </div>
                <p>It was my immense luck and fortune to be the part of Sharda University where I can grow.
                     The entire faculty and department leaves no stone unturned to shape one\'s future. My 
                     four years at Sharda have been a wonderful experienc Huge respect, love and devotion for entire
                     faculty members and department.  I am thankful to all the faculties, mentors.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
