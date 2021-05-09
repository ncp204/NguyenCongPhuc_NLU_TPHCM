import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="bootstrapMain">
                    <footer className="footer-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col item social">
                                    <div className="animationn">
                                        <h1 style={{ color: 'white', margin: 'auto' }}>Contact us</h1>
                                        <p style={{ margin: '10px' }}>Welcome to team 4</p>
                                        <a target="_blank" href="https://github.com/unlocker0808/projectCovidNews"><i className="fa fa-github" /></a><a target="_blank" href="https://hci2021group04.tk/"><i className="fa fa-globe" /></a><a target="_blank" href="https://hci2021group04.tk/member"><i className="fa fa-group" /></a>
                                    </div>
                                </div>
                            </div>
                            <p className="copyright">Design by Team 4</p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;