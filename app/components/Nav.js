var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav= React.createClass({
    onSearch: function(e){
        e.preventDefault();
        //
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                        <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                        </li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/sample" activeClassName="active">Sample</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search weather" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="get weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

// var Nav= (props)=>{
//     return (
//         <div className="top-bar">
//             <div className="top-bar-left">
//                 <ul className="menu">
//                     <li className="menu-text">React Weather App</li>
//                     <li>
//                     <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
//                     </li>
//                     <li><Link to="/about" activeClassName="active">About</Link></li>
//                     <li><Link to="/sample" activeClassName="active">Sample</Link></li>
//                 </ul>
//             </div>
//             <div className="top-bar-right">

//             </div>
//         </div>
//     );
// }

module.exports = Nav;

