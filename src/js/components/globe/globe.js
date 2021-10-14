import './globe.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const globeInit = () => {
  //texture
  const loadingManager = new THREE.LoadingManager()
  loadingManager.onStart = () => {
    console.log('On start')
  }

  loadingManager.onProgress = () => {
    console.log('On Progress')
  }

  loadingManager.onError = () => {
    console.log('Error')
  }

  loadingManager.onLoad = () => {
    console.log('Loading complete!')
  }

  const textureLoader = new THREE.TextureLoader(loadingManager)

  const earthColorTexture = textureLoader.load('./earth.jpg')

  /**
   * Base
   */
  // Canvas
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas);         
  console.log(canvas)

  // Scene
  const scene = new THREE.Scene()

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  )
  camera.position.z = 28
  scene.add(camera)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Animate
  const clock = new THREE.Clock()

  //Scene Contents
  ////////////////

  //Group
  const group = new THREE.Group()
  scene.add(group)

  //Globe
  const globeGeometry = new THREE.SphereGeometry(15, 32, 16)
//   const globeMaterial = new THREE.MeshBasicMaterial({ map: earthColorTexture })
  const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff })
  const globe = new THREE.Mesh(globeGeometry, globeMaterial)
  group.add(globe)

  //Marker
  const makeMarker = (name) => {
    const markerGeometry = new THREE.SphereGeometry(0.2, 8, 16)
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    return (name = new THREE.Mesh(markerGeometry, markerMaterial))
  }

  //Place object on globe surface
  function placeObjectOnGlobe(object, lat, lon, radius) {
    group.add(object)

    const latRad = lat * (Math.PI / 180)
    const lonRad = -lon * (Math.PI / 180)
    object.position.set(
      Math.cos(latRad) * Math.cos(lonRad) * radius,
      Math.sin(latRad) * radius,
      Math.cos(latRad) * Math.sin(lonRad) * radius
    )
    object.rotation.set(0.0, -lonRad, latRad - Math.PI * 0.5)
  }
  //Coordinates
  const coords = {
    barcelona: {
      longitude: 2.159,
      latitude: 41.3888,
    },
    dublin: {
      longitude: -121.9358,
      latitude: 37.7021,
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

  placeObjectOnGlobe(
    makeMarker('barcelona'),
    coords.barcelona.latitude,
    coords.barcelona.longitude,
    15
  )
  placeObjectOnGlobe(
    makeMarker('madrid'),
    coords.madrid.latitude,
    coords.madrid.longitude,
    15
  )

  placeObjectOnGlobe(
    makeMarker('sydney'),
    coords.sydney.latitude,
    coords.sydney.longitude,
    15
  )

  const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    //Rotate Group
    group.rotation.y -= 0.001

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}
