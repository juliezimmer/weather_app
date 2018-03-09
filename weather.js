class Weather {
   // city and state are from what the user enters in the browser
   constructor (city, state) {
      this.apiKey = 'b2d878b3476b9c54';
      this.city = city;
      this.state = state;
   }

   // Fetch weather from API using async/await function
   async getWeather(){
      // dynamic response variable
      const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json
      `);

      // response data
      const responseData = await response.json();
      return responseData.current_observation;
   }

   // change weather location
   changeLocation(city, state) {
      this.city = city;
      this.state = state;
   }
}