import React, { Component } from 'react';
import './vaccin.css'

class HeaderVC extends Component {
    render() {
        return (
            <div >
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default HeaderVC;