/**
 * @jsx React.DOM
 */

var React = require('React');
var SiteBoilerPlate = require('../../views/core/SiteBoilerPlate.js');
var Banner = require('../../views/Banner/Banner.js');

var index = React.createClass({

  render: function() {
    return (
      <SiteBoilerPlate>
        <Banner bannerMessage="About Us"/>
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
