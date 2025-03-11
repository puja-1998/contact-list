import React from 'react';
import './HorizontalNavbar.css';
import Button from '../UI/Button';

export default function HorizontalNavbar() {
  return (
    <div className='horizontal-nav'>
      <div className="profile">
        <div className="profile-img-box">
          <i className='fa-solid fa-user'></i>
        </div>
        <h2>Puja Rokade</h2>
      </div>
      <form action="" className='search-box'>
        <input type="text" placeholder='Puja Rokade' />
        <Button name='Search'/>
      </form>
    </div>
  )
}
