var React = require('react');
var ReactDom = require('react-dom');

var GreetMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

module.exports = GreetMessage;