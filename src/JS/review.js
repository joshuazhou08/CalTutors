import five from './Images/reviews/5.png'
import '../Styling/review.css'

let reviewNum = 0

function addReview (stars, name, position, review, number=reviewNum){
    const wrapper = document.querySelector('#testWrapper')
    const reviewBody = document.createElement('div') 
    reviewBody.classList.add('animatedHover')

    reviewBody.id = `review-${number}`
    wrapper.appendChild(reviewBody)

    const starsImg = document.createElement('img')
    starsImg.src = stars
    starsImg.style.width = '100px'
    reviewBody.appendChild(starsImg)

    const reviewer = document.createElement('h2')
    reviewer.textContent = name
    reviewBody.appendChild(reviewer)

    const positionText =document.createElement('h4')
    positionText.textContent = position
    reviewBody.appendChild(positionText)

    const body = document.createElement('em')
    body.textContent = review
    reviewBody.appendChild(body)

    reviewNum += 1
    return
}

const Syona = `I think that Lumina helped me a lot in terms of reviewing some of the topics that I struggled 
with in both physics and math so I feel more prepared to take the AP exams for Calculus BC and Physics 1. I 
would definitely recommend him as a tutor and give him a 5 rating!`

const Justine = `Great tutor very patient.`

const IsabellaMaria = `Lumina was super helpful! The tutor I was assigned with was very patient and focuses on the foundational 
theories involved in solving a problem so I would be able to understand the topic better as a whole. I 
highly recommend working with Lumina.`

const Jacob = `Lumina has great tutors who take the time to explain every step intricately when solving problems. 
They listen to what you say and explain what your problems are. They are very flexible overall. I would 
definitely recommend Lumina to anybody who needs help in math.`

const Preston = `Joshua is a super math teacher. He is busy himself but he always trying his 
best to work with our schedule. He is patient, caring and fun. He does not just teach but also goes beyond 
the textbook just to make sure students get the big picture. It is rare to find a teacher like this anywhere 
these days. My kids are lucky to have Joshua as their math teacher`

const Nova = `I highly recommend Joshua as a tutor. Despite our initial preference for in-person tutoring, 
his online method proved effective for my daughter's math needs. Joshua's approach helped my shy daughter 
feel comfortable, and she even found him to be a better teacher than her school instructor. He quickly covered 
all the necessary material in a short time frame, showing exceptional responsiveness, reliability, and strategic 
planning. His prompt replies to questions and punctuality were crucial, given the last-minute task asked of him..`

addReview(five, 'Syona Dalal', 'student', Syona)
addReview(five, 'Nova Huang', 'parent', Nova)
addReview(five, 'Isabella Maria', 'student', IsabellaMaria)
addReview(five, 'Justine Ruedas', 'student', Justine)
addReview(five, 'Jacob Shabanie', 'student', Jacob)
addReview(five, 'Chih-Yi', 'parent', Preston)
