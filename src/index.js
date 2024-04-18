import Logo from './Images/Logo Words.png'
import './Styling/reset.css'
import './Styling/style.css'
import './Styling/nav.css'
import {createHomePage} from './home.js'
const logo = document.querySelector('#Logo')
logo.src = Logo


createHomePage();

