import { stringToHTML } from './stringToHTML'
import {createMessage} from './createMessage'

export const createInput = (container, referenceNode, fetchFunction) => {
    const inputHtml = stringToHTML(`
    <div class="input-container">
      <div class="input-grid-item">
        <label for="city">City</label>
        <input id="city" name="city" type="text" placeholder="Enter a city" />
      </div>
      <div class="input-grid-item">
        <button id="submit">Add City</button>
      </div>
    </div>`)
  
    container.insertBefore(inputHtml, referenceNode)
  
    const button = document.querySelector('#submit')
    const input = document.querySelector('#city')
  
    button.addEventListener('click', (event) => {
      event.preventDefault()

      createMessage(container, null, 'Searched results returned.')

      const errorMessage = "You must enter a city name you wish to search for"

      if(input.value !== '') {
        fetchFunction(input.value)
      } else {
        createMessage(container, null, errorMessage)
      }
    })
  }
  