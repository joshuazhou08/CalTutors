import './nav_footer.js'
import '../Styling/reset.css'
import '../Styling/style.css'
import '../Styling/nav.css'
import '../Styling/footer.css'
import '../Styling/about.css'
import './section.js'
import aboutHeroImg from './Images/About Hero.png'
import josh from './Images/josh-hs.png'
import rob from './Images/sohrab-hs.png'

function makeProfile(img, major, name, position, intro){
    const container = document.createElement('div')
    container.style.position = 'relative'

    const profileImg = document.createElement('img')
    profileImg.src = img

    const maj = document.createElement('p')
    maj.classList.add('major')
    maj.textContent = major

    const person = document.createElement('h2')
    person.textContent = name

    const pos = document.createElement('h3')
    pos.textContent = position

    container.appendChild(profileImg)
    container.appendChild(maj)
    container.appendChild(person)
    container.appendChild(pos)

    const about = document.createElement('p')
    about.textContent = intro
    about.classList.add('about-me')

    container.appendChild(about)
    
    about.addEventListener('mouseenter', () => {
        profileImg.style.opacity = 0.4
    })
    about.addEventListener('mouseleave', () => {
        profileImg.style.opacity = 1
    })
    return container
}

//hero
const aboutHero = document.querySelector("#about-hero")
aboutHero.src = aboutHeroImg

//team
const container = document.querySelector('.team-container')

const joshIntro = `I am a rising second-year student as UC Berkeley. I am passionate about engineering
and math and their applications in space. During my free time, I enjoy playing sports as well as creating art.
I welcome you to Luminous and look forward to working with you! 
 `
const sohrabIntro = `Beginning in high school, I was always on the lookout for business ventures and
opportunities. Working with Josh, I focus on delivering the best customer experience as both a tutor and
marketer. I really enjoy playing soccer as well as spending time with my friends. Welcome to Luminous!`

const joshua = makeProfile(josh, 'UC Berkeley | EECS + Applied Math', 'Joshua Zhou', 'Founder', joshIntro)
const sohrab = makeProfile(rob, 'IVC | Economics', 'Sohrab Sadjadi', 'Business Lead', sohrabIntro)

container.appendChild(joshua)
container.appendChild(sohrab)

//tutors

const tutorContainer = document.querySelector('.tutor-container')

const daniel = makeProfile