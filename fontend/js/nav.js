const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
  <div class="nav">
     <img
      src="https://www.seekpng.com/png/detail/801-8018651_png-file-svg-retail-route-to-market.png"
      class="brand-logo"
      alt=""
     />
     <div class="nav-items">
     <div class="search">
       <input type="text" class="search-box" placeholder="Bạn tìm gì..." />
        <button class="search-btn">Tìm kiếm</button>
     </div>
      <a href="#"><i class="fas fa-message" title="tin nhắn"></i></a>
      <a href="#"><i class="fas fa-bell" title="thông báo"></i></a>
      <a href="#"><i class="fas fa-shopping-cart" title="giỏ hàng"></i></a>
      <a href="#"><i class="fas fa-user" title="đăng nhập"></i></a>
   </div>
 </div>
 <ul class="links-container">
  <li class="link-item"><a href="#" class="link">Trang chủ</a></li>
  <li class="link-item"><a href="#product" class="link">Sản phẩm</a></li>
  <li class="link-item"><a href="#category" class="link">Danh mục</a></li>
  <li class="link-item"><a href="#" class="link">Bài viết</a></li>
 </ul>
  `;
};
createNav();
