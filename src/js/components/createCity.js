import { stringToHTML } from "./stringToHTML"

export const createCity = (data, parentContainer) => {
    const cityHtml = stringToHTML(`
      <div class="city-container">
        <h1>${data.city}</h1>
        <p><strong>Longitude:</strong> ${data.longitude}</p>
        <p><strong>Latitude:</strong> ${data.latitude}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Short Description:</strong> ${data.main}</p>
        <p><strong>Temperature Description:</strong> ${data.temperature}</p>
        <p><strong>Max Temperature:</strong> ${data.temperature_max}</p>
        <p><strong>Min Temperature:</strong> ${data.temperature_min}</p>
      </div>`)
  
      parentContainer.insertBefore(cityHtml, null)
  }