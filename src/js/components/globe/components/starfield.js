import { BufferGeometry, PointsMaterial, Points, BufferAttribute } from 'three'

const createStarfield = () => {

    //Starfield Geometry 
    const geometry = new BufferGeometry()
    const count = 450
    const positions = new Float32Array(count * 3) // Multiply by 3 as composed of 3 values xyz

    //Create random xyz position for each item in the array
    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10
    }

    geometry.setAttribute('position', new BufferAttribute(positions, 3))

    const material = new PointsMaterial({
        size: 0.01,
        sizeAttenuation: true
    })

    const starfield = Points(geometry, material)

  return starfield
}

export { createStarfield }
