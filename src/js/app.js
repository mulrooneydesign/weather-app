import '../css/app.css'
import { temperatureScaleSelector } from './components/temperatureScaleSelector'
import { stringToHTML } from './components/stringToHTML'
import { createCity } from './components/createCity'
import { createInput } from './components/createInput'

const container = document.querySelector('#app')

const grid = stringToHTML(`<div class="grid"></div>`)
const gridContainer = container.insertBefore(grid, null)

const createDataObject = (data) => {
  let fetchedData = {
    city: data.name,
    longitude: data.coord.lon,
    latitude: data.coord.lat,
    description: data.weather[0].description,
    main: data.weather[0].main,
    temperature: data.main.temp,
    temperature_max: data.main.temp_max,
    temperature_min: data.main.temp_min,
  }

  return fetchedData
}



const getWeatherData = (cityName) => {
  const units = 'metric'

  fetch(
    `/.netlify/functions/fetch-weather/fetch-weather.js?cityName=${cityName}&units=${units}`
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      createCity(createDataObject(data), gridContainer)
    })
    .catch((error) => {
      console.log(response.message, error)
    })
}

window.onload = function () {
  getWeatherData('Barcelona')
  createInput(container, gridContainer, getWeatherData)
}
