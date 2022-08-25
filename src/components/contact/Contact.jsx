import { useState } from 'react';
import './contact.scss'

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const HandleTextAre = (e) => {
    setTextArea(e.target.value);
  }
  const handleSubmit = (e) => {
    if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1 && textArea !== '') {
      if (email.indexOf(".") > email.indexOf("@")) {
        e.preventDefault();
        setMessage(true);
        setEmail('');
        setTextArea('');
      } else {
        alert('Email is wrong or message is empty. Fill in the email and message please!');
        e.preventDefault();
      }
    } else {
      alert('Email is wrong or message is empty. Fill in the email and message please!');
      e.preventDefault();
    }

  }
  
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Email' onChange={handleEmail} value={email} />
          <textarea placeholder='Message' value={textArea} onChange={HandleTextAre} ></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}
