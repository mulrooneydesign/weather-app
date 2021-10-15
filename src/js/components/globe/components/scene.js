import { Color, Scene } from 'three'

const createScene = () => {
  const scene = new Scene()
  scene.background = new Color('black')
  return scene
}

export { createScene }
