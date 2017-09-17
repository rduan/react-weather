var React = require('react');
var ReactDom = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx')
var Weather = require('./components/weather')
var About = require('./components/About')
var Sample = require('./components/Sample')

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
//require('script!foundation-sites/dist/js/foundation.min.js');



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



