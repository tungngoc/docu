import React from "react";
import "./SinglePost.css";
import PostInfo from "../../components/Info/PostInfo/PostInfo";
import UserInfo from "../../components/Info/UserInfo/UserInfo";
const SinglePost = () => {
  return (
    <div className="post">
      <PostInfo></PostInfo>
      <UserInfo></UserInfo>
    </div>
  );
};

export default SinglePost;
