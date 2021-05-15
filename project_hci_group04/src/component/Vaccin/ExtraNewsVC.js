import React, { Component } from "react";
import ContentVC from "./ContentVC";
import HeaderVC from "./HeaderVC";
import ImgSmallVC from "./ImgSmallVC";
import LinkVC from "./LinkVC";
import "./vaccin.css";

class ExtraNewsVC extends Component {
  render() {
    return (
      <div className="displayVC2">
        <div className="columnVC2">
          <div className="bgHeaderVC fStyleVC">
            <HeaderVC title="TIN LIÊN QUAN" />
          </div>

          <div>
            <div className="displayVC">
              <ImgSmallVC path="assets/img/dtvn tiêm vc.jpeg" />
              <div className="displayVc3">
                <LinkVC long="http://www.google.com" title="ĐỘI TUYỂN VIỆT NAM TIÊM VACCIN COVID 19 TRƯỚC NGÀY TOÀN ĐỘI TẬP TRUNG" />
                {/* <ContentVC title="10/5/2021 17:10" /> */}
              </div>
            </div>
          </div>

          <div>
            <div className="displayVC">
              <ImgSmallVC path="assets/img/vacxin-covid-19-h1.jpg"/>
              <div className="displayVc3 ">
                <LinkVC long="http://www.google.com" title="BỘ Y TẾ CÔNG BỐ NHỮNG ĐỐI TƯỢNG ĐƯỢC ƯU TIÊN TIÊM VACCIN COVID 19" />
                {/* <ContentVC title="7/5/2021 17:00" /> */}
              </div>
            </div>
          </div>
          <div>
            <div className="displayVC">
              <ImgSmallVC path="assets/img/153467957_526687565392878_818077-1614145258702.jpg" />
              <div className="displayVc3">
                <LinkVC long="http://www.google.com" title="LÔ VACCIN COVID 19 ĐẦU TIÊN ĐÃ VỀ ĐẾN VIỆT NAM" />
                {/* <ContentVC title="2/5/2021 17:10" /> */}
              </div>
            </div>
          </div>
          <div>
            <div className="displayVC">
              <ImgSmallVC path="assets/img/20200320_164739_716762_vacxin-duoc-san-xua.max-1800x1800.jpg" />
              <div className="displayVc3">
                <LinkVC long="http://www.google.com" title="ĐẤY MẠNH NĂNG LỤC NGHIÊN CỨU VACCIN COVID TRONG NƯỚC" />
                {/* <ContentVC title="1/5/2021 17:10" /> */}
                <ContentVC title="CDCSD"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraNewsVC;
