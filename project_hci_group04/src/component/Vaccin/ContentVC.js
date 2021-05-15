import React, { Component } from "react";

class ContentVC extends Component {
  render() {
    return (
      <div style={{ float: "left" }}>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default ContentVC;
