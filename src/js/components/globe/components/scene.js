import { Color, Scene } from 'three'

const createScene = () => {
  const scene = new Scene()
  scene.background = new Color('green')
  return scene
}

export { createScene }
