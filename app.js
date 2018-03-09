// Initialize weather object
const weather = new Weather('Boston', 'MA');

// get weather when DOM loads  
document.addEventListener('DOMContentLoaded', getWeather);

// this returns a promise because getWeather is asynchronous
// this is wrapped in its own function that runs when the DOM loads
function getWeather(){
   weather.getWeather()
      .then(results => {
         console.log(results);
         ui.paint(results);
      })
      .catch(err => console.log(err));
}