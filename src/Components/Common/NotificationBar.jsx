import React from 'react';
import Classes from './../../Styles/Common/NotificationBar.module.css';
import {AiOutlinePhone} from  "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const NotificationBar = () => {
  return (
    <div className={Classes.NotificationBar}>
      <div className={Classes.PhoneNumber}> 
        <AiOutlinePhone/> +88-01710889028
      </div>

      <div className={Classes.Offer}>
        <div className={Classes.Discount}> Get 50% Discount</div>
        <div className={Classes.ShopNow}>Shop Now</div>
      </div>
      <div className={Classes.Location}>
        <div className={Classes.Language}>
          English <BsChevronDown/>
        </div>
      </div>
    </div>
  )
}

export default NotificationBar;