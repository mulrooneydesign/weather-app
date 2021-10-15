const createCanvasContainer = () => {
    const container = document.createElement('div')
    container.classList.add('globe')
    document.body.appendChild(container)
    return container
}

export { createCanvasContainer }
    
  