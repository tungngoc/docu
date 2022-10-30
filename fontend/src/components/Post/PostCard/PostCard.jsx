import React from "react";
import "./PostCard.css";
const PostCard = () => {
  return (
    <div className="post-card">
      <div className="wrap">
        <img
          src={require("../../../assets/tu-kieng.jpg")}
          alt=""
          width={166}
          height={166}
          className="card-img"
        />
        <div className="card-content">
          <h3 className="card-title">Tủ kiếng 4 ngăn</h3>
          <p className="short-des"></p>
          <div className="price">
            <span>400.000đ</span>
          </div>
        </div>
        <div className="card-footer">
          <a href="!#">
            <img
              src={require("../../../assets/tu-kieng.jpg")}
              alt=""
              width={16}
              height={16}
              className="user-img"
            />
          </a>
          <div className="dot"></div>
          <div className="post-time">
            <span className="text">12 giờ trước</span>
          </div>
          <div className="dot"></div>
          <div className="post-time" id="location">
            <span className="text"> Cần Thơ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
