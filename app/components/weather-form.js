var React = require('react');

var WeatherForm= React.createClass({

    onFormSubmit(e){
        e.preventDefault();

        var loc = this.refs.location.value;
        if(loc.length > 0) {
            this.refs.location.value="";
            this.props.onSearch(loc);
        }
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" />
                    <button className="button hollow expanded">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;