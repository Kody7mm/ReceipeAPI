export default class Receipe {
  static getReceipe() {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}


// Search cocktail by name : search.php?s=margarita
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// List all cocktails by first letter : search.php?f=a
// https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Search ingredient by name : search.php?i=vodka
// https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

// Lookup full cocktail details by id : lookup.php?i=11007
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// Lookup ingredient by ID : lookup.php?iid=552
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

// Lookup a random cocktail : random.php
// https://www.thecocktaildb.com/api/json/v1/1/random.php

//https://api.edamam.com/search?q=${searchTerm}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}