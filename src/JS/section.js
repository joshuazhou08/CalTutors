import '../Styling/section.css'

const main = document.querySelector('main')

function createSection(section, imageURL, headingText, bodyText, flipped = false){
    section.style.margin = '24px'
    section.classList.add('section')

    const textWrapper = document.createElement('div')
    textWrapper.classList.add('wrapper')
    textWrapper.classList.add('animatedHover')
    section.appendChild(textWrapper)

    const heading = document.createElement('h1')
    heading.innerHTML = headingText
    heading.classList.add('foundersH')
    textWrapper.appendChild(heading)

    const body = document.createElement('p')
    body.innerHTML = bodyText
    body.classList.add('bodyText')
    body.style.fontWeight = 200
    body.style.fontFamily = "FoundersBold, serif"

    textWrapper.appendChild(body)

    const img = document.createElement('img')
    img.src = imageURL
    img.style.borderRadius = "15px"
    img.classList.add('animatedHover')
    section.appendChild(img)

    if (flipped) {
        section.style.flexDirection = 'row-reverse'
    }
    console.log('ran')
}

export {createSection}