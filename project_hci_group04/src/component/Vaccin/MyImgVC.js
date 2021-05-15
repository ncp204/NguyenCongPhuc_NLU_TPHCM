import React, { Component } from "react";

class MyImgVC extends Component {
  render() {
    return (
      <div>
        <img src={this.props.path} style={{maxWidth: "160px"}} style={{maxHeight:"160px"}}/>
      </div>
    );
  }
}

export default MyImgVC;
