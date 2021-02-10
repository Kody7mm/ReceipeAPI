import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Receipe from './receipe.js';

function clearFields() {
  $('#ingredient').val("");
  $('.showErrors').text("");
  $('.showName').text("");
  $('.showTemp').text("");
}

function getElements(response) {
  if (response.drinks) {
    $('.showName').text(`The name of the receipe is ${Object.values(response.drinks[0])}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#search').click(function() {
    // let searchTerm = $('#ingredient').val();
    // let searchTerm = "?s=margarita";
    // let search = "search";
    clearFields();
    Receipe.getReceipe()
      .then(function(response) {
        getElements(response);
      });
  });
});


//take text input from user with optional ingredients, calories, cuisine, dates, prepare time
//store input as variable pass to API call
//return API info to user regarding search criteria
// user stupidity check and try again button


//return options: name of receipe(label), number of ingredients,