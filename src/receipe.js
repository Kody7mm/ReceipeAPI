export default class Receipe { //class designation on export  //2
  static getReceipe(searchTerm) { //static method inside class
    return fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`, { mode: 'cors' }) //return the "fetched" API address
      .then(function(response) { //return promise from fetch in the form of a response
        if (!response.ok) { //if response is not ok then
          throw Error(response.statusText); //return error
        }
        return response.json(); //otherwise return response
      })
      .catch(function(error) {
        return error; //this error
      });
  }
}