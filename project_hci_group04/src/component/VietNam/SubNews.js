/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class subNews extends Component {
  render() {
    return (
        <div className="subnews_border_bottom padding-space">
          <a className="News-Link" href={this.props.urlLink}>
            <img
              className="img-thumbnail"
              data-bss-hover-animate="pulse"
              src={this.props.subNewsImg}
              alt={this.props.nameImg}
            />
            <p className="paragraph_color_text_subnews">
              {this.props.subNewsTitle}
              <br />
            </p>
          </a>
          <div>
            <p className="time-text">
              {this.props.subNewsDate}
              <br />
            </p>
          </div>
        </div>
    );
  }
}

export default subNews;
