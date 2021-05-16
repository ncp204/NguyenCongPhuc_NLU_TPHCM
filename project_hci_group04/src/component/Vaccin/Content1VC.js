import React, { Component } from "react";

class Content1VC extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.heading} </h1>
        <img src={this.props.nguon} />
        <a href={this.props.link}><b>{this.props.title}</b></a>
        <p>{this.props.time}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Content1VC;
