import './Styling/section.css'


const main = document.querySelector('main')

function createSection(section, imageURL, headingText, bodyText, width = '400px', height = 'auto',flipped = false){
    section.style.margin = 'calc(24px + 0.5vw)'
    section.classList.add('section')

    const textWrapper = document.createElement('div')
    textWrapper.classList.add('wrapper')
    textWrapper.style.maxWidth = "400px"
    section.appendChild(textWrapper)

    const heading = document.createElement('h1')
    heading.textContent = headingText
    heading.style.fontFamily = "FoundersBold, serif"
    heading.style.fontWeight = '1000'
    heading.style.letterSpacing = '0.01px'
    heading.style.color = 'rgba(19, 31, 48, 1)'
    textWrapper.appendChild(heading)

    const body = document.createElement('p')
    body.textContent = bodyText
    body.style.fontWeight = 200
    body.style.fontSize = "calc(16px + 0.1vw)"
    body.style.fontFamily = "FoundersBold, serif"

    textWrapper.appendChild(body)

    const img = document.createElement('img')
    img.src = imageURL
    img.style.width = width
    img.style.height = height
    section.appendChild(img)

    if (flipped) {
        section.style.flexDirection = 'row-reverse'
    }
    console.log('ran')
}

export {createSection}