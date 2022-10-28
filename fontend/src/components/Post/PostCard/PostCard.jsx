import React from "react";
import "./PostCard.css";
const PostCard = () => {
  return (
    <div className="post-card">
      <div className="wrap">
        <img src="" alt="" width={166} height={166} className="card-img" />
        <div className="card-content">
          <h3 className="card-title">This is a title</h3>
          <p className="short-des">this is short description</p>
          <div className="price">
            <span>20000đ</span>
          </div>
        </div>
        <div className="card-footer">
          <a href="!#">
            <img src="" alt="" width={16} height={16} className="user-img" />
          </a>
          <div className="dot"></div>
          <div className="post-time">
            <span className="text">12 giờ trước</span>
          </div>
          <div className="dot"></div>
          <div className="post-time" id="location">
            <span className="text"> Tp HCMaaaaaaaaaaaa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
