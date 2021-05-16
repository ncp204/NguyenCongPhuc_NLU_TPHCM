import React, { Component } from 'react';
import Couting from './couting'
import MainNews from './mainNews'
import SubNews from './subNews'
import './style.css'
class worldSession extends Component {
    render() {
        return (
            <div>
                <section className="text-center download-section content-section padding-space-world" id="world">
                    <div>
                        <div>
                            <div class="container">
                                <div>
                                    <h1 class="main_title">Thông tin dịch covid-19 trên thế giới</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="container-xl border rounded-0 shadow" data-aos="fade-up" data-aos-duration="700">
                                <div class="row justify-content-center align-items-center padding-space-world">
                                    <div class="col-md-3">
                                        <div class=".text-danger-new">
                                            <Couting 
                                            title="tổng số ca nhiễm" 
                                            kind = "text-danger infection-number-world"
                                            number="161.104.567" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <Couting 
                                                title="đang nhiễm"
                                                kind = "text-warning infection-number-world" 
                                                number="18.825.695" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="columm-padding">
                                            <Couting 
                                            title="khỏi" 
                                            number="138.933.059" 
                                            kind = "text-success infection-number-world" 
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <Couting 
                                            title="tử vong" 
                                            number="3.345.813"
                                            kind = "text-dark infection-number-world" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="padding-space">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-lg-8 border-right-blue">
                                        <div class="first_row_news">
                                            <h2>Tin nóng</h2>
                                        </div>
                                        <MainNews
                                            link="#"
                                            paths="assets/img/headnews-1.jpeg"
                                            title="Ấn Độ ghi nhận hơn 360.000 ca nhiễm Covid-19 mới."
                                            time="16:15 13/05/2021"
                                            details="Làn sóng dịch Covid-19 thứ hai chưa có dấu hiệu lắng dịu rõ ràng, Ấn Độ tiếp tục là nước ghi nhận nhiều ca mắc mới và tử vong do Covid-19 nhất trên thế giới. Quốc gia này báo cáo khoảng 50% trong tổng số ca mắc mới được phát hiện trên toàn cầu trong ngày qua.&nbsp;"
                                        />
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="first_row_news">
                                            <h2>tin mới</h2>
                                        </div>
                                        <SubNews
                                            link="#"
                                            paths="assets/img/1-1620898130739.jpg"
                                            alt="EU khuyến cáo các nước thành viên tạm ngừng hoạt động đi lại không thiết yếu từ Ấn Độ"
                                            title="EU khuyến cáo các nước thành viên tạm ngừng hoạt động đi lại không thiết yếu từ Ấn Độ"
                                            time="Thứ Năm, 13-05-2021, 16:15"
                                        />
                                        <SubNews
                                            link="#"
                                            paths="assets/img/cam-1620895691942.jpg"
                                            alt="Một bệnh nhân Nepal tại Campuchia tử vong do Covid-19"
                                            title="Một bệnh nhân Nepal tại Campuchia tử vong do Covid-19"
                                            time="Thứ Năm, 13-05-2021, 15:46"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default worldSession;