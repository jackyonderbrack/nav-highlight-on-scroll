import './nav.css'
import {IoHomeSharp} from 'react-icons/io5'
import {BiUserPin} from 'react-icons/bi'
import {SiBookstack} from 'react-icons/si'
import {FaWifi} from 'react-icons/fa'
import {SiGooglemessages} from 'react-icons/si'
import {ImImages} from 'react-icons/im'





export default function Nav() {



  // On Click change state:
  

  // Nav On Scroll change state:
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('nav a');    
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
              
    if(window.pageYOffset >= (sectionTop - sectionHeight/3)) {
      current = section.getAttribute('id')
      }
    })
      console.log(current)
      navLi.forEach ( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
          a.classList.add('active');
        }
    })
  })


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
