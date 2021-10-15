import './globe.css'
import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/ResizerClass.js'
import { RenderLoop } from './systems/RenderLoop.js';

let camera
let renderer
let scene
let loop

class Globe {

  constructor(container) {

    loop = new RenderLoop()
    scene = createScene()
    camera = createCamera()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()
    scene.add(cube)

    const resizer = new Resizer(container, camera, renderer)
    
    resizer.onResize = () => {
      this.render()
    }
  }

  render() {
    renderer.render(scene, camera)
  }

}



export { Globe }
