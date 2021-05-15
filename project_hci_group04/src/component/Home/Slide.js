import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div>
                <img className="w-100 d-block" src={this.props.path} alt="Slide Image" /><a className="d-block content-focus" href="#">{this.props.content}</a><small>({this.props.small_date}<br />{this.props.small_text}<br /></small>
            </div>
        );
    }
}

export default Slide;