import '../css/app.css'
import { stringToHTML } from './components/stringToHTML'
import { createSwitch } from './components/createSwitch'
import { createCity } from './components/createCity'
import { createInput } from './components/createInput'
import { createMessage } from './components/createMessage'
import { Globe } from './components/globe/globe'
import { createCanvasContainer } from './components/globe/components/canvas'

const container = document.querySelector('#app')

const grid = stringToHTML(`<div class="grid"></div>`)
const gridContainer = container.insertBefore(grid, null)

let units = ''

const createDataObject = (data, units) => {
  if (stateProxy.isCelcius) {
    units = 'metric'
  } else {
    units = 'imperial'
  }

  let tempSymbol = ''
  if (units === 'metric') {
    tempSymbol = ' &#176C'
  } else {
    tempSymbol = ' &#176F'
  }

  let fetchedData = {
    city: data.name,
    longitude: data.coord.lon,
    latitude: data.coord.lat,
    description: data.weather[0].description,
    main: data.weather[0].main,
    temperature: data.main.temp + tempSymbol,
    temperature_max: data.main.temp_max + tempSymbol,
    temperature_min: data.main.temp_min + tempSymbol,
  }

  return fetchedData
}

const initialState = {
  isCelcius: true,
}

const stateHandler = {
  set: function (obj, prop, value) {
    createMessage(container, null, 'Temperature units changed')
    obj[prop] = value
    return true
  }
}

const stateProxy = new Proxy(initialState, stateHandler)

export const tempSwitcher = () => {
  stateProxy.isCelcius = !stateProxy.isCelcius
}

const getWeatherData = (cityName) => {
  if (stateProxy.isCelcius) {
    units = 'metric'
  } else {
    units = 'imperial'
  }

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
      createMessage(container, null, error.error)
    })
}

const globeInit = () =>  {
  const container = createCanvasContainer()
  const globe = new Globe(container);
  globe.render();
}

window.onload = function () {
  createSwitch(container, gridContainer)
  //getWeatherData('Barcelona')
  createInput(container, gridContainer, getWeatherData)
  createMessage(container, null, 'Type the name of a city or town into the search field and click add.')
  globeInit()
}


