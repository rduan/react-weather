var React = require('react');
var WeatherForm = require('./weather-form');
var WeatherMessage = require('./weather-message');
var openWeatherMap = require('../api/open-weather-map');

var Weather= React.createClass({

    getInitialState(){
        return {
            isLoading: false
        }
    },

    handleSearch(location){
        var that = this;
        this.setState({
            isLoading:true
        })

        openWeatherMap.getTemp(location).then((temp)=>{
            
            that.setState({
            location,
            temp,
            isLoading:false
        });
        },(errorMessage)=>{
            that.setState({
                isLoading:false
            });
            alert(errorMessage);
        })
        
    },

    render: function() {
        var {isLoading,temp, location} = this.state;

        var renderMessage=()=>{
            if(isLoading) {
                return <h3 className="text-center">fetching weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        };

        return (
            <div>
                <h2 className="text-center">Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                
            </div>
            
        )
    }
});

module.exports = Weather;