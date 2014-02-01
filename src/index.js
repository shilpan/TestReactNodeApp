/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @jsx React.DOM
 */

var React = require('React');
var UnderScore = require('underscore');
var Backbone = require('backbone');
var Reactbone = require('./patch/react.backbone.js');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var Skeleton = require('./elements/Skeleton/Skeleton.js');
var ProfileCards = require('./elements/ProfileCards/ProfileCards.js');

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
