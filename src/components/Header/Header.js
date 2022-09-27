import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <div id='header'>
      <div className='container'>
        <nav>
          <img src={logo} alt="" />
          <div>
            <a href="/order">Order</a>
            <a href="/order-review">Order Review</a>
            <a href="/manage-inventory">Manage Inventory</a>
            <a href="/login">Login</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;