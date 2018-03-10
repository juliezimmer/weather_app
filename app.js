// Initialize storage object
const storage = new Storage();
// get stored location data
const weatherLocation  = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state); 

// Initialize the UI 
const ui = new UI ();

// get weather when DOM loads  
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
// add an event listener with an arrow function
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   const state = document.getElementById('state').value;
   
   // change location
   weather.changeLocation(city, state);

   // Set Location in local storage
   storage.setLocationData(city, state);

   // Get and display weather for new location
   getWeather();

   // Close the Modal
   $('#locModal').modal('hide');

}); 

// this returns a promise because getWeather is asynchronous
// this is wrapped in its own function that runs when the DOM loads
function getWeather(){
   weather.getWeather()
      .then(results => {
         ui.paint(results);
      })
      .catch(err => console.log(err));
}