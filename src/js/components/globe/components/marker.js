import { SphereGeometry, MeshBasicMaterial, Mesh } from "three"

const createMarker = (name) => {
    const markerGeometry = new SphereGeometry(0.2, 8, 16)
    const markerMaterial = new MeshBasicMaterial({ color: 0xff0000 })
    return (name = new Mesh(markerGeometry, markerMaterial))
}

export { marker } 