import React, { Component } from "react";
import ImgVC from "./ImgVC";
import HeaderVC from "./HeaderVC";
import LinkVC from "./LinkVC";
import ContentVC from "./ContentVC";
import "./vaccin.css";

class MainNewsCV extends Component {
  render() {
    return (
      <div className="displayBeTaVC">
        <div className="columnVC1">
          <div className="bgHeaderVC">
            <HeaderVC title="TIN NÓNG VACCIN" />
          </div>
          <div className="sizeImgVCMain">
            <ImgVC path="assets/img/dead.gif"/>
          </div>
          <div>
            <LinkVC long="http://www.google.com" title="BỘ Y TẾ CHO BIẾT: NHÂN VIÊN TỬ VONG SAU KHI TIÊM VACCIN COVID 19 LÀ DO SỐC PHẢN VỆ" />
            <div className="displayVC4">
              <ContentVC title="12/5/2021" />
            </div>
            <div className="displayVC5">
            {/* <ContentVC title="Theo thông cáo do bộ y tế phát đi ,bác sĩ Từ Quốc Tuấn ,giám đốc sở y tế An Giang  cho biết ngày 7/5 trên địa bàn có ghi nhận một trường hợp tử vong do sốc phẩn vệ khi tiêm vaccin covid 19 của Astrazen .Người tử vong là nhân viên y tế 35 tuổi đang công tác tại Bệnh viện ..." /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNewsCV;
