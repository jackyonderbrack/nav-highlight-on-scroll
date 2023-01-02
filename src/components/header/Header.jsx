import './header.css'
import HeaderImg from '../../assets/me71.png'


const Header = () => {
  return (
    <section id='home'>
      <h2>mike.projektowanie</h2>
      <p className='hidden'>I am a programer</p>
      <img src={HeaderImg} alt="My_picture" />
    </section>
  )
}
export default Header