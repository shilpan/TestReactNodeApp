/**
 * @jsx React.DOM
 */

/* Requiring dependencies for demo purposes, this should be done only when required */
var React = require('React');
var UnderScore = require('underscore');
var Backbone = require('backbone');
var Reactbone = require('../patch/react.backbone.js');

var SiteBoilerPlate = require('../views/core/SiteBoilerPlate.js');
var Skeleton = require('../views/Skeleton/Skeleton.js');
var ProfileCards = require('../views/ProfileCards/ProfileCards.js');

var index = React.createClass({
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
