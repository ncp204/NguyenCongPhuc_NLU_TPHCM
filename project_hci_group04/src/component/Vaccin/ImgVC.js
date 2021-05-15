import React, { Component } from 'react';

class ImgVC extends Component {
    render() {
        return (
            <div>
                <img src={this.props.path} style={{maxWidth:"710px"}}/>
            </div>
        );
    }
}

export default ImgVC;