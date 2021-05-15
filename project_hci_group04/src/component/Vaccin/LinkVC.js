import React, { Component } from 'react';
import "./vaccin.css";

class LinkVC extends Component {
    render() {
        return (
            <div >
                <a href={this.props.long}><b>{this.props.title}</b></a>
            </div>
        );
    }
}

export default LinkVC;