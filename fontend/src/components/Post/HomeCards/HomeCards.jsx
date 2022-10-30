import React from "react";
import "./HomeCard.css";
import PostCard from "../PostCard/PostCard";
const HomeCards = () => {
  return (
    <section className="home-post">
      <h3 className="title">Tin đăng dành cho bạn</h3>
      <div className="post-container">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
      <div className="load-more-wrapper">
        <button className="load-more">Xem thêm</button>
      </div>
    </section>
  );
};

export default HomeCards;
