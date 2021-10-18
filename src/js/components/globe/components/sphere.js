import { SphereGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three'

const createSphere = (size, map, normalMap) => {
  const geometry = new SphereGeometry(size, 32, 16)
  const material = new MeshStandardMaterial({
    map: map,
    normalMap: normalMap,
  })
  const sphere = new Mesh(geometry, material)

  return sphere
}

export { createSphere }
