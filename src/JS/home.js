import Hero from './Images/Hero.png'
import Sunrise from './Images/Sunrise.png'
import '../Styling/home.css'
function createHomePage(){

    const heroSection = document.querySelector('#hero')

    //Hero
    const hero = document.createElement('div');
    hero.style.backgroundImage = `url(${Sunrise})`;  
    hero.style.minHeight = '550px';
    hero.style.width = '100vw';
    hero.style.backgroundSize = 'cover'
    hero.style.backgroundPosition = 'bottom'
    hero.classList.add = 'centered'

    heroSection.appendChild(hero)

    const textWrapper = document.createElement('div')
    textWrapper.classList.add('wrapper')
    textWrapper.classList.add('animatedHover')

    hero.appendChild(textWrapper)

    const heroText = document.createElement('h1')
    heroText.textContent = "The New Standard For Online STEM Tutoring"

    textWrapper.appendChild(heroText)

    const heroSubText = document.createElement('p')
    heroSubText.textContent = `Unlock your potential one lesson at a time. 
    Schedule your free first lesson today and together, lets shine.`

    heroSubText.style.fontSize = '18px'

    textWrapper.appendChild(heroSubText)

    const startBtn = document.createElement('button')
    startBtn.textContent = "Get Started"
    startBtn.id = "get-started"
    startBtn.classList.add('animatedHover')
    startBtn.addEventListener('click', () => {
        document.querySelector('#bookFree').scrollIntoView(false, {behavior: "smooth"});
    })

    textWrapper.appendChild(startBtn)

    //hero 
    const heroGirl = document.createElement('img')
    heroGirl.src = Hero
    heroGirl.style.width = '320px'
    heroGirl.style.alignSelf = 'flex-start'
    heroGirl.classList.add('animatedHover')
    hero.appendChild(heroGirl)

}
export {createHomePage}