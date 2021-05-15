import React, { Component } from "react";
import MyImgVC from "./MyImgVC";
import LinkVC from "./LinkVC";
import HeaderVC from "./HeaderVC";
import "./vaccin.css";

class MoreNewsVC extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="reFreshVC">
            <HeaderVC title="THÔNG TIN VỀ VACCIN" />
          </div>
          <div className="div3VC">
            <div className="sizeScream">
              <div className="smallImgVc ">
                <MyImgVC path="assets/img/vac-xin-covid-19.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="VACCIN ĐÃ CẤP PHÉP LƯU HÀNH TRÊN TOÀN THẾ GIƠí"
                />
              </div>
              <div className="smallImgVc fVC1">
                <MyImgVC path="assets/img/7a2vacxin.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="VACCIN ĐANG ĐƯỢC TIẾN HÀNH THỬ NGHIỆM TRÊN CHUỘT"
                />
              </div>
              <div className="smallImgVc fVC1">
                <MyImgVC path="assets/img/c1 2.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="TIẾN ĐỘ VACCIN NGỪA COVID 19 ĐANG ĐƯỢC GẤP RÚT PHÁT TRIÊN"
                />
              </div>
              <div className="smallImgVc fVC1">
                <MyImgVC path="assets/img/viet-nam-nghien-cuu-vac-xin-covid-19_zafe.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="TIẾN ĐỘ VACCIN NGỪA COVID 19 ĐANG ĐƯỢC GẤP RÚT PHÁT TRIÊN"
                />
              </div>
            </div>
            <div>
              <div className="smallImgVc">
                <MyImgVC path="assets/img/chau-phi-covid-19-190321.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="VACCIN ĐÃ CẤP PHÉP LƯU HÀNH TRÊN TOÀN THẾ GIƠí"
                />
              </div>
              <div className="smallImgVc fVC1">
                <MyImgVC path="assets/img/vaccine2-1607513425640.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="CÁC CÔNG TY MỸ CAM KẾT CUNG CẤP VACCIN CHO TOÀN NGƯỜI DÂN MỸ"
                />
              </div>
              <div className="smallImgVc fVC1">
                <MyImgVC path="assets/img/20200320_164739_716762_vacxin-duoc-san-xua.max-1800x1800.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="CÁC NHÀ KHOA HỌC TRÊN THẾ GIỚI ĐANG CÙNG NHAU NGHIÊN CỨU VACCIN"
                />
              </div>
              <div className="smallImgVc fVC1">
                <MyImgVC path="assets/img/download.jpg" />
                <LinkVC
                  long="http://www.google.com"
                  title="TIẾN ĐỘ VACCIN NGỪA COVID 19 ĐANG ĐƯỢC GẤP RÚT PHÁT TRIÊN"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>THÊM</button>
        </div>
      </div>
    );
  }
}

export default MoreNewsVC;
