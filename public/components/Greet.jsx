var React = require('react');
var GreetMessage = require('./GreetMessage.jsx');
var GreetForm = require('./GreetForm.jsx');


// function greet(){
//     document.write('from greet function');
// }

// module.exports = greet;

var Greet = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'default mess'
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewData: function(updates) {
        //this.setState(updates);
        this.setState({
            name: updates.name,
            message: updates.message
        });

    },

    render: function(){
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreetMessage name={name} message={message} />
                <GreetForm onNewData={this.handleNewData} />
            </div>
        );
    }


});

module.exports = Greet;