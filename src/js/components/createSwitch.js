import { stringToHTML } from './stringToHTML'
import { tempSwitcher } from './../app'

export const createSwitch = (parentContainer, referenceNode, isCelcius) => {
  let button = document.querySelector('#changeTemp')

  if (!button) {
    const buttonHTML = stringToHTML(
      `<button id="changeTemp">Change to F</button>`
    )
    parentContainer.insertBefore(buttonHTML, referenceNode)
    button = document.querySelector('#changeTemp')
  }

  button.addEventListener('click', (event) => {
    event.preventDefault()

    if (event.target.innerText === 'Change to F') {
      button.innerText = 'Change to C'
    } else {
      button.innerText = 'Change to F'
    }

    tempSwitcher()
  })
}
