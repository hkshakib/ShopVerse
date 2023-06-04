import React from 'react';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import Classes from './../../Styles/Common/Navbar.module.css';
import { BsChevronDown } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { TfiGift } from "react-icons/tfi";


import BrandImage from './../../Assets/logo1.jpg';
import Avatar from './../../Assets/avatar.jpeg';


function Navbar() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search functionality with the searchQuery value
    console.log('Search query:', searchQuery);
    setSearchQuery('');
  };
  
  return (
    <div className={Classes.Navbar}> 

      <div className={Classes.Container}>

        <div className={Classes.BrandLogo}>
          <img src={BrandImage} alt="" /> 

        </div>

        <div className={Classes.Search}>

          <form className={Classes.Form} onSubmit={handleSearchSubmit}>
              <CiSearch className={Classes.SearchIcon} />
              <input
                type="text"
                placeholder="SHOPVERSE..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>

        </div>

        <div className={Classes.NavItem}>

            <div className={Classes.Home}>Home</div>
            <div className={Classes.Product}>Product <BsChevronDown className={Classes.Icon}/> </div>
            <div className={Classes.Promo}>Promo</div>
            <div className={Classes.ContactUs}>Contact us</div>

        </div>

        <div className={Classes.CartItem}>

          <div className={Classes.NotificationIcon}><IoNotificationsOutline id={Classes.Icon}/></div>
          <div className={Classes.MessageIcon}><AiOutlineMessage id={Classes.Icon}/></div>
          <div className={Classes.GiftIcon}> <TfiGift id={Classes.Icon}/></div>
          <div className={Classes.CartIcon}> <AiOutlineShoppingCart id={Classes.Icon}/> </div>

        </div>

        <div className={Classes.Profile}>
          <div className={Classes.Avatar}> 
            <img src={Avatar} alt="" /> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;