import $ from 'jquery';  // Import jQuery
import _ from 'lodash';  // Import Lodash
import './body.css';     // Import CSS

let count = 0;

// Function to update the counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the button click
const debouncedUpdateCounter = _.debounce(updateCounter, 300); // 300ms debounce

// Add content to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="click-button">Click here to get started</button>');
$('body').append('<p id="count">0</p>');

// Bind the debounced function to the button click event
$('#click-button').on('click', debouncedUpdateCounter);
