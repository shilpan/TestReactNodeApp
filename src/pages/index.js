/**
 * @jsx React.DOM
 */

/* Requiring dependencies for demo purposes, this should be done only when required */
var React = require('React');
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

     window._ = require('underscore/underscore.js')({});
     window.jQuery = require('../../bower_components/jquery/jquery.js');
     window.Backbone = require('backbone/backbone.js');
     var reactbackbone = require('../../bower_components/react.backbone/react.backbone.js');
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
