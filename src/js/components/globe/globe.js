import './globe.css'
import { createCamera } from './components/camera'
import { createSphere } from './components/sphere'
import { createScene } from './components/scene'
import { createLight } from './components/light'
import { createStarfield } from './components/starfield'
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/ResizerClass'
import { RenderLoop } from './systems/renderLoop'
import { createControls } from './controls/control'
import { createGroup } from './components/group'
import { placeObjectOnGlobe } from './systems/placeObjectOnGlobe'

let camera
let renderer
let scene
let light
let sphere
let loop
let controls
let group
let groupItems
let starfield

class Globe {
  constructor(container, data, loadedData) {
    scene = createScene()
    camera = createCamera()
    renderer = createRenderer()
    light = createLight()
    starfield = createStarfield()

    console.log(starfield)

    loop = new RenderLoop(camera, scene, renderer)

    container.append(renderer.domElement)

    //Controls
    controls = createControls(camera, renderer.domElement)

    sphere = createSphere(
      5,
      loadedData.textures.earthColorTexture,
      loadedData.textures.earthNormalMap
    )

    //Array of items to hold planet and markers
    groupItems = [sphere]

    data.forEach((cityMarker) => {
      const newMarker = placeObjectOnGlobe(
        cityMarker.city,
        cityMarker.latitude,
        cityMarker.longitude,
        5
      )
      groupItems.push(newMarker)
    })

    group = createGroup(groupItems)
    scene.add(group)

    loop.updatables.push(group)

    scene.add(starfield)
    scene.add(light)

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }

  update(data) {
    //push new city data to group
    data.forEach((cityMarker) => {
      const newMarker = placeObjectOnGlobe(
        cityMarker.city,
        cityMarker.latitude,
        cityMarker.longitude,
        5
      )
      group.add(newMarker)
      controls.update()
    })
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { Globe }
