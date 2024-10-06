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
import samImg from './Images/headshots/sam-hs.png'
import yonaImg from './Images/headshots/yonatan.png'
import skyeImg from './Images/headshots/skye.png'
import ivyImg from './Images/headshots/ivy-hs.png'
import thiernoImg from './Images/headshots/thierno-hs.png'
import prayagImg from './Images/headshots/prayag-hs.png'

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

const joshIntro = `I am a second-year student at UC Berkeley. I am passionate about engineering
and math and their applications in space. During my free time, I enjoy playing sports as well as creating art.
I welcome you to CalTutors and look forward to working with you! 
 `
const sohrabIntro = `Beginning in high school, I was always on the lookout for business ventures and
opportunities. Working with Josh, I focus on delivering the best customer experience as both a tutor and
marketer. I really enjoy playing soccer as well as spending time with my friends. Welcome to CalTutors!`
const danielIntro = `Hi! My name is Daniel, and I am a rising second-year. As I continued to 
master my writing skills through AP exams, college applications, and essays during my freshman year of college, 
I gained valuable insights into what can elevate a student’s writing from satisfactory to excellent. My main focus 
as your writing tutor is to ignite your intellectual fire, to give your writing ideas a deeper layer of nuance. 
Then, I will teach you how to execute these ideas with effective rhetoric. In my free time, I like to play 
pickleball and chess. I look forward to working with you!`

const samIntro = `Caltech studying Applied and Computational Math and Economics. AP Calc BC, AP Calc AB, Multi, 
AP Macro, AP Micro, AP Physics, AP Chem, SAT, college essays & writing.`

const thiernoIntro = `Hi! My name is Thierno and I study computer science at Caltech. I have a passion for building things and solving problems.
I really love helping others and I was the president at the first Black Student Union at Caltech. I look forward to working with you!`

const yonaIntro = `I'm an Electrical Engineering & Computer Science major at UC Berkeley, and I'm interested in law school. 
I tutor all subjects -- STEM, college essays, SAT/ACT, and English. I'm on the Cal Mock Trial team and I love hiking and nature. 
I grew up in Baltimore, Maryland, and I now live in Marin County, CA! `

const ivyIntro = 'I’m Ivy, a sophomore at Caltech pursuing a double major in Computer Science and Business Economics. I enjoy running and traveling in my free time, and I’m part of the Caltech track team, which I absolutely love! I offer tutoring in math (including SAT Math, AP Calculus AB and BC, Pre-Calc, and Algebra), Biology (AP Biology and Biology), coding (AP Computer Science A, AP Computer Science Principles, and Python or Java), and Economics (AP Micro and Macro).'

const skyeIntro = "Hi there! I'm Skye, a senior at Caltech with a passion for making learning enjoyable. I tutor all levels of math, including SAT/ACT prep, and specialize in college counseling to help students navigate the admissions process. In my free time, I love working out, going on hikes with my Doberman, Rio, and cooking! I look forward to working with you!"
const prayagIntro = `I graduated from Rice University in 2024 with a B.S. in statistics, a B.A. in mathematics, and a minor in data science. I'm currently a 
pre-doctoral economics research fellow at the Tobin Center for Economic Policy at Yale University. I also have extensive experience in journalism as a former 
data reporting fellow at The Washington Post and the outgoing editor-in-chief of Rice's student newspaper, The Thresher. As your tutor, we'll work together toward 
a deeper understanding of math, statistics, computer science, and more.`


const joshua = new tutor(josh, 'UC Berkeley | EECS + Applied Math', 'Joshua Zhou', 'College Math', joshIntro)
const sohrab = new tutor(rob, 'IVC | Economics', 'Sohrab Sadjadi', 'SAT/ACT Prep', sohrabIntro)
const daniel = new tutor(dan, 'UC Berkeley | Political Science + Data Science', 'Daniel Delpassand', 'Writing And Professional Development', danielIntro)
const yona = new tutor(yonaImg, 'UC Berkeley | EECS', 'Yonatan Paz-Priel', 'STEM and College Counseling', yonaIntro)
const skye = new tutor(skyeImg, 'Caltech | Computer Science', 'Skye Ruedas', 'College Courses and College Counseling', skyeIntro)
const ivy = new tutor(ivyImg, 'Caltech | Computer Sciences + Economics', 'Ivy Brainard', 'AP Calculus, AP Biology and Computer Science', ivyIntro)
const sam = new tutor(samImg, 'Caltech | Applied Math + Economics', 'Sam Mathews', 'College Math, Physics, and Chem', samIntro)
const thierno = new tutor(thiernoImg, 'Caltech | Computer Science', 'Thierno Diallo', 'Computer Science, Math, and English', thiernoIntro)
const prayag = new tutor(prayagImg, 'Rice Graduate | B.A. Mathematics, B.S. Statistics, Data Science Minor', 'Prayag Gordy', 'College Math', prayagIntro)

prayag.makeProfile();
skye.makeProfile()
sam.makeProfile()
joshua.makeProfile()
thierno.makeProfile()
ivy.makeProfile()
yona.makeProfile()
daniel.makeProfile()

//tutors
