import "./nav_footer.js";
import "../Styling/reset.css";
import "../Styling/style.css";
import "../Styling/nav.css";
import "../Styling/footer.css";
import "../Styling/about.css";
import "./section.js";
import aboutHeroImg from "./Images/About Hero.png";
import josh from "./Images/headshots/josh-hs.png";
import samImg from "./Images/headshots/sam-hs.png";
import skyeImg from "./Images/headshots/skye.png";
import ivyImg from "./Images/headshots/ivy-hs.png";
import prayagImg from "./Images/headshots/prayag-hs.png";
import robertImg from "./Images/headshots/robert-hs.png";
import pearlImg from "./Images/headshots/pearl-hs.png";
import bryanImg from "./Images/headshots/bryan-hs.png";
import elleImg from "./Images/headshots/elle-hs.png";
import michaelImg from "./Images/headshots/michael-hs.png";
import jonayetImg from "./Images/headshots/jonayet-hs.png";
import aidanImg from "./Images/headshots/aidan-hs.png";
import leaImg from "./Images/headshots/lea-hs.png";
import tigistImg from "./Images/headshots/tigist-hs.png";
import jaidynImg from "./Images/headshots/jaidyn-hs.png";
import ishaImg from "./Images/headshots/isha-hs.png";
import fridaImg from "./Images/headshots/frida-hs.png";
import rohanImg from "./Images/headshots/rohan-hs.png";

class tutor {
  static OurTutors = document.querySelector("#tutors");
  constructor(img, major, name, position, intro) {
    this.img = img;
    this.major = major;
    this.name = name;
    this.position = position;
    this.intro = intro;
  }
  makeProfile() {
    let clicked = 0;

    const container = document.createElement("div");
    container.style.position = "relative";

    const profileImg = document.createElement("img");
    profileImg.src = this.img;

    const maj = document.createElement("p");
    maj.classList.add("major");
    maj.textContent = this.major;

    const person = document.createElement("h2");
    person.textContent = this.name;
    person.style.fontWeight = 1000;

    const pos = document.createElement("h4");
    pos.textContent = this.position;

    container.appendChild(profileImg);
    container.appendChild(maj);
    container.appendChild(person);
    container.appendChild(pos);

    const about = document.createElement("p");
    about.textContent = this.intro;
    about.classList.add("about-me");

    container.appendChild(about);

    about.addEventListener("mouseenter", () => {
      profileImg.style.opacity = 0.4;
      maj.style.opacity = 0;
      person.style.opacity = 0;
      pos.style.opacity = 0;
      about.style.opacity = 1;
    });
    about.addEventListener("mouseleave", () => {
      profileImg.style.opacity = 1;
      maj.style.opacity = 1;
      person.style.opacity = 1;
      pos.style.opacity = 1;
      about.style.opacity = 0;
    });

    //For Mobile Devices
    container.addEventListener("touchstart", () => {
      if (!clicked) {
        profileImg.style.opacity = 0.4;
        maj.style.opacity = 0;
        person.style.opacity = 0;
        pos.style.opacity = 0;
        about.style.opacity = 1;
        clicked = 1;
      } else {
        profileImg.style.opacity = 1;
        maj.style.opacity = 1;
        person.style.opacity = 1;
        pos.style.opacity = 1;
        about.style.opacity = 0;
        clicked = 0;
      }
    });
    tutor.OurTutors.appendChild(container);
  }
}
//hero
const aboutHero = document.querySelector("#about-hero");
aboutHero.src = aboutHeroImg;

//team

const joshIntro = `Hi there! I’m Joshua, a second-year student at UC Berkeley and cofounder of CalTutors. Skye and I started this tutoring business to share our passion for STEM and provide students with personalized support from some of the brightest minds at top universities. I am passionate about engineering and math and their applications in space. During my free time, I enjoy playing sports as well as creating art. I welcome you to CalTutors and look forward to working with you!`;
const jonayetIntro = `Hi, I am Jonayet, a senior at Caltech majoring in Computer Science. I attended the Bronx High School of Science in NYC, which is known for having the most Nobel Laureates among high schools worldwide. Attending a rigorous high school and navigating the application process to over 35 colleges through Common App and QuestBridge has equipped me with the skills and confidence to teach high school math and computer science at any level, provide academic writing guidance, and offer insights into college counseling. During my free time, I enjoy binging shows, working out, and driving.`;

