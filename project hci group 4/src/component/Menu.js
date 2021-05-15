import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav" style={{ backgroundColor: '#009cd7' }}>
                    <div className="container"><a className="navbar-brand js-scroll-trigger" href="#">Covid 247</a>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link active js-scroll-trigger" href="/home">Trang chủ</a></li>
                                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link js-scroll-trigger" href="/vietnam">Việt Nam</a></li>
                                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link js-scroll-trigger" href="/world">Thế Giới</a></li>
                                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link js-scroll-trigger" href="/vaccin">Vaccin</a></li>
                                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link js-scroll-trigger" href="/download">Tải app</a></li>
                            </ul>
                            <a className="btn btn-primary" role="button" href="login.html">Đăng nhập</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;