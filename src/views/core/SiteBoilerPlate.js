/**
 * @jsx React.DOM
 */

var React = require('React');

/**
 * Component for performing some redundant site wrapping. Customize to your
 * liking, or create a new, similar module. `react-page` automatically ensures
 * that all fo the JavaScript used to generate the page, will be bundled and
 * sent into the response so that all the event handlers will work.
 *
 * Usage:
 *
 * var React = require('React');
 * var SiteBoilerPlate = require('./components/SiteBoilerPlate.jsx');
 * var MyPage = React.createClass({
 *   render: function() {
 *     return (
 *       <SiteBoilerPlate>
 *          <div>Hello This Is My App!</div>
 *       </SiteBoilerPlate>
 *     );
 *   }
 * });
 */

var SiteBoilerPlate = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>React Page | Client-Server JavaScript Rendering</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="css/style.css" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = SiteBoilerPlate;
