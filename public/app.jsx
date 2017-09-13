var React = require('react');
var ReactDom = require('react-dom');

// var GreetMessage = require('./components/GreetMessage');
// var GreetForm = require('./components/GreetForm');
var Greet = require('./components/Greet.jsx');

var firstName = 'smith';

ReactDom.render(
    <Greet name={firstName} />,
    document.getElementById('app')
);



