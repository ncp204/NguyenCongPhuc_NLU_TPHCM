import React, { Component } from 'react';

class CardHome extends Component {
    render() {
        return (
            <div>
                <div className="col col-card fcol">
                    <div className="card cards-shadow cards-hover" data-aos="flip-left" data-aos-duration={950}>
                        <div className="card-header" />
                        <div className="card-body"><img className="d-block" src={this.props.path} /><a className="card-link" href="#">{this.props.content}<br /></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardHome;