/**
 * @description
 * It's kind the container, main file/code; basically anything you want to
 * show up on every page should be here
 */

var React = require('react')
    , Base = React.createClass({
    render: function () {
        return (
            <section>
                <header><h1>Header</h1></header>
                {this.props.children}
                <footer><h1>Footer</h1></footer>
            </section>
        )
    }
});

module.exports = Base;