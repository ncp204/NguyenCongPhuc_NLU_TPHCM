import React, { Component } from 'react';

class mainNews extends Component {
    render() {
        return (
            <div>
                <div class="padding-space">
                    <div>
                        <a href={this.props.link}>
                            <img class="img-thumbnail" data-bss-hover-animate="pulse" src={this.props.paths} />
                            <p class="paragraph_color_text_mainnews">{this.props.title}</p>
                        </a>
                    </div>
                    <div>
                        <p class="time-text">{this.props.time}</p>
                    </div>
                    <div class="text-left">
                        <p class="paragraph_color_text_mainnews_infor">{this.props.details}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default mainNews;