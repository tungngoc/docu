import React from "react";
import "./UserInfo.css";
const UserInfo = () => {
  return (
    <section className="user-info">
      <div className="seller-profile">
        <div className="seller-avatar">
          <img src="" alt="" />
        </div>
        <div className="seller-info">
          <h4>Nguyen Duy</h4>
        </div>
      </div>
      <div className="lead-button">
        <button>
          <i className="fa fa-phone"></i> Số điện thoại
        </button>
        <button>
          <i className="fa fa-message"></i> Chat với người bán
        </button>
      </div>
    </section>
  );
};

export default UserInfo;
