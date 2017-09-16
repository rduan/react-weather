var React = require('react');
var WeatherForm = require('./weather-form');
var WeatherMessage = require('./weather-message');

var Weather= React.createClass({

    getInitialState(){
        return {
            location: "Melbourne",
            temp: 90
        }
    },
    handleSearch(location){
        this.setState({
            location,
            temp:23
        })
    },

    render: function() {
        var {temp, location} = this.state;
        return (
            <div>
                <h2>Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
            
        )
    }
});

module.exports = Weather;