import React, { Component } from 'react';

class World extends Component {
    render() {
        return (
            <div>
                <div className="theWorld" id="world">
                    <div className="container" style={{ width: 1200 }}>
                        <div className="row">
                            <div className="col-md-6 col-xl-8">
                                <div className="text-center">
                                    <h1>Thông tin dịch Covid-19 trên thế giới</h1>
                                    <p className="text-left">Chủ nhật, ngày 5/9/2021</p>
                                </div><br />
                                <div className="text-left">
                                    <a href="#">
                                        <h2>Ấn Độ chiếm một nửa số ca mắc Covid-19 trên thế giới.</h2>
                                    </a>
                                    <div className="text-center"><img className="img-thumbnail" src="assets/img/corona-vaccine-an-do-6521-reuters-1620430236830685852321.jpg" /></div>
                                    <div>
                                        <p className="text-left border-primary shadow">Theo số liệu trang <strong>Worldometers.info</strong>, tính đến
                      8 giờ 30 phút ngày 9-5 (giờ Việt Nam), toàn thế giới ghi nhận hơn 154,17 triệu ca nhiễm Covid-19, trong
                      đó có hơn 158,30 triệu ca đã hồi phục và 3.295.974 ca tử vong.
                      Trong 24 giờ qua, thế giới ghi nhận hơn 775 nghìn ca nhiễm Covid-19, số ca tử vong ở mức hơn 12.600 ca.
                    </p>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <a href="#">
                                        <h2>WHO Thúc đẩy phân phối công bằng Vaccine ngừa Covid 19</h2>
                                    </a>
                                    <div className="text-center"><img className="img-thumbnail" src="assets/img/d0805wto-1620505160333.jpg" /></div>
                                    <div className="bg-light shadow-sm">
                                        <p className="text-left shadow">&nbsp;Ngày 7-5, <strong>Tổ chức Y tế thế giới (WHO)</strong> kêu gọi Nhóm
                      các nước công nghiệp phát triển (G7) ưu tiên bảo đảm việc tiếp cận công bằng vắc-xin ngừa Covid-19
                      trên toàn cầu; nhấn mạnh thực trạng bất bình
                      đẳng hiện nay là điều không thể chấp nhận được về mặt đạo đức. Trong gần 1,25 tỷ liều vắc-xin
                      được tiêm tại ít nhất 210 nước, vùng lãnh thổ, chỉ 0,3% số đó là ở 29 quốc gia có thu nhập thấp nhất.
                    </p>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <a href="#">
                                        <h2><span style={{ textDecoration: 'underline' }}>Thái Lan tăng cường xét nghiệm để ngăn chặn các ổ dịch ở thủ
                        đô Bangkok</span></h2>
                                    </a>
                                    <div className="text-center"><img className="img-thumbnail" src="assets/img/vaccine-1620473103083.jpg" /></div>
                                    <div>
                                        <p className="text-left border-primary shadow">Nhằm giảm tốc độ lây lan của dịch Covid-19 ở thủ đô Bangkok,
                                        nhà chức trách Thái Lan đang mở rộng phạm vi xét nghiệm Covid-19 trên diện rộng ra khắp thành phố. Chiến
                                        dịch đặt mục tiêu mỗi ngày sẽ xét nghiệm được cho khoảng 3.000
                      người thuộc các nhóm có nguy cơ cao trong những ngày tới.</p>
                                    </div>
                                </div>
                                <div className="text-right"><button className="btn btn-link text-right border-pretty" style={{ color: '#ce9c95' }} type="button">Xem thêm<i className="icon ion-android-arrow-forward" /></button></div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="text-center">
                                    <div className="card"><img className="card-img w-100 d-block border rounded-0 align-items-start align-items-xl-center" src="assets/img/covid-19%20(2).png" height={100} style={{ opacity: 1, filter: 'blur(5px)' }} />
                                        <div className="card-img-overlay">
                                            <h3 className="text-monospace text-uppercase text-center shadow">tin mới</h3>
                                        </div>
                                    </div>
                                </div><br />
                                <div>
                                    <div className="text-center">
                                        <a href="#"><img className="img-thumbnail" src="assets/img/E606C544_6AA1_4318_B3B5_60DB3EB-1620541013207.jpeg" /></a>
                                    </div>
                                    <a href="#">
                                        <h5>EU không ủng hộ miễn trừ bản quyền đối với vaccine ngừa Covid-19.<br /></h5>
                                    </a>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <a href="#"><img className="img-thumbnail" src="assets/img/francevaccine-1620482346275.jpg" /></a>
                                    </div>
                                    <a href="#">
                                        <h5>EU đặt mua thêm 1,8 tỷ liều vaccine Pfizer.<br /></h5>
                                    </a>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <a href="#"><img className="img-thumbnail" src="assets/img/2-1620456832809.jpeg" /></a>
                                    </div>
                                    <a href="#">
                                        <h5>Ấn Độ lần đầu ghi nhận hơn 4000 ca tử vong trong một ngày.</h5>
                                    </a>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <a href="#"><img className="img-thumbnail" src="assets/img/1-1620544739661.jpeg" /></a>
                                    </div>
                                    <a href="#">
                                        <h5><span style={{ textDecoration: 'underline' }}>Biến thể đẩy nhanh tốc độ lây lan Covid-19 tại Ấn
                        Độ</span><br /></h5>
                                    </a>
                                </div>
                                <div className="text-right"><button className="btn btn-link text-right border-pretty" style={{ color: '#ce9c95' }} type="button">Xem thêm<i className="icon ion-android-arrow-forward" /></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default World;