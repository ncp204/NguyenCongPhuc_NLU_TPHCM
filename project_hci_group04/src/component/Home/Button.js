import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="btn-home">
                <a className={this.props.btn} role="button">{this.props.txt}<br/>{this.props.txt1}</a>
            </div>
        );
    }
}

export default Button;