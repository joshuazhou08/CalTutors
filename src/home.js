import Hero from './Images/Hero Girl.png'
import Sunrise from './Images/Sunrise.png'
function createHomePage(){

    const heroSection = document.querySelector('#hero')

    //Hero
    const hero = document.createElement('div');
    hero.style.backgroundImage = `url(${Sunrise})`;  
    hero.style.height = '550px';
    hero.style.width = '100vw';
    hero.style.backgroundSize = 'cover'
    hero.style.backgroundPosition = 'bottom'
    hero.style.display = 'flex'
    hero.classList.add = 'centered'

    heroSection.appendChild(hero)

    const textWrapper = document.createElement('div')
    textWrapper.classList.add('wrapper')

    hero.appendChild(textWrapper)

    const heroText = document.createElement('h1')
    heroText.textContent = "The New Standard For Online Math Tutoring"

    textWrapper.appendChild(heroText)

    const heroSubText = document.createElement('p')
    heroSubText.textContent = "Recommended by the world's leading math professors, our tutoring will prepare your child to ace their next math exam. Schedule your first lesson today and together, lets help your child shine."

    textWrapper.appendChild(heroSubText)

    const startBtn = document.createElement('button')
    startBtn.textContent = "Get Started"
    startBtn.id = "get-started"

    textWrapper.appendChild(startBtn)

    //hero girl
    const heroGirl = document.createElement('img')
    heroGirl.src = Hero
    heroGirl.style.width = '320px'
    heroGirl.style.alignSelf = 'flex-end'
    hero.appendChild(heroGirl)

}
export {createHomePage}