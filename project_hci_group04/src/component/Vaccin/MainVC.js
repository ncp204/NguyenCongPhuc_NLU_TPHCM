import React, { Component } from "react";
import Content1 from "./Content1VC";
import ContentVC2 from "./Content2";
import "./vaccin.css";

class MainVC extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="ctmainVC">
            <Content1
              heading="TIN NÓNG VACCIN"
              nguon="assets/img/dead.gif"
              link="#"
              title="BỘ Y TẾ CHO BIẾT :NHÂN VIÊN Y TẾ TỬ VONG SAU KHI TIÊM VACCIN LÀ DO SỐC PHẢN VỆ"
              text="Theo thông cáo do bộ y tế phát đi ,bác sĩ Từ Quốc Tuấn ,giám đốc sở y tế An Giang  cho biết ngày 7/5 trên địa bàn có ghi nhận một trường hợp tử vong do sốc phẩn vệ khi tiêm vaccin covid 19 của Astrazen .Người tử vong là nhân viên y tế 35 tuổi đang công tác tại Bệnh viện ..."
              time="2/05/2021 17:10"
            />
          </div>
          <div className="ctmainVC2">
            <h1>TIN LIÊN QUAN</h1>
            <div className="sizeContVC">
              <ContentVC2
                link="#"
                nguon="assets/img/dtvn tiêm vc.jpeg"
                title="BỘ Y TẾ CHO BIẾT :NHÂN VIÊN Y TẾ TỬ VONG SAU KHI TIÊM VACCIN LÀ DO SỐC PHẢN VỆ"
                time="10/05/2021 17:10"
              />
              <ContentVC2
                nguon="assets/img/vacxin-covid-19-h1.jpg"
                link="#"
                title="KHÔNG THAY ĐỔI CHIẾN LƯỢC CHỐNG DỊCH, THỰC HIỆN NGHIÊM 5K."
                time="7/05/2021 17:00"
              />
              <ContentVC2
                nguon="assets/img/153467957_526687565392878_818077-1614145258702.jpg"
                title="KHÔNG THAY ĐỔI CHIẾN LƯỢC CHỐNG DỊCH, THỰC HIỆN NGHIÊM 5K."
                time="7/05/2021 17:10"
                link="#"
              />
              <ContentVC2
                nguon="assets/img/20200320_164739_716762_vacxin-duoc-san-xua.max-1800x1800.jpg"
                title="KHÔNG THAY ĐỔI CHIẾN LƯỢC CHỐNG DỊCH, THỰC HIỆN NGHIÊM 5K."
                time="7/05/2021 17:10"
                link="#"
              />
            </div>
          </div>
          <div className="titleVC">
            <h1>THÔNG TIN VỀ VACCIN</h1>
          </div>
          <div className="sizeMoreNews">
            <div className="cmmVC">
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/vac-xin-covid-19.jpg"
                  link="#"
                  title="VACCIN ĐÃ CẤP PHÉP LƯU HÀNH TRÊN TOÀN THẾ GIƠI"
                />
              </div>
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/7a2vacxin.jpg"
                  link="#"
                  title="VACCIN  ĐANG ĐƯỢC TIẾN HÀNH THỬ NGHIỆM TRÊN CHUỘT"
                />
              </div>
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/c1 2.jpg"
                  link="#"
                  title="TIẾN ĐỘ VACCIN NGỪA COVID 19 ĐANG ĐƯỢC GẤP RÚT PHÁT TRIÊN"
                />
              </div>
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/viet-nam-nghien-cuu-vac-xin-covid-19_zafe.jpg"
                  link="#"
                  title="CÔNG CUỘC NGHIÊN CỨU VACCIN CÓ NHỮNG KẾT QUẢ BAN "
                />
              </div>
            </div>
            <div className="cmmVC">
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/chau-phi-covid-19-190321.jpg"
                  link="#"
                  title="SỰ KHAN HIẾM VACCIN Ở NHỮNG NƯỚC NGHÈO CHÂU PHI"
                />
              </div>
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/vaccine2-1607513425640.jpg"
                  link="#"
                  title="CÁC CÔNG TY VACCIN MỸ CAM KẾT CUNG CẤP VACCIN CHO TOÀN NGƯỜI DÂN MỸ"
                />
              </div>
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/20200320_164739_716762_vacxin-duoc-san-xua.max-1800x1800.jpg"
                  link="#"
                  title="CÁC NHÀ KHOA HỌC TRÊN GIỚI ĐANG CÙNG NHAU NGHIÊN CỨU VACCIN"
                />
              </div>
              <div className="ctmainSubVC">
                <Content1
                  nguon="assets/img/download.jpg"
                  link="#"
                  title="YÊU CẦU CẤP BÁCH VỀ VACCIN NGỪA COVID 19"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainVC;
