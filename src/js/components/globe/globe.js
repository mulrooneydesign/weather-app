import './globe.css'
import { createCamera } from './components/camera'
import { createSphere } from './components/sphere'
import { createScene } from './components/scene'
import { createLight} from './components/light'
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/ResizerClass'
import { RenderLoop } from './systems/RenderLoop'
import { myLoadingManager} from './systems/myLoadingManager'
import { createControls } from './controls/control'
import { createGroup } from './components/group'
import { placeObjectOnGlobe } from './systems/placeObjectOnGlobe'

let camera
let renderer
let scene
let light 
let sphere
let loop
let loadedData
let controls
let group 

class Globe {

  constructor(container, coords) {  
 
    scene = createScene()
    camera = createCamera()
    renderer = createRenderer()
    light = createLight()

    loadedData = myLoadingManager()
    loop = new RenderLoop(camera, scene, renderer);

    container.append(renderer.domElement)
    
    //Controls 
    controls = createControls(camera, renderer.domElement)

    sphere = createSphere(5, loadedData.textures.earthColorTexture, loadedData.textures.earthNormalMap )

    const barcelona = placeObjectOnGlobe('barcelona', coords.barcelona.latitude, coords.barcelona.longitude, 5)
    const dublin = placeObjectOnGlobe('dublin', coords.dublin.latitude, coords.dublin.longitude, 5)
    const madrid = placeObjectOnGlobe('madrid', coords.madrid.latitude, coords.madrid.longitude, 5)
    const sydney = placeObjectOnGlobe('sydney', coords.sydney.latitude, coords.sydney.longitude, 5)

    //Array of items to add to the group
    const groupItems = [sphere, barcelona, dublin, madrid, sydney]
    group = createGroup(groupItems)
    scene.add(group)

    loop.updatables.push(group)
    scene.add(light)

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    };

  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}



export { Globe }
