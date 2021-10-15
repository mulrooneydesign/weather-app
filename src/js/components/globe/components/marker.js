import { SphereGeometry, MeshBasicMaterial, Mesh } from "three"

const createMarker = (name, color) => {
    console.log(color)
    const markerGeometry = new SphereGeometry(0.05, 8, 2)
    const markerMaterial = new MeshBasicMaterial({ color: color })
    return (name = new Mesh(markerGeometry, markerMaterial))
}

export { createMarker } 