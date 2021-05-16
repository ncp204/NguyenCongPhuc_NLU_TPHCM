import React, { Component } from 'react';

class subNews extends Component {
    render() {
        return (
            <div>
                <div class="padding-space">
                    <a href={this.props.link}><img class="img-thumbnail" data-bss-hover-animate="pulse" src={this.props.paths} alt= {this.props.alt}/>
                        <p class="paragraph_color_text_subnews"><strong>{this.props.title}</strong></p>
                    </a>
                    <div>
                        <p class="time-text">{this.props.time}<br /></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default subNews;