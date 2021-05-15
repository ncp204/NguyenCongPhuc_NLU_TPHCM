import React, { Component } from 'react';

class VietNam extends Component {
    render() {
        return (
            <div>
                <section className="text-center download-section content-section" id="vietnam" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #009cd7' }}>
                    <div className="container">
                        <div className="vn-heading">
                            <h1 className="first_row">Thông tin dịch covid-19 trONG nước</h1>
                        </div>
                        <div className="nguon-tin">
                            <p className="text-left">Nguồn tin tức:&nbsp;<a href="https://ncov.moh.gov.vn/" target="_blank"><span style={{ textDecoration: 'underline' }}>ncov.moh.gov.vn</span><br /></a></p>
                        </div>
                        <div>
                            <div className="container-xl border rounded-0 shadow" data-aos="fade-up" data-aos-duration={700}>
                                <div className="row justify-content-center align-items-center padding-space">
                                    <div className="col-md-3">
                                        <div className=".text-danger-new">
                                            <p className="text-uppercase infection-header">tổng số ca nhiễm</p>
                                            <p className="text-danger infection-number">3.740</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <p className="text-uppercase infection-header">ĐANG NHIỄM</p>
                                            <p className="text-warning infection-number"><strong>1.044</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="columm-padding">
                                            <p className="text-uppercase infection-header">KHỎI</p>
                                            <p className="text-success infection-number">2.657</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <p className="text-uppercase infection-header">TỬ VONG</p>
                                            <p className="text-dark infection-number"><strong>35</strong><br /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tin-tuc" style={{ marginTop: '20px' }}>
                            <div className="row">
                                <div className="col" style={{ borderRightStyle: 'solid', borderRightColor: 'var(--blue)', width: '760px' }}>
                                    <div>
                                        <div style={{ borderBottomStyle: 'solid', borderBottomColor: 'var(--blue)', marginBottom: '20px' }}>
                                            <h2 className="text-left" style={{ color: 'rgb(0,123,255)', marginBottom: '0px' }}>Tin Tức trong ngày</h2>
                                        </div><a href="#" style={{ color: 'var(--gray-dark)' }}>
                                            <h3 className="text-left" style={{ marginBottom: '10px' }}><strong>Hà Nội có 5 ca dương tính mới, 4 ca là học sinh.</strong><br /></h3>
                                            <p className="text-left" style={{ marginBottom: '10px' }}>(Chủ nhật, 09/05/2021 08:49)<br /></p><img data-bss-hover-animate="pulse" src="assets/img/hanoi-hs-duong-tinh.jpeg" style={{ width: '710px' }} />
                                            <p className="text-left"><strong>Trong 5 ca dương tính SARS-CoV-2 vừa phát hiện do CDC Hà Nội thực hiện, có 4 ca là học sinh cấp 3</strong><br /></p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col" style={{ maxWidth: '30%' }}>
                                    <div style={{ borderBottomStyle: 'solid', borderBottomColor: 'var(--blue)', marginBottom: '20px' }}>
                                        <h2 className="text-left" style={{ color: 'rgb(0,123,255)', marginBottom: '0px' }}>Tin Đọc Nhiều</h2>
                                    </div>
                                    <div className="subnews_border_bottom padding-space"><a href="#"><img className="img-thumbnail" data-bss-hover-animate="pulse" src="assets/img/1817882942181646030757512277294535780616063n-1620531894104713740913.webp" />
                                        <p className="paragraph_color_text_subnews">"Bắt giam 3 đối tượng giúp nhóm người Trung Quốc" cư trú&nbsp;trái phép tại việt nam<br /></p>
                                    </a>
                                        <div>
                                            <p className="time-text">Thứ Năm, 13-05-2021, 16:15<br /></p>
                                        </div>
                                    </div>
                                    <div className="subnews_border_bottom padding-space"><a href="#"><img className="img-thumbnail" data-bss-hover-animate="pulse" src="assets/img/9571587330154064618588707004330754779906048o-15889047856451501926427.jpg" />
                                        <p className="paragraph_color_text_subnews">"Biến" phòng cách ly thành phòng đẻ để cứu hai sản phụ<br /></p>
                                    </a>
                                        <div>
                                            <p className="time-text">Thứ Năm, 13-05-2021, 16:15<br /></p>
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

export default VietNam;