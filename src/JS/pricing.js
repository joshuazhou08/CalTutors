import './nav_footer.js'
import '../Styling/reset.css'
import '../Styling/style.css'
import '../Styling/nav.css'
import '../Styling/footer.css'
import '../Styling/pricing.css'
import './section.js'
import venmoImg from './Images/venmo.jpg'

const venmo = document.querySelector('#venmo')
venmo.addEventListener('click', ()=> 
    {window.open('https://venmo.com/u/luminatutors')}
    
)

const venmoImage = document.querySelector('#venmoCode')
venmoImage.src = venmoImg;
venmoImage.style.width = 'max(700px, 50vw)'