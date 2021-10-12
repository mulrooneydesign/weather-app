export const temperatureScaleSelector = (currentScale) => {

    console.log('running')
  if ((currentScale = 'F')) {
    return `<button>Change to Fahrenheight</button`
  } else if ((currentScale = 'C')) {
    return `<button>Change to Celcius</button`
  }
}
