import './nav.css'
import {IoHomeSharp} from 'react-icons/io5'
import {BiUserPin} from 'react-icons/bi'
import {SiBookstack} from 'react-icons/si'
import {FaWifi} from 'react-icons/fa'
import {SiGooglemessages} from 'react-icons/si'
import {ImImages} from 'react-icons/im'
import { useState } from 'react'





export default function Nav() {

  const [activeNav, setActiveNav] = useState('#home')
    //





  return (

    <nav>
        <a  href="#home" 
          onClick={() => setActiveNav('#home')} 
          className={activeNav === '#home' ? 'active' : ' '}><IoHomeSharp /><p>Home</p></a>

        <a  href="#portfolio" 
          onClick={() => setActiveNav('#portfolio')} 
          className={activeNav === '#portfolio' ? 'active' : ' '}> <ImImages /><p>Portfolio</p></a>

        <a  href="#about" 
          onClick={() => setActiveNav('#about')} 
          className={activeNav === '#about' ? 'active' : ' '}> <BiUserPin /><p>About</p></a>

        <a  href="#experience" 
          onClick = {() => setActiveNav('#experience')} 
          className={activeNav === '#experience' ? 'active' : ' '}> <SiBookstack /><p>Experience</p></a>

        <a  href="#services" 
          onClick={() => setActiveNav('#services')} 
          className={activeNav === '#services' ? 'active' : ' '}> <FaWifi /><p>Services</p></a>

        <a  href="#contact" 
          onClick={() => setActiveNav('#contact')} 
          className={activeNav === '#contact' ? 'active' : ' '}><SiGooglemessages /><p>Contact</p></a>
      
    </nav>

    
  )

  
}
