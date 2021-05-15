import React, { Component } from 'react';
import Button from './Button';
import HomeColDiv3 from './HomeColDiv3';

class HomeDiv03 extends Component {
    render() {
        return (
            <div>
                <div className="home-div num3">
                    <div className="row">
                        <div className="col col-div03 fcol">
                            <h1 className="first-row div03">Điều cần biết</h1>
                            <HomeColDiv3 content="5 bệnh viện sẵn sàng tiếp nhận người bệnh gặp sự cố bất lợi sau tiêm chủng." small_date="11/05/2021 08:45" />
                            <HomeColDiv3 content="Chủ động xét nghiệm SARS-CoV-2, bệnh viện đảm bảo an toàn khám chữa bệnh." small_date="10/05/2021 17:04" />
                            <HomeColDiv3 content="Làn sóng COVID-19 tấn công, bệnh viện làm gì để bảo vệ bệnh nhân cao tuổi ở tuyến cuối?" small_date="10/05/2021 15:02" />
                            <HomeColDiv3 content="Cách dùng thuốc đông y ứng phó với dịch covid-19." small_date="10/05/2021 10:28" />
                            <a className="div03" href="#">Xem thêm</a>
                        </div>
                        <div className="col col-div03 fcol">
                            <h1 className="first-row div03">Khuyến cáo</h1>
                            <HomeColDiv3 content="Khám chữa bệnh trong mùa dịch, người dân nên đến tuyến chăm sóc sức khỏe ban đầu." small_date="10/05/2021 15:21" />
                            <HomeColDiv3 content="Đua nhau dùng thuốc bổ trong mùa dịch: Coi chừng bổ ngửa." small_date="10/05/2021 10:29" />
                            <HomeColDiv3 content="Các địa điểm cách ly y tế trên địa bàn Hà Nội." small_date="09/05/2021 12:03" />
                            <HomeColDiv3 content="Người đến BV Bệnh Nhiệt đới TW cơ sở 2 từ 14/4 đến nay nhanh chóng khai báo" small_date="06/05/2021 12:22" />
                            <a className="div03" href="#">Xem thêm</a>
                        </div>
                        <div className="col col-div03 fcol">
                            <h1 className="first-row div03">Hỗ trợ người dân</h1>
                            <Button btn="btn btn-primary btn-block btn01" txt="Đường dây nóng" txt1="19009095" />
                            <Button btn="btn btn-primary btn-block btn02" txt="Ứng dụng công nghệ thông tin" />
                            <Button btn="btn btn-primary btn-block btn03" txt="Các bệnh viện tiếp nhận và điều" txt1="trị COVID-19" />
                            <Button btn="btn btn-primary btn-block btn04" txt="Diễn biến dịch thế giới" />
                            <Button btn="btn btn-primary btn-block btn05" txt="Hỏi - đáp, phản ánh" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeDiv03;