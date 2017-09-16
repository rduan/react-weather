var React = require('react');
var WeatherForm = require('./weather-form');
var WeatherMessage = require('./weather-message');
var openWeatherMap = require('../api/open-weather-map');

var Weather= React.createClass({

    getInitialState(){
        return {
            
        }
    },
    handleSearch(location){
        var that = this;

        openWeatherMap.getTemp(location).then((temp)=>{
            that.setState({
            location,
            temp
        });
        },(errorMessage)=>{
            alert(errorMessage);
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