import "../Styling/reset.css";
import "../Styling/style.css";
import "../Styling/nav.css";
import "../Styling/footer.css";
import "../Styling/home.css";
import "./section.js";
import Cartoon1 from "./Images/Cartoon1.png";
import Spirit from "./Images/Spirit.jpg";
import { createSection } from "./section.js";
import Companile from "./Images/companile.jpeg";
import arrow from "./Images/arrow.jpeg";
import BookBackground from "./Images/BookBackground.png";
import "./review.js";
import "./nav_footer.js";

function typeSentence(sentence, eleRef, delay = 1000) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      eleRef.append(sentence[i]);
    }, delay * i);
  }
  return;
}

const calendly = "https://calendly.com/caltutorsteam/30min";

//Hero Section

//const heroImage = document.querySelector('#hero-img')

//heroImage.src = hero

//Lumina Type In Effect
const cal = document.querySelector("#CAL");
const tutors = document.querySelector("#TUTORS");

document.addEventListener("DOMContentLoaded", () => {
  typeSentence("CAL", cal, 150);
  setTimeout(() => typeSentence("TUTORS", tutors, 150), 1000);
});

const freeFirstSession = document.querySelector("#get-started");
freeFirstSession.addEventListener("click", () => {
  window.open(calendly);
});

//About section
const handPickedHeading = `Our Teaching <span class = "emphasis"> Philosophy </span>`;

const handPickedTutors = `Our focus is on the <span class = "emphasis">fundamentals</span>. Having experienced the same, we have realized most students struggle in classes due to 
a lack of understanding of the fundamental 'whys' and 'hows' of harder subjects. Pure memorization of 
concepts only works for so long. Here at CalTutors, we want students to have a strong
grasp of the fundamentals to unlock their full potential.`;

createSection(
  document.querySelector("#section1"),
  Cartoon1,
  handPickedHeading,
  handPickedTutors
);

const sohrabHeading = ` Fast  <span class = "emphasis"> Responses </span>`;

const sohrabPhilosophy = `Our priority is you. Reach out and hear back from us within hours! Our tutoring service connects you with students who have
 successfully walked the path you're on. Benefit from one-on-one, personal mentorship with those who sincerely understand
  and have achieved the success you seek.`;

createSection(
  document.querySelector("#section2"),
  Companile,
  sohrabHeading,
  sohrabPhilosophy,
  true
);

const satisfactionHeading = `First 30 Minutes Free <span class = "emphasis"> #TeamSpirit </span>`;
const satisfaction = `Your first 30 are on us. Client satisfaction is our first priority and open communication
is our strength. We'll keep you updated with schedules and concerns over email or phone. It is our goal for your
child to learn while also having fun. Sit back, relax, and watch your child shine! 
<span class = "emphasis">#TeamSpirit</span>`;

createSection(
  document.querySelector("#section3"),
  Spirit,
  satisfactionHeading,
  satisfaction
);

//Review section scroll code
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");
const testimonials = document.querySelector("#testWrapper");

scrollLeftBtn.src = arrow;
scrollRightBtn.src = arrow;

scrollLeftBtn.addEventListener("click", () => {
  testimonials.scrollLeft -= 450;
  console.log("click left");
});

scrollRightBtn.addEventListener("click", () => {
  testimonials.scrollLeft += 450;
  console.log("click right");
});

/*Book Free Section*/
document.querySelector(
  "#bookFree"
).style.backgroundImage = `url(${BookBackground})`;
const scheduleNow = document.querySelector("#schedule");
scheduleNow.addEventListener("click", () => {
  window.open(calendly);
});
