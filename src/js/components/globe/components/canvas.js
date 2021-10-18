const createCanvasContainer = () => {

const container = document.querySelector('#app')
const exists = document.querySelector('.globe')

  if (exists) {
    return exists
  } else {


    const canvasContainer = document.createElement('div')
    canvasContainer.classList.add('globe')
    container.appendChild(canvasContainer)
    return canvasContainer
  }
}

export { createCanvasContainer }
