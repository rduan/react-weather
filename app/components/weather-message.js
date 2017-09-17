var React = require('react');

// var WeatherMessage= React.createClass({
    

//     render: function() {
//         var {temp, location} = this.props;
//         return (
//             <h2>{location }It is weather data {temp}</h2>
//         )
//     }
// });


// var WeatherMessage = (props)=>{
//     var {temp, location} = props;
//     return (
//             <h2>{location }It is weather data {temp}</h2>
//         )
// };


var WeatherMessage = ({temp, location})=>{
    return (
            <h2 className="text-center">{location }: temperature is {temp}</h2>
        )
};

module.exports = WeatherMessage;