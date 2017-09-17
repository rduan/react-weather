var React = require('react');

// var About= React.createClass({
//     render: function() {
//         return (
//             <h2>About</h2>
//         )
//     }
// });

var About = (props)=>{
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Weather application build on React.</p>
            <p>
                Here are some of tools I used:
            </p>
            <ul>
                <li>React</li>
                <li>Open Weather Map</li>
                <li>Foundation</li>
                <li>axios</li>
                <li>Express</li>
            </ul>
        </div>
        
    )
};

module.exports = About;