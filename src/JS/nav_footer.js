import Logo from './Images/Logo Words.png'
import MenuIcon from './Images/Menu.png'
import TikTok from './Images/TikTok.png'
import favicon from './Images/favicon.png'

//Favicon
const icon = document.querySelector('#favicon')
icon.href = favicon
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

const contactButton = document.querySelector('#contact')
contactButton.addEventListener('click', () => {
    window.open('https://forms.gle/uR35Wb4gU7EknXgn7')
})

const embarkButton = document.querySelector('#embark')

embarkButton.addEventListener('click', ()=>{
    window.open('https://calendly.com/luminoustutor/1-hour-session')
})


//Footer
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
    window.open('mailto:luminatutor@gmail.com')
})


const Tiktok = document.querySelector('#TikTok')

Tiktok.addEventListener('click', () =>{
    window.open('https://www.tiktok.com/@joshuatutoring')
})