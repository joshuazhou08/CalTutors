import Logo from './Images/Logo Words.png'
import './Styling/reset.css'
import './Styling/style.css'
import './Styling/nav.css'
import './section.js'
import Cartoon1 from './Images/Cartoon1.jpeg'
import {createSection} from './section.js'
import {createHomePage} from './home.js'
const logo = document.querySelector('#Logo')
logo.src = Logo


createHomePage();

const handPickedTutors = `We're really fussy about who gets to be a tutor on our site - only 1 in 10 applicants 
make it through. They're pros in over 30 subjects, from Elementary to College and SAT level. Having studied 
or currently studying at the top universities in the US, they've mastered the same stuff your teen is tackling. 
So, they break down tricky topics in a way that clicks for teens - plus, they're pretty cool role models too.`

const handPickedHeading = "Elite Tutors For $35/hour"

createSection(Cartoon1, handPickedHeading, handPickedTutors, false)
