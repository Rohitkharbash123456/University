import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faLocation, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0178f2a1-bbc7-4562-83bf-debb1249f1ab");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <span><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></span> </h3>
        <p>Feel free to reach out through contact form or find our 
            contact info below. Your feedback, questions and suggestions are 
            important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
            <li><span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>rkharbash3030@gmail.com</li>
            <li><span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>+91 123-456-7890</li>
            <li><span><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></span>Red Square Market, Hisar, Haryana.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now<span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
