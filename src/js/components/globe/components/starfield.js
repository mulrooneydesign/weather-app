import { BufferGeometry, PointsMaterial, Points, BufferAttribute } from 'three'

const createStarfield = () => {

    //Starfield Geometry 
    const geometry = new BufferGeometry()
    const count = 1000
    const positions = new Float32Array(count * 3) // Multiply by 3 as composed of 3 values xyz

    //Create random xyz position for each item in the array
    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100
    }

    geometry.setAttribute('position', new BufferAttribute(positions, 3))

    const material = new PointsMaterial({
        size: 0.05,
        sizeAttenuation: true,
        transparent: true
    })

    const starfield = new Points(geometry, material)

  return starfield

}

export { createStarfield }