const samIntro = `I’m Sam, a Caltech student majoring in Applied and Computational Math and Economics. I specialize in tutoring advanced math subjects like AP Calculus AB/BC and Multivariable Calculus, as well as AP Macroeconomics, AP Microeconomics, AP Physics, and AP Chemistry. I also offer guidance on SAT preparation, college essays, and writing. My goal is to help students build confidence and master challenging material with ease. I look forward to working with you!`;
const ivyIntro =
  "I’m Ivy, a sophomore at Caltech pursuing a double major in Computer Science and Business Economics. I enjoy running and traveling in my free time, and I’m part of the Caltech track team, which I absolutely love! I offer tutoring in math (including SAT Math, AP Calculus AB and BC, Pre-Calc, and Algebra), Biology (AP Biology and Biology), coding (AP Computer Science A, AP Computer Science Principles, and Python or Java), and Economics (AP Micro and Macro).";
const skyeIntro =
  "Hello and welcome! I'm Skye, a senior at Caltech and cofounder of CalTutors. I founded this tutoring business to provide students with access to top-quality education, ensuring learning is both effective and enjoyable. I tutor all levels of math, including SAT/ACT prep, and specialize in college counseling to help students navigate the admissions process with confidence. In my free time, I love working out, going on hikes with my Doberman, Rio, and cooking! I look forward to working with you!";
const prayagIntro = `Hi! I’m Prayag. I graduated from Rice University in 2024 with a B.S. in statistics, a B.A. in mathematics, and a minor in data science. I'm currently a pre-doctoral economics research fellow at the Tobin Center for Economic Policy at Yale University. I also have extensive experience in journalism as a former data reporting fellow at The Washington Post and the outgoing editor-in-chief of Rice's student newspaper, The Thresher. As your tutor, we'll work together toward a deeper understanding of math, statistics, computer science, and more.`;
const robertIntro = `Hi there! I’m Robert, a junior at Caltech majoring in Physics. I have experience tutoring and participating in programs like Rise Tutor and the CTLO Summer Outreach Program. I specialize in tutoring Physics, Algebra, and Calculus, and I also provide guidance for SAT/ACT Math prep.`;
const pearlIntro = `Hi! I am a Computer Science major at the California Institute of Technology. I also find Geology and Planetary Science interesting, and have done research exploring the intersections between Computer Science and those fields. I really love teaching others, taking care of my plants, running, listening to music, and art.  
`;
const bryanIntro = `Hi! My name is Bryan Tran and I am a sophomore at UC Berkeley studying Integrative Biology with an emphasis in Human Biology. I am on the premed track interested in becoming a future cardiologist. In my free time I enjoy climbing, cafe hopping and listening to music!`;
const elleIntro = `Hi! I am a sophomore at UC Berkeley studying statistics and economics. I have a passion for teaching and have 3 years of teaching and tutoring experience. I tutor all levels of high school math, including the math section of the SAT. In my free time I like to hike and read. I look forward to working with you!`;
const michaelIntro = `I’m Michael, a sophomore at Caltech majoring in Computer Science and Mathematics. I am interested in quantitative analysis and software engineering. I'm passionate about solving complex problems and sharing my knowledge with others. In my free time, I enjoy photography, traveling, hiking, and exploring the outdoors.`;
const aidanIntro = `Hello, my name is Aidan Christie and I’m a Chemistry Learning Assistant for my Chemistry Professor at UC Berkeley, and I’m looking to assist in your learning as well! I tutor Chemistry and Biology, and scored a 5 on each AP test for AP Chem and AP Bio! Additionally, I’ve taken and succeeded in numerous college courses for Chemistry and Biology! I specialize in helping students achieve a conceptual understanding and intuition for chemical and biological topics to allow students to excel without cramming endless hours into studying! I am ready to teach, so reach out if you’re interested in my tutoring!`;
const leaIntro = `Hi, I'm a senior at Caltech majoring in Applied and Computational Mathematics with a minor in Computer Science. I'm also on the Track team where I run the 100m and 200m. In my free time I love doing puzzles, playing card games and baking. I tutor Math, Chemistry and CS.`;
const tigistIntro = `I am a bioengineering major, my personal professional goal is to work on projects that make patients experienced better in any way. I have done pharmaceutical internships, as well as many research fellowships throughout my professional life. I have been tutoring on my own for about 6 years, in all subjects. I love helping people understand and love science the way I do. `;
const jaidynIntro = `I graduated from a K-12 school in Tracy, California and now attend the California Institute of Technology.  I plan on majoring in either biology or biochemistry.  Some of my hobbies include dancing, playing board games, and cooking/baking!`;
const ishaIntro = `I am a sophomore at the California Institute of Technology, and I am double-majoring in Computer Science and Business, Economics, and Management. I am in Fleming House and I am originally from Northern California (Bay Area). I am on Caltech's NCAA DIII track and field team, as well as assistant social director of the student government (ASCIT). I am really passionate about computer science and math and creating safe, responsible technology!`;
const fridaIntro = `I am a student at Caltech studying Computer Science with a strong interest in tutoring subjects such as chemistry, calculus, and various high school-level courses. Outside of academics, I enjoy hobbies like sewing, crochet, and trail running.`;
const rohanIntro = `I am a Caltech senior majoring in computation and neural systems. I love to hang out with friends, go to concerts, and try new food. I also enjoy lifting daily and swimming occasionally.`;

