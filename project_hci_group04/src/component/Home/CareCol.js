import React, { Component } from 'react';

class CareCol extends Component {
    render() {
        return (
            <div className="col care-1 fcol">
                <img className="img-care" src={this.props.path} />
                <div className="content-care">
                    <a className="d-block content-care-1" href="#">{this.props.content}<br /></a><small>{this.props.small_date}<br />{this.props.small_text}<br /></small>
                </div>
            </div>
        );
    }
}

export default CareCol;