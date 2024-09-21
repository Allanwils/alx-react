import $ from 'jquery'; // Import jQuery
import './header.css';  // Import CSS
import logo from '../../assets/holberton-logo.jpg'; // Import logo

// Add logo and H1 title to the header
$('header').append(`<img src="${logo}" alt="Logo" id="logo" />`);
$('header').append('<h1>Holberton Dashboard</h1>');

console.log('Init header');
