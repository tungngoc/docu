import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <>
    <input type="checkbox" name="" id="check" />
    <nav>
      <div className='icon'>Chợ Cũ</div>
      <div className="search_box">
        <input type='search' placeholder='Tìm kiếm trên Chợ Cũ'/>
        <span className='fa fa-search'></span>
      </div>
      <ol>
        <li>
          <a href='!#'> <span className='fa fa-home'></span> Trang chủ</a>
        </li>
        <li>
          <a href='!#'> <span className='fa fa-message'></span> Quản lý tin</a>
        </li>
        <li>
          <a href='!#'><span className='fa fa-bell'></span> Thông báo</a>
        </li>
        <li>
          <a href='!#'><span className='fa fa-user'></span> Đăng nhập</a>
        </li>
      </ol>
      <label htmlFor='check' className='bar'>
        <span className='fa fa-bars' id='bars'></span>
        <span className='fa fa-times' id='times'></span>
      </label>
    </nav>
    </>
  )
}

export default NavBar