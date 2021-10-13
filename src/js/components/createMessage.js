import { stringToHTML } from './stringToHTML'

export const createMessage = (container, referenceNode, message) => {

    const exists = document.querySelector('.message')

    if(exists) {
        exists.remove()
    }

    const inputHtml = stringToHTML(`
    <div class="message">
        <p>${message}</p>
        <button class="close">Close</button>
    </div>`)

    container.insertBefore(inputHtml, referenceNode)

    const setMessage = (text) => {
        const message = document.querySelector('.message')
        message.children[0].innerText= text
    }

    if(message) {
        setMessage(message)
    } else {
        setMessage('Not found')
    }
  
    const button = document.querySelector('.close')
    
    button.addEventListener('click', (event) => {
        event.preventDefault()
        event.target.parentElement.classList.add('removeMessage')

        setTimeout(() => {
            event.target.parentElement.remove()
        }, 1000)
    })
 
}
