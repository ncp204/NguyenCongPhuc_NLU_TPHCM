import React, { Component } from 'react';
import './couting'
import './mainNews'
import './subNews'

class worldSession extends Component {
    render() {
        return (
            <section
          className="text-center download-section content-section"
          id="vietnam"
        >
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
                        <div class="row justify-content-center align-items-center padding-space">
                            <div class="col-md-3">
                                <div class=".text-danger-new">
                                    <couting title="tổng số ca nhiễm" number="161.104.567" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div>
                                    <couting title="đang nhiễm" number="18.825.695" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="columm-padding">
                                    <couting title="khỏi" number="138.933.059" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div>
                                    <couting title="tử vong" number="3.345.813" />
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
                                <mainNews
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
                                <subNews
                                    link="#"
                                    src="assets/img/1-1620898130739.jpg"
                                    title="EU khuyến cáo các nước thành viên tạm ngừng hoạt động đi lại không thiết yếu từ Ấn Độ"
                                    time="Thứ Năm, 13-05-2021, 16:15"
                                />
                                <subNews
                                    link="#"
                                    src="assets/img/cam-1620895691942.jpg"
                                    title="Một bệnh nhân Nepal tại Campuchia tử vong do Covid-19"
                                    time="Thứ Năm, 13-05-2021, 15:46"
                                />
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