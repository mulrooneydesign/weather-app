# Weather App

An example of a weather app written without a front-end framework.

Link to demo: 
[https://weather-app-mulrooney.netlify.app/](https://weather-app-mulrooney.netlify.app/) 

## Functionality

The app lets you type in any city in the world then places a marker on the globe with that cities location.

It returns the following data and adds it to a grid of items:

- Longitude
- Latitude
- Description (A description of the weather)
- Short Description (A short description of the weather)
- Temperature Description 
- Max Temperature 
- Min Temperature 

It provides a message detailing what has happen or if there is an error. 

There is a button to toggle the output from F to C for the temperature.

I used THREE.js for the 3D parts of this APP.

I used netlify functions to hide the API key from the client. 

The rest is vanilla JS

## To run locally

```npm install```

You'll need an API key from [https://openweathermap.org/](https://openweathermap.org/) to be saved in an .env file.

.env.example is provided. 

First Build  | Start Netlify
------------- | -------------
npm run build | yarn netlify dev


## Todos
- Add more client form validation
- Add post processing effects to the THREE scene
- Add floating text notes alongside the city markers
- Add some subtle background images to the main app
- Make user message more mobile friendly. Add swipe functionality.
- Revamp main style choices
- Change all temperatures when C/F button is toggled