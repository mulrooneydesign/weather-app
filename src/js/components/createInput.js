import { stringToHTML } from './stringToHTML'

export const createInput = (container, referenceNode, fetchFunction) => {
    const inputHtml = stringToHTML(`
    <div class="input-container">
      <label for="city">City</label>
      <input id="city" name="city" type="text" />
      <button id="submit">Check New City</button>
    </div>`)
  
    container.insertBefore(inputHtml, referenceNode)
  
    const button = document.querySelector('#submit')
    const input = document.querySelector('#city')
  
    button.addEventListener('click', (event) => {
      event.preventDefault()
      fetchFunction(input.value)
    })
  }
  