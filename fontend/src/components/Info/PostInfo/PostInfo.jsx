import React from "react";
import "./PostInfo.css";
import Slider from "react-slick";
const PostInfo = () => {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="post-info">
      <div className="post-image-wrapper">
        <div className="image-slider"></div>
        <div className="image-caption">
          <span className="image-caption-text">Tin đăng cá nhân 16h trước</span>
        </div>
      </div>
    </section>
  );
};

export default PostInfo;
