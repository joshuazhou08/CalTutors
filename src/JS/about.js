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
import veerImg from './Images/headshots/veer.png'
import arjunImg from './Images/headshots/arjun.png'
import charlesImg from './Images/headshots/charles.png'

class tutor {
    static OurTutors = document.querySelector('#tutors')
    constructor(img, major, name, position, intro){
        this.img = img;
        this.major = major;
        this.name = name;
        this.position = position;
        this.intro = intro;
    }
    makeProfile(){
        let clicked = 0
    
        const container = document.createElement('div')
        container.style.position = 'relative'
    
        const profileImg = document.createElement('img')
        profileImg.src = this.img
    
        const maj = document.createElement('p')
        maj.classList.add('major')
        maj.textContent = this.major
    
        const person = document.createElement('h2')
        person.textContent = this.name
        person.style.fontWeight = 1000
    
        const pos = document.createElement('h4')
        pos.textContent = this.position
    
        container.appendChild(profileImg)
        container.appendChild(maj)
        container.appendChild(person)
        container.appendChild(pos)
    
        const about = document.createElement('p')
        about.textContent = this.intro
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
        })
        tutor.OurTutors.appendChild(container)
    }
}
//hero
const aboutHero = document.querySelector("#about-hero")
aboutHero.src = aboutHeroImg

//team

const joshIntro = `I am a rising second-year student as UC Berkeley. I am passionate about engineering
and math and their applications in space. During my free time, I enjoy playing sports as well as creating art.
I welcome you to Lumina and look forward to working with you! 
 `
const sohrabIntro = `Beginning in high school, I was always on the lookout for business ventures and
opportunities. Working with Josh, I focus on delivering the best customer experience as both a tutor and
marketer. I really enjoy playing soccer as well as spending time with my friends. Welcome to Lumina!`
const danielIntro = `Hi! My name is Daniel, and I am a rising second-year. As I continued to 
master my writing skills through AP exams, college applications, and essays during my freshman year of college, 
I gained valuable insights into what can elevate a student’s writing from satisfactory to excellent. My main focus 
as your writing tutor is to ignite your intellectual fire, to give your writing ideas a deeper layer of nuance. 
Then, I will teach you how to execute these ideas with effective rhetoric. In my free time, I like to play 
pickleball and chess. I look forward to working with you!`

const veerIntro = `My name is Veer Adhvaryu and I am studying Aerospace Engineering with and Electrical Engineering 
and Computer Science minor at UC Berkeley. I teach math, physics, python, APUSH, SAT/ACT (score of 1530 on SAT), and 
most other STEM-related subjects. In my free time, I love to hang out with my friends, go to the beach, and watch sports!`

const charlesIntro = `Hello! My name is Charles Habgood, and I am an undergraduate student at UC Berkeley studying 
Environmental Engineering. I help students in a wide range of subjects, including math, college essay writing, 
creative writing, and the SAT/ACT. In my free time, I love to play soccer, go on adventures with my dog, and ski.`

const arjunIntro = `Hey! I'm Arjun, a rising senior at UC Berkeley majoring in Bioengineering with a minor in Education. 
As Academic Vice President of a major pre-med organization on campus and founder of a nonprofit teaching kids tennis, 
I'm passionate about educating and mentoring. I enjoy tutoring pre-med courses, SAT/ACT prep, and STEM subjects. I've also 
guided students in pursuing extracurriculars like research and launching nonprofits. Beyond academics, I'm into photography, 
exploring new foods, and playing tennis!`


const joshua = new tutor(josh, 'UC Berkeley | EECS + Applied Math', 'Joshua Zhou', 'College Math', joshIntro)
const sohrab = new tutor(rob, 'IVC | Economics', 'Sohrab Sadjadi', 'SAT/ACT Prep', sohrabIntro)
const daniel = new tutor(dan, 'UC Berkeley | Political Science + Data Science', 'Daniel Delpassand', 'Writing And Professional Development', danielIntro)
const veer = new tutor(veerImg, 'UC Berkeley | Aerospace + EECS', 'Veer Adhvaryu', 'STEM and Python', veerIntro)
const charles = new tutor(charlesImg, 'UC Berkeley | Environmental Engineering', 'Charles Habgood', 'College Writing and SAT/ACT Prep', charlesIntro)
const arjun = new tutor(arjunImg, 'UC Berkeley | Bioengineering + Education', 'Arjun Shivkumar', 'Pre-Med and SAT/ACT Prep', arjunIntro )

arjun.makeProfile()
joshua.makeProfile()
charles.makeProfile()
veer.makeProfile()
daniel.makeProfile()
//tutors
