var React = require('react');
var ReactDom = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx')
var Weather = require('./components/weather')
var About = require('./components/About')
var Sample = require('./components/Sample')


ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="sample" component={Sample} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
);



