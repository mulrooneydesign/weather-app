const container = document.querySelector("#app");

const stringToHTML = (string) => {
	var parser = new DOMParser()
	var doc = parser.parseFromString(string, 'text/html')
	return doc.body
}

const createInput = (container) => {
  const inputHtml = stringToHTML(`
  <div class="input-container">
    <label for="city">City</label>
    <input id="city" name="city" type="text" />
    <button id="submit">Check New City</button>
  </div>`)

  container.insertBefore(inputHtml, null)

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
    }

    return fetchedData
}

const createApp = (data) => {

  const appHtml = stringToHTML(`
    <div>
      <p>City: ${data.city}</p>
      <p>Longitude: ${data.longitude}</p>
      <p>Latitude: ${data.latitude}</p>
      <p>Description: ${data.description}</p>
      <p>Short Description: ${data.main}</p>
    </div>`)

  container.insertBefore(appHtml, null)
}

const getWeatherData = (cityName) => {
  const key = "fbc0b4938540f382649a7acc69937a93";

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key
  ) 
    .then((response) => {
      return response.json()
    })
    .then((data) => {
     createApp(createDataObject(data))
    })
    .catch((error) => {
      console.log(error.message)
    });
};

window.onload = function () {
  getWeatherData('Barcelona')
  createInput(container)
};