const joshua = new tutor(
  josh,
  "UC Berkeley | EECS + Applied Math",
  "Joshua Zhou",
  "College Math",
  joshIntro
);
const skye = new tutor(
  skyeImg,
  "Caltech | Computer Science",
  "Skye Ruedas",
  "College Courses and College Counseling",
  skyeIntro
);
const ivy = new tutor(
  ivyImg,
  "Caltech | Computer Sciences + Economics",
  "Ivy Brainard",
  "AP Calculus, AP Biology and Computer Science",
  ivyIntro
);
const sam = new tutor(
  samImg,
  "Caltech | Applied Math + Economics",
  "Sam Mathews",
  "College Math, Physics, and Chem",
  samIntro
);
const prayag = new tutor(
  prayagImg,
  "Rice Graduate | Math + Statistics",
  "Prayag Gordy",
  "College Math",
  prayagIntro
);
const robert = new tutor(
  robertImg,
  "Caltech | Physics",
  "Robert Morgan III",
  "Physics, Calculus, Algebra",
  robertIntro
);
const pearl = new tutor(
  pearlImg,
  "Caltech | Computer Science",
  "Pearl Oyewole",
  "AP Computer Science, Chemistry, Calculus",
  pearlIntro
);
const bryan = new tutor(
  bryanImg,
  "UC Berkeley | Integrative Biology",
  "Bryan Tran",
  "College Chemistry, Biology, and Physics",
  bryanIntro
);
const elle = new tutor(
  elleImg,
  "UC Berkeley | Statistics and Economics",
  "Elle Fitzsimmons",
  "AP Calculus and High School Math",
  elleIntro
);
const michael = new tutor(
  michaelImg,
  "Caltech | Computer Science and Math",
  "Michael Girma",
  "Calculus",
  michaelIntro
);
const jonayet = new tutor(
  jonayetImg,
  "Caltech | Computer Science",
  "Jonayet Lavin",
  "High School Math",
  jonayetIntro
);
const aidan = new tutor(
  aidanImg,
  "UC Berkeley | Premed",
  "Aidan Christie",
  "Chemistry and Biology",
  aidanIntro
);
const lea = new tutor(
  leaImg,
  "Caltech | Applied Computational Mechanics + CS",
  "Lea Grohmann",
  "Chemistry, Math, and CS",
  leaIntro
);
const tigist = new tutor(
  tigistImg,
  "Caltech | Bioengineering",
  "Tigist Terefe",
  "STEM and History",
  tigistIntro
);
const jaidyn = new tutor(
  jaidynImg,
  "Caltech | Biology",
  "Jaidyn Woods",
  "STEM",
  jaidynIntro
);
const isha = new tutor(
  ishaImg,
  "Caltech | CS + Business Management",
  "Isha Goswami",
  "Math, Physics, and CS",
  ishaIntro
);
const frida = new tutor(
  fridaImg,
  "Caltech | Computer Science",
  "Frida Moreno",
  "STEM",
  fridaIntro
);
const rohan = new tutor(
  rohanImg,
  "Caltech | Computation and Neural Systems",
  "Rohan Kolhe",
  "STEM",
  rohanIntro
);
joshua.makeProfile();
skye.makeProfile();
prayag.makeProfile();
frida.makeProfile();
pearl.makeProfile();
sam.makeProfile();
ivy.makeProfile();
elle.makeProfile();
aidan.makeProfile();
michael.makeProfile();
lea.makeProfile();
robert.makeProfile();
tigist.makeProfile();
rohan.makeProfile();
bryan.makeProfile();
isha.makeProfile();
jonayet.makeProfile();
jaidyn.makeProfile();
