import { createMarker } from './../components/marker'

const placeObjectOnGlobe = (name, lat, lon, radius) => {

  console.log('Place item on globe...')

    const object = createMarker(name, 0xff00ff)
  
    const latRad = lat * (Math.PI / 180)
    const lonRad = -lon * (Math.PI / 180)
    object.position.set(
      Math.cos(latRad) * Math.cos(lonRad) * radius,
      Math.sin(latRad) * radius,
      Math.cos(latRad) * Math.sin(lonRad) * radius
    )
    object.rotation.set(0.0, -lonRad, latRad - Math.PI * 0.5)

    return object
  }

  export { placeObjectOnGlobe }