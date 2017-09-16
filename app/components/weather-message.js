var React = require('react');

var WeatherMessage= React.createClass({
    

    render: function() {
        var {temp, location} = this.props;
        return (
            <h2>{location }It is weather data {temp}</h2>
        )
    }
});

module.exports = WeatherMessage;