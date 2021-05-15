import React, { Component } from 'react';

class HomeColDiv3 extends Component {
    render() {
        return (
            <div>
                <div className="frow-col-div03"><a className="d-block" href="#">{this.props.content}<br /></a><small>{this.props.small_date}<br /></small></div>
            </div>
        );
    }
}

export default HomeColDiv3;