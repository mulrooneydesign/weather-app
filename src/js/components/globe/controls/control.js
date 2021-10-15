import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const createControls = (camera, domElement) => {

  const controls = new OrbitControls(camera, domElement)
  controls.enableZoom = false

  return controls
}

export { createControls }
