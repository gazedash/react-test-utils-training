// @flow
import React, { Component } from "react";

class FollowersSuggestionBox extends Component {
  static defaultProps = {
    onMount: () => {},
    onRefreshClick: () => {},
    items: [],
  };
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onRefreshClick}>Refresh</button>
        {this.props.items.map(item => <div>
        {item.avatar}
        <button onClick={this.props.onCloseItem}>X</button> 
        </div>)}
      </div>
    );
  }
}

export default FollowersSuggestionBox;
