import Hero from './Images/Hero.png'

function createHomePage(){

    const heroSection = document.querySelector('#hero')

    //Hero
    const hero = document.createElement('div');
    hero.style.backgroundImage = `url(${Hero})`;  
    hero.style.height = '600px';
    hero.style.width = '1600px';
    hero.style.backgroundSize = 'cover'
    hero.style.backgroundPosition = 'bottom'

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


}
export {createHomePage}