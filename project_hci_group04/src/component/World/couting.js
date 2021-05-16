import React, { Component } from 'react';

class couting extends Component {
    render() {
        return (
            <div>
                <div class="col-md-3">
                    <div class=".text-danger-new">
                        <p className="text-uppercase infection-header-world" >{this.props.title}</p>
                        <p className={this.props.kind}><strong>{this.props.number}</strong><br /></p>
                    </div>
                </div>
            </div>

        );
    }
}

export default couting;