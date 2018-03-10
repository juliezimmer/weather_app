class Storage {
   constructor () {
      this.city;
      this.state;
      // the default city is used if there is nothing in storage
      this.defaultCity = "St. Paul";
      this.defaultState = "MN";
   }
   // Class Methods
   getLocationData () {
      // check what city is in local storage
      if(localStorage.getItem('city') === null){ // if there is no city in localStorage, show the default city
         this.city = this.defaultCity;
      } else {
         this.city = localStorage.getItem('city');
      }

      // check what state is in localStorage
      if (localStorage.getItem('state') === null) { // if there is no state in local storage, show the default state
         this.state = this.defaultState;
      } else {
         this.city - localStorage.getItem('state');
      }
      return {
         city: this.city,
         state: this.state
      }
   }

   setLocationData(city, state){
      // set local storage
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
   }
}