import { WebGLRenderer } from 'three'

const createRenderer = () => {
  
  const renderer = new WebGLRenderer({ antialias: true })
  renderer.physicallyCorrectLights = true;
  return renderer
}

export { createRenderer }
