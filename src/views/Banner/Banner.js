/**
 * @jsx React.DOM
 */
"use strict";

var React = require('React');

/**
 * Look at Banner, Michael!
 */
var Banner = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },

  componentDidMount: function() {
    this.setState({initialized: true});
  },

  render: function() {
    var classes = [
      'banner',
      this.state.initialized ? 'fadeIn' : ''
    ].join(' ');
    return (
      <h1 className={classes}>
        {this.props.bannerMessage}
      </h1>
    );
  }
});

module.exports = Banner;
