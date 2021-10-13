import { stringToHTML } from './stringToHTML'
import { tempSwitcher } from './../app'

export const createSwitch = (parentContainer, referenceNode) => {
  
  let button = document.querySelector('#changeTemp')

  if (!button) {
    const buttonHTML = stringToHTML(
      `<button id="changeTemp" class="switch-button">
        <span class='active'>°C</span>
        <span>°F</span>
      </button>`
    )

    parentContainer.insertBefore(buttonHTML, referenceNode)
    button = document.querySelector('#changeTemp')
  }

  button.addEventListener('click', (event) => {

    if (button.children[0].innerText=== '°C') {
      button.children[0].innerText = '°F'
      button.children[1].innerText = '°C'
      tempSwitcher()
    } else {
      button.children[0].innerText = '°C'
      button.children[1].innerText = '°F'
      tempSwitcher()
    }

  })
}