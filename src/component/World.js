import React, { Component } from 'react';

class World extends Component {
    render() {
        return (
            <div>
                <section className="text-center content-section border-heading" id="world">
                    <div>
                        <div className="container">
                            <div>
                                <h1 className="first_row">Thông tin dịch covid-19 trên thế giới</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container-xl border rounded-0 shadow" data-aos="fade-up" data-aos-duration={700}>
                            <div className="row justify-content-center align-items-center padding-space">
                                <div className="col-md-3">
                                    <div className=".text-danger-new">
                                        <p className="text-uppercase infection-header">tổng số ca nhiễm</p>
                                        <p className="text-danger infection-number"><strong>161.104.567</strong><br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <p className="text-uppercase infection-header">ĐANG NHIỄM</p>
                                        <p className="text-warning infection-number"><strong>18.825.695</strong></p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="columm-padding">
                                        <p className="text-uppercase infection-header">KHỎI</p>
                                        <p className="text-success infection-number"><strong>138.933.059</strong><br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <p className="text-uppercase infection-header">TỬ VONG</p>
                                        <p className="text-dark infection-number"><strong>3.345.813</strong><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-space">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-8 border-right-blue">
                                    <div className="first_row_news">
                                        <h2 style={{ color: 'rgb(0, 123, 255)' }}>Tin nóng</h2>
                                    </div>
                                    <div className="padding-space">
                                        <div><a href="#"><img className="img-thumbnail" data-bss-hover-animate="pulse" src="assets/img/headnews-1.jpeg" />
                                            <p className="paragraph_color_text_mainnews">Ấn Độ ghi nhận hơn 360.000 ca nhiễm Covid-19 mới.</p>
                                        </a></div>
                                        <div>
                                            <p className="time-text">16:15 13/05/2021</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="paragraph_color_text_mainnews_infor">Làn sóng dịch Covid-19 thứ hai chưa có dấu hiệu lắng dịu rõ ràng, Ấn Độ tiếp tục là nước ghi nhận nhiều ca mắc mới và tử vong do Covid-19 nhất trên thế giới. Quốc gia này báo cáo khoảng 50% trong tổng số ca mắc mới được phát hiện trên toàn cầu trong ngày qua.&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="first_row_news">
                                        <h2>tin mới</h2>
                                    </div>
                                    <div className="subnews_border_bottom padding-space"><a href="#"><img className="img-thumbnail" data-bss-hover-animate="pulse" src="assets/img/1-1620898130739.jpg" />
                                        <p className="paragraph_color_text_subnews"><strong>EU khuyến cáo các nước thành viên tạm ngừng hoạt động đi lại không thiết yếu từ Ấn Độ</strong></p>
                                    </a>
                                        <div>
                                            <p className="time-text">Thứ Năm, 13-05-2021, 16:15<br /></p>
                                        </div>
                                    </div>
                                    <div className="subnews_border_bottom"><a href="#"><img className="img-thumbnail" data-bss-hover-animate="pulse" src="assets/img/cam-1620895691942.jpg" />
                                        <p className="paragraph_color_text_subnews"><strong>Một bệnh nhân Nepal tại Campuchia tử vong do Covid-19</strong><br /></p>
                                    </a>
                                        <div>
                                            <p className="time-text">Thứ Năm, 13-05-2021, 15:46<br /></p>
                                        </div>
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

export default World;