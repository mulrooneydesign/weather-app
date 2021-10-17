import { stringToHTML } from './stringToHTML'
import { placeObjectOnGlobe } from './globe/systems/placeObjectOnGlobe'

export const createCity = (citiesArray, gridContainer) => {

  const exists = document.querySelector('.grid')

  if(exists) {
      exists.remove()
  }

  const newContainer = document.createElement('div')
  newContainer.classList.add('grid')
  console.log(newContainer)
  document.body.appendChild(newContainer)

  let theFirstChild = newContainer.firstChild

  citiesArray.forEach((city) => {
    const cityHtml = stringToHTML(`
    <div class="city-container">
      <h1>${city.city}</h1>
      <p><strong>Longitude:</strong> ${city.longitude}</p>
      <p><strong>Latitude:</strong> ${city.latitude}</p>
      <p><strong>Description:</strong> ${city.description}</p>
      <p><strong>Short Description:</strong> ${city.main}</p>
      <p><strong>Temperature Description:</strong> ${city.temperature}</p>
      <p><strong>Max Temperature:</strong> ${city.temperature_max}</p>
      <p><strong>Min Temperature:</strong> ${city.temperature_min}</p>
    </div>`)

    newContainer.insertBefore(cityHtml, theFirstChild)

    const lon = city.longitude
    const lat = city.latitude
    const name = city.city
    const radius = 5

    placeObjectOnGlobe(name, lon, lat, radius)

  });


}
