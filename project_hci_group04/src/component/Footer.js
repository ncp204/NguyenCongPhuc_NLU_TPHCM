import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-basic">
                    <footer data-aos="fade-up" data-aos-duration={1100}>
                        <div className="social"><a href="" target="_blank"><i className="fa fa-github" /></a><a href="https://hci2021group04.tk/" target="_blank"><i className="fa fa-globe" /></a><a href="https://hci2021group04.tk/member" target="_blank"><i className="icon ion-ios-people" /></a></div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Trang chủ</a></li>
                            <li className="list-inline-item"><a href="#vietnam">Việt Nam</a></li>
                            <li className="list-inline-item"><a href="#world">Thế giới</a></li>
                            <li className="list-inline-item"><a href="#vaccin">Vaccin</a></li>
                            <li className="list-inline-item"><a href="#download">Tải app</a></li>
                        </ul>
                        <p className="copyright">Design by team 4 © Human computer interaction 2021</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;