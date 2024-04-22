import Logo from './Images/Logo Words.png'
import './Styling/reset.css'
import './Styling/style.css'
import './Styling/nav.css'
import './section.js'
import Cartoon1 from './Images/Cartoon1.png'
import Spirit from './Images/Spirit.jpg'
import {createSection} from './section.js'
import {createHomePage} from './home.js'
import video from './Videos/tutoring.mp4'
const logo = document.querySelector('#Logo')
logo.src = Logo


createHomePage();

const handPickedHeading = "Focusing On The Fundamentals"

const handPickedTutors = `During my time in school, I've realized most students struggle in classes due to 
a lack of understanding of the fundamental 'whys' and 'hows' of math and science. Pure memorization of 
formulas only works for so long. With my lessons, I ensure you that your child will have a strong
grasp of the fundamentals to unlock their full potential.`

createSection(document.querySelector('#section1'), Cartoon1, handPickedHeading, handPickedTutors, '400px','250px')

const satisfactionHeading = "First 30 Minutes Free #TeamSpirit"
const satisfaction = `Your first 30 are on me. Client satisfaction is my first priority and open communication
is my strength. I'll keep you updated with schedules and concerns. Sit back, relax, and watch your child
learn! #TeamSpirit`


createSection(document.querySelector('#section2'), Spirit, satisfactionHeading, satisfaction, '400px', 'auto', true)
