/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./VietNamCSS.css";
class News extends Component {
  render() {
    return (
      <div className="div-News">
        <a className="News-link" href={this.props.urlLink}>
          <h3 className="text-left">
            <strong>{this.props.newsTitle}</strong>
            <br />
          </h3>
          <p className="text-left">
            {this.props.newsDate}
            <br />
          </p>
          <img
            className="news-img"
            data-bss-hover-animate="pulse"
            src={this.props.srcNewsImg}
            alt={this.props.nameImg}
          />
          <p className="text-left">
            <strong>{this.props.content}</strong>
            <br />
          </p>
        </a>
      </div>
    );
  }
}

export default News;
