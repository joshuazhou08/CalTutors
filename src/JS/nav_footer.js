import Logo from './Images/Logo Words.png'
import MenuIcon from './Images/Menu.png'
import favicon from './Images/favicon.ico'
import webIcon from './Images/websiteIco.png'

//Favicon
const icon = document.querySelector('#favicon')
icon.href = favicon

//Website icon
const websiteIcon = document.querySelector('#websiteIco')
websiteIcon.content = webIcon
//NavBar stuff
const menuButton = document.querySelector('#menu-button')
menuButton.src = MenuIcon

const logo = document.querySelector('#Logo')
logo.src = Logo

const navMenu = document.querySelector('#slim-nav')
const links = document.querySelectorAll('#slim-nav > li')


menuButton.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.toggle('active')
})

const contactButton = document.querySelector('#contact')
contactButton.addEventListener('click', () => {
    window.open('https://forms.gle/uR35Wb4gU7EknXgn7')
})

const embarkButton = document.querySelector('#embark')
const calendly = "https://calendly.com/caltutorsteam/30min"
embarkButton.addEventListener('click', ()=>{
    window.open(calendly)
})


//Footer
/*
const footerImage = document.querySelector('footer img')
footerImage.src = LogoImg
footerImage.style.width = '200px'
footerImage.style.filter = 'brightness(0.5)' */


/*Footer stuff*/

const Instagram = document.querySelector('#social-icons li:nth-child(1) svg')

Instagram.addEventListener('click', () =>{
    window.open('https://www.instagram.com/luminatutors/')
})

const GMAIL = document.querySelector('#social-icons li:nth-child(2)>svg')
GMAIL.addEventListener('click', () =>{
    window.open('mailto:caltutorsteam@gmail.com')
})

const Facebook = document.querySelector('#social-icons li:nth-child(3)>svg')
Facebook.addEventListener('click', () =>{
    window.open('https://www.facebook.com/profile.php?id=61562774625379&mibextid=LQQJ4d')
})


