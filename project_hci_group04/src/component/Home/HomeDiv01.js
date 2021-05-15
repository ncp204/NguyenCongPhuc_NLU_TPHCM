import React, { Component } from 'react';
import Slide from './Slide';
import CareCol from './CareCol';

class HomeDiv01 extends Component {
    render() {
        return (
            <div>
                <div className="home-div num1">
                    <div className="row">
                        <div className="col focus">
                            <h1 className="d-block title">Tiêu điểm</h1>
                            <div className="carousel slide text-left" data-ride="carousel" id="carousel-1">
                                <div className="carousel-inner">
                                    <div className="carousel-item active"><Slide path="assets/img/home_vietnam1.jpg" content="KHÔNG THAY ĐỔI CHIẾN LƯỢC CHỐNG DỊCH, THỰC HIỆN NGHIÊM 5K." small_date="10/05/2021 17:10)" small_text="Không một quốc gia nào an toàn khi cả thế giới chưa an toàn. Không một người Việt Nam nào an toàn khi cả nước chưa an toàn. Mỗi người phải trách nhiệm trước hết với mình và người thân của mình, sau đó là với đất nước..." /></div>
                                    <div className="carousel-item"><Slide path="assets/img/home_vietnam2.jpg" content="CÁC ĐỊA PHƯƠNG PHẢI KÍCH HOẠT TOÀN BỘ HỆ THỐNG PHÒNG DỊCH." small_date="07/05/2021 18:20)" small_text="Tại cuộc họp trực tuyến Ban chỉ đạo Quốc gia phòng chống dịch COVID-19 chiều 7/5, Bộ trưởng Bộ Y tế Nguyễn Thanh Long đánh giá, đợt dịch lần này phức tạp hơn các đợt dịch trước có đa ổ dịch, đa nguồn lây, đa chủng..." /></div>
                                    <div className="carousel-item"><Slide path="assets/img/home_vietnam3.jpg" content="BẢO VỆ BỆNH VIỆN TUYẾN CUỐI CỦA QUẢNG NINH." small_date="06/05/2021 22:34)" small_text="Siết chặt công tác sàng lọc, phân luồng từ cổng viện, thực hiện nghiêm 5K, kiểm tra thân nhiệt và khai báo y tế, đảm bảo giãn cách trong bệnh viện… là hàng loạt các biện pháp phòng chống dịch được BVĐK tỉnh Quảng Ninh..." /></div>
                                </div>
                                <div><a className="carousel-control-prev ctrl" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon" /><span className="sr-only">Previous</span></a><a className="carousel-control-next ctrl" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon" /><span className="sr-only">Next</span></a></div>
                            </div>
                        </div>
                        <div className="col care">
                            <h1 className="d-block title care">Quan tâm</h1>
                            <div className="row-care-1">
                                <CareCol path="assets/img/home_quantam_1.jpg" content="Ấn Độ chiếm hơn một nửa số ca mắc Covid-19 mới của thế&nbsp;giới." small_date="(11-05-2021 08:45)" small_text="Tâm điểm dịch trên thế giới vẫn là Ấn Độ, với số ca nhiễm mới trong 24 giờ vẫn ghi nhận ở mức rất cao - hơn 409 nghìn ca tính đến 8 giờ 30 phút cùng ngày chiếm hơn 52% tổng số ca mắc mới trên toàn..." />
                                <CareCol path="assets/img/home_quantam_2.jpg" content="Thế giới hứng loạt dư chấn đáng lo ngại từ đợt sóng Covid-19 ở Ấn Độ." small_date="(11-05-2021, 08:54)" small_text="Tình hình dịch bệnh ở Ấn Độ ảnh hưởng sâu rộng tới một số ngành công nghiệp toàn cầu phụ thuộc vào nước này. Nếu cuộc khủng hoảng trở nên tồi tệ hơn, mọi thứ từ quần áo, dược..." />
                                <CareCol path="assets/img/home_quantam_3.jpg" content="Thế giới ghi nhận tổng gần 160 triệu ca mắc Covid-19." small_date="(11-05-2021 08:15)" small_text="Theo khu vực, châu Âu ghi nhận tổng số ca nhiễm đứng đầu thế giới với hơn 45,56 triệu ca mắc và 1.036.925 ca đã tử vong. Tiếp đến là châu Á với hơn 44,37 triệu ca nhiễm và 574.860 ca tử vong. Xếp thứ 3 là Bắc Mỹ với..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeDiv01;