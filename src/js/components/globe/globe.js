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
import { createMarker } from './components/marker'

//  Coordinates
const coords = {
  barcelona: {
    longitude: 2.159,
    latitude: 41.3888,
  },
  dublin: { //coords returned from API are different. Possible returning diffrent Dublin in USA. 
    longitude: -6.266,
    latitude: 53.35,
  },
  madrid: {
    longitude: -3.7026,
    latitude: 40.4165,
  },
  sydney: {
    longitude: 151.207,
    latitude: -33.8679,
  },
}

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

  constructor(container) {  
 
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

    //Add makers to Globe (object, lat, lon, radius)
    const barcelonaMarker = createMarker('barcelona', 0x0000ff)
    const barcelona = placeObjectOnGlobe(barcelonaMarker, coords.barcelona.latitude, coords.barcelona.longitude, 5)

    const dublinMarker = createMarker('dublin', 0xff0000)
    const dublin = placeObjectOnGlobe(dublinMarker, coords.dublin.latitude, coords.dublin.longitude, 5)
    console.log(dublinMarker, coords.dublin.latitude, coords.dublin.longitude)

    const madridMarker = createMarker('madrid', 0xffff00)
    const madrid = placeObjectOnGlobe(madridMarker, coords.madrid.latitude, coords.madrid.longitude, 5)

    const sydneyMarker = createMarker('sydney', 0xffff00)
    const sydney = placeObjectOnGlobe(sydneyMarker, coords.sydney.latitude, coords.sydney.longitude, 5)

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
