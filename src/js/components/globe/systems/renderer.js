import { WebGLRenderer } from 'three'

const createRenderer = () => {
  
  const renderer = new WebGLRenderer()
  return renderer
}

export { createRenderer }
