import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Receipe from './receipe.js';

function clearFields() { //clear all inpur fields
  $('#ingredient').val("");
  $('.showErrors').text("");
  $('.showName').text("");
  $('.showTemp').text("");
}

function getElements(response) { //4
  if (response[0]) { //if correct to the API response exists
    console.log(response[0].name);
    $('.showName').text(`The brewery is: ${response[1].name}`); //show response name
    // $("#imageBox").html(`<img src="${response.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`); //show response error message
  }
}

$(document).ready(function() {  //1
  $('#search').click(function() {
    const userSearch = $("#ingredient").val(); //take in user value
    clearFields(); //run clear fields
    Receipe.getReceipe(userSearch) //call recipe class and getrecipe method pass userSearch  
      .then(function(response) { //take response and pass to getElements
        getElements(response); //call getElements with response  //3
      });
  });
});