import './header.css'
import HeaderImg from '../../assets/me4.jpg'


const Header = () => {
  return (
    <section id='home'>
      <div className="container">

        <div className='column'> 

            <div className="column">
              <h2>Michał Łuczak</h2>
              <h5 className='hidden-1'>I am a programer & graph designer</h5>
            </div>
            
            <div className='column'>  
              
              <p className='hidden-2'>•HTML</p>
              <p className='hidden-1'>• CSS • SCSS</p>       
              <p className='hidden-2'>• Bootstrap</p>         
              <p className='hidden-1'>• JavaScript • React</p>
              <p className='hidden-2'>• Node</p>    
              
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