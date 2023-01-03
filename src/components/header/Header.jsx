import './header.css'
import HeaderImg from '../../assets/me4.jpg'


const Header = () => {
  return (
    <section id='home'>
      <div className="container">

        <div className='column'>

            <div className="row">
              <h2>Michał Łuczak</h2>
            </div>
            
            <div className='column'>  
              <p className='hidden-1'>I am a programer & graph designer</p>
              <p className='hidden-2'>HTML, CSS, JS, React, Node. </p>
            </div>

            <div className="row call-to-action">
              <button className='button-1'><a href="Download">Download CV</a></button>
              <button className='button-2'><a href="#contact">Contact</a></button>
            </div>
        </div>
            <div className="column">
                <img className='hidden-2' src={HeaderImg} alt="My_picture" />
            </div>
        
        
      </div>
      
      
    </section>
  )
}
export default Header