/**
 * @description
 * Not realy a component, more a routes manager
 */

var React = require('react'),
    ReactRouter = require('react-router'), // packaged
    Router = ReactRouter.Router,
    Route = ReactRouter.Route, // For a specific page
    Base = require('./components/Base.jsx'),
    Page1 = require('./components/Page1.jsx'),
    Page2 = require('./components/Page2.jsx'),
    CreateHistory = require('history'),
    History = new CreateHistory.createHashHistory();

// Let's create a header that appears on every page
var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </Route>
    </Router>
);

module.exports = Routes;