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
    body.textContent = '"'+ review + '"'
    reviewBody.appendChild(body)

    reviewNum += 1
    return
}

const Syona = `I think that CalTutors helped me a lot in terms of reviewing some of the topics that I struggled 
with in both physics and math so I feel more prepared to take the AP exams for Calculus BC and Physics 1. I 
would definitely recommend him as a tutor and give him a 5 rating!`

const Rachel = `Great math tutor with a positive and bright attitude.
I had my first session with Skye and she made me feel very comfortable right away. 
She did her best to make sure I understood the concepts before moving on and explained everything in a way that was easy to understand. 
She has a very positive attitude, which makes her great to have as a tutor. I'm not the best at math or remembering things, so I needed a 
review and help with some new concepts I've been learning in class. I will definitely be booking more sessions with her in the future.`

const Justine = `Great tutor very patient.`

const Cary = `Skye helped put together a crash course to prep my daughter for a big test. Afterward, my daughter felt much more confident 
and informed. Great personality and a good teacher!`

const IsabellaMaria = `CalTutors was super helpful! The tutor I was assigned with was very patient and focuses on the foundational 
theories involved in solving a problem so I would be able to understand the topic better as a whole. I 
highly recommend working with CalTutors.`

const Praveen = `The most important aspect of finding a tutor is ensuring they are a good match for the student, and we were 
fortunate to find that with her. My son really enjoyed working with Skye. She has a great way of explaining concepts and keeping him engaged, 
which made a huge difference in his learning experience. Highly recommend her!`

const Jacob = `CalTutors has great tutors who take the time to explain every step intricately when solving problems. 
They listen to what you say and explain what your problems are. They are very flexible overall. I would 
definitely recommend CalTutors to anybody who needs help in math.`

const Claudia = `I just had my first lesson with Skye, and I’m impressed! She was well-prepared, professional, and very patient 
in explaining the material. In just one session, I feel like I have a much better understanding of the subject. Highly Recommended.`

const Preston = `Joshua is a super math teacher. He is busy himself but he always trying his 
best to work with our schedule. He is patient, caring and fun. He does not just teach but also goes beyond 
the textbook just to make sure students get the big picture. It is rare to find a teacher like this anywhere 
these days. My kids are lucky to have Joshua as their math teacher.`

const Nova = `I highly recommend Joshua as a tutor. Despite our initial preference for in-person tutoring, 
his online method proved effective for my daughter's math needs. Joshua's approach helped my shy daughter 
feel comfortable, and she even found him to be a better teacher than her school instructor. He quickly covered 
all the necessary material in a short time frame, showing exceptional responsiveness, reliability, and strategic 
planning. His prompt replies to questions and punctuality were crucial, given the last-minute task asked of him.`


addReview(five, 'Syona Dalal', 'student', Syona)
addReview(five, 'Rachel', 'student', Rachel)
addReview(five, 'Nova Huang', 'parent', Nova)
addReview(five, 'Isabella Maria', 'student', IsabellaMaria)
addReview(five, 'Praveen', 'student', Praveen)
addReview(five, 'Justine Ruedas', 'student', Justine)
addReview(five, 'Cary', 'parent', Cary)
addReview(five, 'Jacob Shabanie', 'student', Jacob)
addReview(five, 'Claudia', 'student', Claudia)
addReview(five, 'Chih-Yi', 'parent', Preston)
