import React, { Component } from "react";
// import "./vaccin.css";

class Content2 extends Component {
  render() {
    return (
      <div>
        <div className="display3">
            <div>
            <img src={this.props.nguon} />
              <a href={this.props.link}>
                <b>{this.props.title}</b>
              </a>
              <p>{this.props.time}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Content2;
