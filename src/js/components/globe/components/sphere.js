import { SphereGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three'

const createSphere = (size, map, normalMap) => {
  const geometry = new SphereGeometry(size, 32, 16)
  const material = new MeshStandardMaterial({
    map: map,
    normalMap: normalMap,
  })
  const sphere = new Mesh(geometry, material)

  const radiansPerSecond = MathUtils.degToRad(30)

  // this method will be called once per frame
  sphere.tick = (delta) => {
    sphere.rotation.y -= radiansPerSecond * delta * 0.25
  }

  return sphere
}

export { createSphere }
