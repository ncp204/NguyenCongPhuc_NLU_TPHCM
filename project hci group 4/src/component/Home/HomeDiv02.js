import React, { Component } from 'react';
import CardHome from './CardHome';

class HomeDiv02 extends Component {
    render() {
        return (
            <div>
                <div className="home-div num2">
                    <h1 className="first-row">CHỐNG DỊCH NHƯ CHỐNG GIẶC</h1>
                    <div className="row">
                        <CardHome path="assets/img/home_tuhao3.jpg" content="Cuộc chiến chống đại dịch COVID-19 dưới góc nhìn chính trị học." />
                        <CardHome path="assets/img/home_tuhao2.jpg" content="Việt Nam xứng đáng được ghi nhận trong cuộc chiến chống Covid-19." />
                        <CardHome path="assets/img/home_tuhao4.jpg" content="Chúng tôi đi làm vì bạn xin bạn hãy ở nhà vì chúng tôi." />
                        <CardHome path="assets/img/home_tuhao1.jpg" content="Toàn dân cài ứng dụng Bluezone để phòng, chống dịch Covid-19." />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeDiv02;