/**
 * @jsx React.DOM
 */

/* Requiring dependencies for demo purposes, this should be done only when required */
var React = require('React');
var jquery = require('../vendor/jquery-2.1.0.js');
var UnderScore = require('underscore/underscore.js');
var Backbone = require('backbone/backbone.js');
var Reactbone = require('../patch/react.backbone.js');

var SiteBoilerPlate = require('../views/core/SiteBoilerPlate.js');
var Skeleton = require('../views/Skeleton/Skeleton.js');
var ProfileCards = require('../views/ProfileCards/ProfileCards.js');
var Router = require('../routes/Routes.js');

var index = React.createClass({
  componentDidMount: function() {
    /**
     * This runs on the client side. Add Jquery and Underscore to the window.
     * Initialize Backbone app once the dependencies are set up.
     */
  },

  render: function() {
    return (
      <SiteBoilerPlate>
        <Skeleton>
          <ProfileCards items={["profile-card", "profile-card extra"]} />
        </Skeleton>
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
