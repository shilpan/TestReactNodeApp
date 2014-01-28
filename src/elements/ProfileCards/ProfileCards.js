var React = require('React');

var ProfileCards = React.createClass({
  render: function() {
    return (
      var createItem = function(itemText) {
        return <div className={itemText}> </div>;
      };
      return <div className={"col-md-4"}>{this.props.items.map(createItem)}</div>;
    );
  }
});

module.exports = Skeleton;