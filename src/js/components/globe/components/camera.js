import { PerspectiveCamera } from 'three'

const createCamera = () => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0, 0, 10)

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //Maybe need another listener for this
    // // Update renderer
    // renderer.setSize(sizes.width, sizes.height)
    // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  return camera
}

export { createCamera }
