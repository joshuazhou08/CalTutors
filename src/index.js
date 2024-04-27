import Logo from './Images/Logo Words.png'
import './Styling/reset.css'
import './Styling/style.css'
import './Styling/nav.css'
import './section.js'
import Cartoon1 from './Images/Cartoon1.png'
import Spirit from './Images/Spirit.jpg'
import {createSection} from './section.js'
import {createHomePage} from './home.js'
import Sohrab from './Images/Sohrab.png'

const logo = document.querySelector('#Logo')
logo.src = Logo


createHomePage();

const handPickedHeading = `Focusing On The <span class = "emphasis">Fundamentals</span>`

const handPickedTutors = `During my time in school, I've realized most students struggle in classes due to 
a lack of understanding of the fundamental 'whys' and 'hows' of math and science. Pure memorization of 
formulas only works for so long. With my lessons, I ensure you that your child will have a strong
grasp of the fundamentals to unlock their full potential.`

createSection(document.querySelector('#section1'), Cartoon1, handPickedHeading, handPickedTutors, '400px','275px')

const sohrabHeading = `Your <span class = "emphasis"> Reading </span> And <span class = "emphasis"> Writing </span> Tutor: Sohrab`

const sohrabPhilosophy = `I want to foster an environment for students to learn and grow and create an avenue for developing educational 
goals and skills. I believe bridging the gap between academic learning in school and more engaging practices focused to each specific 
student is key to success in the classroom. `

createSection(document.querySelector('#section2'), Sohrab, sohrabHeading, sohrabPhilosophy, '400px','275px', true)


const satisfactionHeading = `First 30 Minutes Free <span class = "emphasis"> #TeamSpirit </span>`
const satisfaction = `Your first 30 are on me. Client satisfaction is my first priority and open communication
is my strength. I'll keep you updated with schedules and concerns over email or phone. It is my goal for your
child to learn while also having fun. Sit back, relax, and watch your child shine! 
<span class = "emphasis">#TeamSpirit</span>`


createSection(document.querySelector('#section3'), Spirit, satisfactionHeading, satisfaction, '400px', '275px')
