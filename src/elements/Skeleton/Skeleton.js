var React = require('React');

var Skeleton = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },

  componentDidMount: function() {
    this.setState({initialized: true});
  },

  render: function() {
    return (
      <div className={"container"}>
        <div className={"row"}>
            {this.props.ProfileCards}
            {this.props.MediaCards}
        </div>
      </div>

    );
  }
});

module.exports = Skeleton;