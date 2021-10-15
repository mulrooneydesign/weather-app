import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'three'

const createCube = () => {
  const geometry = new BoxBufferGeometry(2, 2, 2)
  const material = new MeshBasicMaterial({ color: 'red' })
  const cube = new Mesh(geometry, material)

  return cube
}

export { createCube }
