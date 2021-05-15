import React, { Component } from 'react';

class couting extends Component {
    render() {
        return (
            <div>
                <p className="text-uppercase infection-header">{this.props.title}</p>
                <p className="text-danger infection-number"><strong>{this.props.number}</strong><br/></p>
            </div>
        );
    }
}

export default couting;