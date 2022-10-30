import React from "react";
import "./CategoryList.css";
const CategoryList = () => {
  return (
    <section className="categories" id="categories">
      <h2 className="section-title">Khám phá danh mục</h2>
      <div className="box-container">
        <div className="category-box">
          <img
            src={require("../../assets/bat-dong-san.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">Bất động sản</h2>
        </div>
        <div className="category-box">
          <img
            src={require("../../assets/xe-co.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">Xe cộ</h2>
        </div>
        <div className="category-box">
          <img
            src={require("../../assets/thu-cung.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">Thú cưng</h2>
        </div>
        <div className="category-box">
          <img
            src={require("../../assets/dien-tu.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">Đồ điện tử</h2>
        </div>
        <div className="category-box">
          <img
            src={require("../../assets/thoi-trang.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">Thời trang</h2>
        </div>
        <div className="category-box">
          <img
            src={require("../../assets/may-giat-tu-lanh.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">Máy giặt,máy lạnh tủ lạnh </h2>
        </div>
        <div className="category-box">
          <img
            src={require("../../assets/van-phong.jpg")}
            alt=""
            width={84}
            height={84}
          />
          <h2 className="category-name">
            đồ dùng văn phòng, công nông nghiệp{" "}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
