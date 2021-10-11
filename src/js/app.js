import '../css/app.css'


const stringToHTML = (string) => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(string, 'text/html')
	return doc.body.firstChild
}

const container = document.querySelector("#app");

const grid = stringToHTML(`<div class="grid"></div>`)
const gridContainer = container.insertBefore(grid, null)

const createInput = (container) => {

  const inputHtml = stringToHTML(`
  <div class="input-container">
    <label for="city">City</label>
    <input id="city" name="city" type="text" />
    <button id="submit">Check New City</button>
  </div>`)

  container.insertBefore(inputHtml, gridContainer)

  const button = document.querySelector('#submit')
  const input = document.querySelector('#city')

  button.addEventListener('click', (event) => {
    event.preventDefault()
    getWeatherData(input.value);
  })
}

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



const createApp = (data) => {

  const appHtml = stringToHTML(`
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

    gridContainer.insertBefore(appHtml, null)
}

const getWeatherData = (cityName) => {
  const key = process.env.WEATHER_KEY;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key + "&units=metric"
  ) 
    .then((response) => {
      return response.json()
    })
    .then((data) => {
     createApp(createDataObject(data))
    })
    .catch((error) => {
     console.log(response.message, error)
    });
};

window.onload = function () {
  getWeatherData('Barcelona')
  createInput(container)
};
