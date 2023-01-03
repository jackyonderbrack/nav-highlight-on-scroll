import './header.css'
import HeaderImg from '../../assets/me4.jpg'


const Header = () => {
  return (
    <section id='home'>
      <div className="container">

        <div className='column'> 

            <div className="column">
              <h2>Michał Łuczak</h2>
              <p className='hidden-1'>I am a programer & graph designer</p>
            </div>
            
            <div className='column'>  
              
              <p className='hidden-2'><b>HTML</b></p>
              <p className='hidden-2'><b>CSS • SCSS • Bootstrap</b></p>            
              <p className='hidden-1'><b> JavaScript • React • Node</b></p>
              
            </div>

            <div className="row call-to-action">
              <button className='button-1'><a href="Download">Download CV</a></button>
              <button className='button-2'><a href="#contact">Contact</a></button>
            </div>
        </div>

        <div className="column">
            <img className='hidden-3' src={HeaderImg} alt="My_picture" />
        </div>
        
        
      </div>
      
      
    </section>
  )
}
export default Header