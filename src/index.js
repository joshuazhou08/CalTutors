import './Styling/reset.css'
import './Styling/style.css'
import './Styling/nav.css'
import './Styling/footer.css'
import './section.js'
import Cartoon1 from './Images/Cartoon1.png'
import Logo from './Images/Logo Words.png'
import MenuIcon from './Images/Menu.png'
import Spirit from './Images/Spirit.jpg'
import {createSection} from './section.js'
import {createHomePage} from './home.js'
import Sohrab from './Images/Sohrab.png'
import BookBackground from './Images/BookBackground.png'
import TikTok from './Images/TikTok.png'
import arrow from './Images/arrow.jpeg'
import './review.js'



//NavBar stuff

const menuButton = document.querySelector('#menu-button')
menuButton.src = MenuIcon

const logo = document.querySelector('#Logo')
logo.src = Logo

const navMenu = document.querySelector('#slim-nav')

menuButton.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.toggle('active')
})

const embarkButton = document.querySelector('#embark')

embarkButton.addEventListener('click', ()=>{
    document.querySelector('#bookFree').scrollIntoView(false, {behavior: "smooth"});
})

//Hero Section

createHomePage();


//About section
const handPickedHeading = `Your <span class = "emphasis">STEM </span> Tutor: Joshua`

const handPickedTutors = `My focus is on the <span class = "emphasis">Fundamentals</span>. During my time in school, I've realized most students struggle in classes due to 
a lack of understanding of the fundamental 'whys' and 'hows' of math and science. Pure memorization of 
formulas only works for so long. With my lessons, I ensure you that your child will have a strong
grasp of the fundamentals to unlock their full potential.`

createSection(document.querySelector('#section1'), Cartoon1, handPickedHeading, handPickedTutors,)

const sohrabHeading = `Your <span class = "emphasis"> Reading </span> And <span class = "emphasis"> Writing </span> Tutor: Sohrab`

const sohrabPhilosophy = `I want to foster an environment for students to learn and grow and create an avenue for developing educational 
goals and skills. I believe bridging the gap between academic learning in school and more engaging practices focused to each specific 
student is key to success in the classroom. `

createSection(document.querySelector('#section2'), Sohrab, sohrabHeading, sohrabPhilosophy, true)


const satisfactionHeading = `First 30 Minutes Free <span class = "emphasis"> #TeamSpirit </span>`
const satisfaction = `Your first 30 are on us. Client satisfaction is our first priority and open communication
is our strength. We'll keep you updated with schedules and concerns over email or phone. It is our goal for your
child to learn while also having fun. Sit back, relax, and watch your child shine! 
<span class = "emphasis">#TeamSpirit</span>`


createSection(document.querySelector('#section3'), Spirit, satisfactionHeading, satisfaction)

//Review section scroll code
const scrollLeftBtn = document.querySelector('.scroll-left')
const scrollRightBtn = document.querySelector('.scroll-right')
const testimonials = document.querySelector('#testWrapper')

scrollLeftBtn.src = arrow
scrollRightBtn.src = arrow

scrollLeftBtn.addEventListener('click', ()=>{
    testimonials.scrollLeft -= 450
})

scrollRightBtn.addEventListener('click', ()=>{
    testimonials.scrollLeft += 450
})

/*Book Free Section*/
document.querySelector('#bookFree').style.backgroundImage = `url(${BookBackground})`
const scheduleNow = document.querySelector("#schedule")
scheduleNow.addEventListener('click', ()=>{
    window.open('https://calendly.com/joshuazhou/30min')
})

/*
const footerImage = document.querySelector('footer img')
footerImage.src = LogoImg
footerImage.style.width = '200px'
footerImage.style.filter = 'brightness(0.5)' */


/*Footer stuff*/
document.querySelector('#TikTok').src = TikTok

const Instagram = document.querySelector('#social-icons li:nth-child(1) svg')

Instagram.addEventListener('click', () =>{
    window.open('https://www.instagram.com/joshuatutoring/')
})

const GMAIL = document.querySelector('#social-icons li:nth-child(2)>svg')
GMAIL.addEventListener('click', () =>{
    window.open('mailto:joshuazhou@berkeley.edu?')
})


const Tiktok = document.querySelector('#TikTok')

Tiktok.addEventListener('click', () =>{
    window.open('https://www.tiktok.com/@joshuatutoring')
})