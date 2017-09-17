var React = require('react');
var {Link} = require('react-router');

// var Sample= React.createClass({
//     render: function() {
//         return (
//             <h2>Sample</h2>
//         )
//     }
// });

var Sample=(props)=>{
    return(
        <div>
            <h2 className="text-center">Sample</h2>
            <ol>
                <li>
                    <Link to='/?location=london'>london</Link>
                </li>
                <li>
                    <Link to='/?location=london'>melbourne</Link>
                </li>
            </ol>
        </div>
            
        )
};

module.exports = Sample;