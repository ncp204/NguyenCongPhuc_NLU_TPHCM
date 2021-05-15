/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import News from "./News";
import SubNews from "./SubNews";
import TableNews from "./TableNews";
import "./VietNamCSS.css";
class VietNam extends Component {
  render() {
    return (
      <div>
        <section
          className="text-center download-section content-section"
          id="vietnam"
        >
          <div className="container">
            <div className="vn-heading">
              <h1 className="first_row">Thông tin dịch covid-19 trONG nước</h1>
            </div>
            <div className="nguon-tin">
              <p className="text-left">
                Nguồn tin tức:{" "}
                <a href="https://ncov.moh.gov.vn/" target="_blank">
                  <span className="src-ncv">ncov.moh.gov.vn</span>
                  <br />
                </a>
              </p>
            </div>
            <div>
              <div
                className="container-xl border rounded-0 shadow"
                data-aos="fade-up"
                data-aos-duration={700}
              >
                <div className="row justify-content-center align-items-center padding-space">
                  <TableNews
                    kind="text-danger infection-number"
                    title="TỔNG SỐ CA NHIỄM"
                    numbers="3.869"
                  />
                  <TableNews
                    kind="text-warning infection-number"
                    title="ĐANG NHIỄM"
                    numbers="1.161"
                  />
                  <TableNews
                    kind="text-success infection-number"
                    title="KHỎI"
                    numbers="2.668"
                  />
                  <TableNews
                    kind="ttext-dark infection-number"
                    title="TỬ VONG"
                    numbers="36"
                  />
                </div>
              </div>
            </div>
            <div className="tin-tuc">
              <div className="row">
                <div
                  className="col"
                  style={{
                    borderRightStyle: "solid",
                    borderRightColor: "var(--blue)",
                    width: "760px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        borderBottomStyle: "solid",
                        borderBottomColor: "var(--blue)",
                        marginBottom: "20px",
                      }}
                    >
                      <h2
                        className="text-left"
                        style={{ color: "rgb(0,123,255)", marginBottom: "0px" }}
                      >
                        Tin Tức trong ngày
                      </h2>
                    </div>
                    <News
                      urlLink="#"
                      newsTitle="Hòa Bình lập 3 đoàn kiểm tra giám sát khu cách ly"
                      newsDate="(Thứ bảy, 15/05/2021, 21:25)"
                      srcNewsImg="assets/img/tiem-vac-xin-o-huyen-Da-Bac.jpg"
                      nameImg="tiem-vac-xin-o-huyen-Da-Bac"
                      content="Sở Y tế tỉnh Hòa Bình đã thành lập 3 đoàn Kiểm tra để tiến hành kiểm tra các điểm cách ly tập trung và các Bệnh viện, Trung tâm y tế trên địa bàn tỉnh từ ngày 11-15/5/2021."
                    />
                    <News
                      urlLink="#"
                      newsTitle="Bản tin COVID-19 tối 15/5: Kỷ lục số ca mới trong ngày với 169 người mắc bệnh"
                      newsDate="Thứ bảy, 15/05/2021, 20:06"
                      srcNewsImg="assets/img/bantincovid.jpeg"
                      nameImg="ban-tin-covid"
                      content="Trong 131 ca mắc mới vừa được thông báo tối 15/5, riêng Bắc Giang có 85 ca. Hôm nay, Việt Nam có 165 ca bệnh ghi nhận trong nước trong tổng số 169 ca dương tính."
                    />
                  </div>
                </div>
                <div className="col" style={{ maxWidth: "30%" }}>
                  <div
                    style={{
                      borderBottomStyle: "solid",
                      borderBottomColor: "var(--blue)",
                      marginBottom: "20px",
                    }}
                  >
                    <h2
                      className="text-left"
                      style={{ color: "rgb(0,123,255)", marginBottom: "0px" }}
                    >
                      Tin Đọc Nhiều
                    </h2>
                  </div>
                  <SubNews
                    urlLink="#"
                    subNewsImg="assets/img/hadico.jpg"
                    nameImg="hadico"
                    subNewsTitle="cách chức Bí thư Đảng ủy, chính quyền với giám đốc Hacinco vì vi phạm nghiêm trọng công tác phòng, chống dịch"
                    subNewsDate="Thứ bảy, 15/05/2021, 20:48"
                  />
                  <SubNews
                    urlLink="#"
                    subNewsImg="assets/img/chivienbacgiang.jpeg"
                    nameImg="chi-vien-bac-giang"
                    subNewsTitle="Bộ Y tế cử đoàn chuyên gia xét nghiệm chi viện Bắc Giang"
                    subNewsDate="Thứ bảy, 15/05/2021, 20:42"
                  />
                  <SubNews
                    urlLink="#"
                    subNewsImg="assets/img/1817882942181646030757512277294535780616063n-1620531894104713740913.webp"
                    nameImg="bat-giam-3-doi-tuong-trung-quoc"
                    subNewsTitle='"Bắt giam 3 đối tượng giúp nhóm người Trung Quốc" cư trú trái phép tại việt nam'
                    subNewsDate="Thứ Năm, 13-05-2021, 16:15"
                  />
                  <SubNews
                    urlLink="#"
                    subNewsImg="assets/img/9571587330154064618588707004330754779906048o-15889047856451501926427.jpg"
                    nameImg="bien-hai-phong-thanh-khu-cach-ly"
                    subNewsTitle='"Biến" phòng cách ly thành phòng đẻ để cứu hai sản phụ'
                    subNewsDate="Thứ Năm, 13-05-2021, 16:15"
                  />
                </div>
              </div>
              <button type="button" class="btn btn-outline-info">
                Trang trước
              </button>
              <button type="button" class="btn btn-outline-info">
                Trang sau
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default VietNam;
