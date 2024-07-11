import '../Styling/reset.css'
import '../Styling/style.css'
import '../Styling/nav.css'
import '../Styling/footer.css'
import '../Styling/home.css'
import './section.js'
import Cartoon1 from './Images/Cartoon1.png'
import Spirit from './Images/Spirit.jpg'
import {createSection} from './section.js'
import Companile from './Images/companile.jpeg'
import Video from '../Videos/tutoring.mp4'
import arrow from './Images/arrow.jpeg'
import BookBackground from './Images/BookBackground.png'
import './review.js'
import './nav_footer.js'
import './fadeEffect.js'

let i = 0;
function typeSentence(sentence, eleRef, delay = 1000) {
    const letters = sentence.split("");
    eleRef.append(letters[i]);
    if (i < sentence.length - 1){
        i = i+1;
        setTimeout(()=>typeSentence(sentence, eleRef, delay), delay);
    }
    return;
  }


//Hero Section

//const heroImage = document.querySelector('#hero-img')

//heroImage.src = hero

//Lumina Type In Effect
const lum = document.querySelector('#LUMINA')

document.addEventListener("DOMContentLoaded", ()=>{
    typeSentence('LUMINA', lum, 150);
  }
)


//About section
const handPickedHeading = `Our Teaching <span class = "emphasis"> Philosophy </span>`

const handPickedTutors = `Our focus is on the <span class = "emphasis">fundamentals</span>. Having experienced the same, we have realized most students struggle in classes due to 
a lack of understanding of the fundamental 'whys' and 'hows' of harder subjects. Pure memorization of 
concepts only works for so long. Here at Lumina, we want students to have a strong
grasp of the fundamentals to unlock their full potential.`

createSection(document.querySelector('#section1'), Cartoon1, handPickedHeading, handPickedTutors,)

const sohrabHeading = `Students <span class = "emphasis"> For </span> Students`

const sohrabPhilosophy = `We practice what we preach. Our tutoring service connects you with students who have successfully walked the path you're on. Benefit from one-on-one mentorship with those who sincerely understand and have achieved the success you seek.`

createSection(document.querySelector('#section2'), Companile, sohrabHeading, sohrabPhilosophy, true)


const satisfactionHeading = `First 30 Minutes Free <span class = "emphasis"> #TeamSpirit </span>`
const satisfaction = `Your first 30 are on us. Client satisfaction is our first priority and open communication
is our strength. We'll keep you updated with schedules and concerns over email or phone. It is our goal for your
child to learn while also having fun. Sit back, relax, and watch your child shine! 
<span class = "emphasis">#TeamSpirit</span>`


createSection(document.querySelector('#section3'), Spirit, satisfactionHeading, satisfaction)

document.querySelector('video > source').src = Video

//Review section scroll code
const scrollLeftBtn = document.querySelector('.scroll-left')
const scrollRightBtn = document.querySelector('.scroll-right')
const testimonials = document.querySelector('#testWrapper')

scrollLeftBtn.src = arrow
scrollRightBtn.src = arrow

scrollLeftBtn.addEventListener('click', ()=>{
    testimonials.scrollLeft -= 450
    console.log('click left')
})

scrollRightBtn.addEventListener('click', ()=>{
    testimonials.scrollLeft += 450
    console.log('click right')
})

/*Book Free Section*/
document.querySelector('#bookFree').style.backgroundImage = `url(${BookBackground})`
const scheduleNow = document.querySelector("#schedule")
scheduleNow.addEventListener('click', ()=>{
    window.open('https://calendly.com/luminoustutor/30min')
})

