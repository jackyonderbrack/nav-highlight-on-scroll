import './nav.css'
import {IoHomeSharp} from 'react-icons/io5'
import {BiUserPin} from 'react-icons/bi'
import {SiBookstack} from 'react-icons/si'
import {FaWifi} from 'react-icons/fa'
import {SiGooglemessages} from 'react-icons/si'
import {ImImages} from 'react-icons/im'





export default function Nav() {



  // On Click change state:
  




  return (

    <nav>
        <a  href="#home" 
            className='home'><IoHomeSharp /><p>Home</p></a>
        <a  href="#portfolio" 
            className='portfolio'> <ImImages /><p>Portfolio</p></a>
        <a  href="#about" 
            className='about'> <BiUserPin /><p>About</p></a>
        <a  href="#experience" 
            className='experience'> <SiBookstack /><p>Experience</p></a>
        <a  href="#services" 
            className='services'><FaWifi /><p>Services</p></a>
        <a  href="#contact"  
            className='contact'><SiGooglemessages /><p>Contact</p></a>
      
      
    </nav>

    
  )

  
}
