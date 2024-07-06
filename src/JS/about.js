import './nav_footer.js'
import '../Styling/reset.css'
import '../Styling/style.css'
import '../Styling/nav.css'
import '../Styling/footer.css'
import '../Styling/about.css'
import './section.js'
import aboutHeroImg from './Images/About Hero.png'
import josh from './Images/headshots/josh-hs.png'
import rob from './Images/headshots/sohrab-hs.png'
import dan from './Images/headshots/dan-hs.png'

function makeProfile(img, major, name, position, intro){
    let clicked = 0

    const container = document.createElement('div')
    container.style.position = 'relative'

    const profileImg = document.createElement('img')
    profileImg.src = img

    const maj = document.createElement('p')
    maj.classList.add('major')
    maj.textContent = major

    const person = document.createElement('h2')
    person.textContent = name
    person.style.fontWeight = 1000

    const pos = document.createElement('h4')
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
        maj.style.opacity = 0
        person.style.opacity = 0
        pos.style.opacity = 0
        about.style.opacity = 1
    })
    about.addEventListener('mouseleave', () => {
        profileImg.style.opacity = 1
        maj.style.opacity = 1
        person.style.opacity = 1
        pos.style.opacity = 1
        about.style.opacity = 0
    })

   //For Mobile Devices
    container.addEventListener('touchstart', () => {
        if (!clicked){
            profileImg.style.opacity = 0.4
            maj.style.opacity = 0
            person.style.opacity = 0
            pos.style.opacity = 0
            about.style.opacity = 1
            clicked = 1
        }
        else{
            profileImg.style.opacity = 1
            maj.style.opacity = 1
            person.style.opacity = 1
            pos.style.opacity = 1
            about.style.opacity = 0
            clicked = 0
        }
        console.log("clicked")
    })
    return container
}

//hero
const aboutHero = document.querySelector("#about-hero")
aboutHero.src = aboutHeroImg

const container = document.querySelector('#tutors')
//team

const joshIntro = `I am a rising second-year student as UC Berkeley. I am passionate about engineering
and math and their applications in space. During my free time, I enjoy playing sports as well as creating art.
I welcome you to Luminous and look forward to working with you! 
 `
const sohrabIntro = `Beginning in high school, I was always on the lookout for business ventures and
opportunities. Working with Josh, I focus on delivering the best customer experience as both a tutor and
marketer. I really enjoy playing soccer as well as spending time with my friends. Welcome to Luminous!`

const joshua = makeProfile(josh, 'UC Berkeley | EECS + Applied Math', 'Joshua Zhou', 'College Math Tutor', joshIntro)
const sohrab = makeProfile(rob, 'IVC | Economics', 'Sohrab Sadjadi', 'SAT and ACT Reading and Writing', sohrabIntro)

container.appendChild(joshua)
container.appendChild(sohrab)

//tutors



const danielIntro = `Hi! My name is Daniel, and I am a rising second-year. As I continued to 
master my writing skills through AP exams, college applications, and essays during my freshman year of college, 
I gained valuable insights into what can elevate a student’s writing from satisfactory to excellent. My main focus 
as your writing tutor is to ignite your intellectual fire, to give your writing ideas a deeper layer of nuance. 
Then, I will teach you how to execute these ideas with effective rhetoric. In my free time, I like to play 
pickleball and chess. I look forward to working with you!`

const daniel = makeProfile(dan, 'UC Berkeley | Political Science + Data Science', 'Daniel Delpassand', 'Writing And Professional Development', danielIntro)

container.appendChild(daniel)