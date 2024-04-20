import './Styling/section.css'
import image from './Images/Cartoon1.jpeg'

const main = document.querySelector('main')
const section = document.createElement('section')
section.style.margin = 'calc(24px + 0.5vw)'
section.id = "section"
main.appendChild(section)

const textWrapper = document.createElement('div')
textWrapper.classList.add('wrapper')
textWrapper.style.maxWidth = "400px"
section.appendChild(textWrapper)

const heading = document.createElement('h1')
heading.textContent = "Elite Tutors For $35/hour"
heading.style.fontFamily = "FoundersBold, serif"
heading.style.fontWeight = '1000'
heading.style.letterSpacing = '0.01px'
textWrapper.appendChild(heading)

const body = document.createElement('p')
body.textContent = `We're really fussy about who gets to be a tutor on our site - only 1 in 10 applicants 
make it through. They're pros in over 30 subjects, from Elementary to College and SAT level. Having studied 
or currently studying at the top universities in the US, they've mastered the same stuff your teen is tackling. So, they break down tricky topics in a way that clicks for teens - plus, they're pretty cool role models too.`
body.style.fontWeight = 200
body.style.fontSize = "calc(16px + 0.1vw)"
body.style.fontFamily = "FoundersBold, serif"

textWrapper.appendChild(body)

const img = document.createElement('img')
img.src = image
img.style.width= '500px';
section.appendChild(img)