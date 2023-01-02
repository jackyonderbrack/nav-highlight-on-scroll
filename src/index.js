import reactDOM from 'react-dom'
import App from './App'
import './index.css'




reactDOM.render(<App/>, document.querySelector("#root"))

// Animations logic:
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
            console.log('added a class "show-animation"');
        } else {
            entry.target.classList.remove('show-animation')
            console.log('removed a class "show-animation"');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')


hiddenElements.forEach((el) => observer.observe(el));




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