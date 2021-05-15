import React, { Component } from 'react';

class tableNews extends Component {
    render() {
        return (
            <div className="col-md-3">
            <div className=".text-danger-new">
              <p className= "text-uppercase infection-header">
                {this.props.title}
              </p>
              <p className={this.props.kind}>{this.props.numbers}</p>
            </div>
          </div>
        );
    }
}

export default tableNews;