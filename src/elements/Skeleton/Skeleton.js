/**
 * @jsx React.DOM
 */

"use strict"

var React = require('React');

var Skeleton = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Skeleton;