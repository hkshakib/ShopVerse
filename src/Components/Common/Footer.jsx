import React from 'react';
import Classes from './../../Styles/Common/Footer.module.css';
import BrandImage from './../../Assets/logo1.jpg';

const Footer = () => {

  return (
    <div className={Classes.Footer}>
      <div className={Classes.FooterContent}>

        <div className={Classes.Content}>
          <div className={Classes.Title}> CONTENT </div>
          <div className={Classes.FootMenu}>Calendar of festivities</div>
          <div className={Classes.FootMenu}>New assets</div>
          <div className={Classes.FootMenu}>The most popular content</div>
          <div className={Classes.FootMenu}>Search trends</div>
          <div className={Classes.FootMenu}>Blog</div>
        </div>
        <div className={Classes.Information}>
          <div className={Classes.Title}>INFORMATION</div>
          <div className={Classes.FootMenu}>Pricing</div>
          <div className={Classes.FootMenu}>About us</div>
          <div className={Classes.FootMenu}>Press room</div>
          <div className={Classes.FootMenu}>Business</div>
          <div className={Classes.FootMenu}>Jobs</div>
          <div className={Classes.FootMenu}>Sell your content</div>
        </div>
        <div className={Classes.Legal}>

          <div className={Classes.LegalContainer}>
            <div className={Classes.Title}>LEGAL</div>

            <div className={Classes.FootMenuSecondary}>Terms and conditions</div>
            <div className={Classes.FootMenuSecondary}>License agreement</div>
            <div className={Classes.FootMenuSecondary}>Privacy policy</div>
            <div className={Classes.FootMenuSecondary}>Copyright information</div>
            <div className={Classes.FootMenuSecondary}>Cookies policy</div>
            <div className={Classes.FootMenuSecondary}>Cookiees Settings</div>

          </div>

          <div className={Classes.Support}>
            <div className={Classes.Title}>SUPPORT</div>

            <div className={Classes.FootMenuSecondary}>FAQ</div>
            <div className={Classes.FootMenuSecondary}>Contact</div>

          </div>

        </div>

        <div className={Classes.SocialMedia}>
          <div className={Classes.Title}>SOCIAL MEDIA</div>
        </div>

      </div>

      <div className={Classes.CompanyRight}>
        <div className={Classes.CopyRightText}>
          <img src={BrandImage} alt="" />
          <div>
            Copyright ©2023 ShopVerse Company Inc. All rights reserved.</div>
          </div>

      </div>
    </div>
  )
}

export default Footer;