import React from "react";
import "./HomeBanner.css";
import Slider from "react-slick";
const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home_banner">
      <Slider {...settings}>
        <div className="banner-img">
          <img
            src="	https://cdn-beup.woka.io/uploads/banners/2022/10/13/Fado.VN_1665656398.5401.jpg"
            alt="banner-img-1"
          />
        </div>
        <div className="banner-img">
          <img
            src="	https://cdn-beup.woka.io/uploads/banners/2022/10/13/Fado.VN_1665656398.5401.jpg"
            alt="banner-img-2"
          />
        </div>
        <div className="banner-img">
          <img
            src="	https://cdn-beup.woka.io/uploads/banners/2022/10/13/Fado.VN_1665656398.5401.jpg"
            alt="banner-img-3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
