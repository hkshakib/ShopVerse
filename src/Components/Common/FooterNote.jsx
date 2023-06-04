import React from 'react';
import Classes from './../../Styles/Common/FooterNote.module.css';

const FooterNote = () => {
    return (
      <div className={Classes.FooterNote}>
        <div className={Classes.DreamNote}>A Dream Comes True</div>
        <div className={Classes.MenuItem}>
            <div className={Classes.Home}>Home</div>
            <div className={Classes.Product}>Product</div>
            <div className={Classes.Promo}>Promo</div>
            <div className={Classes.HereYouGo}>Here You Go</div>
        </div>
      </div>
    )
  }
  
  export default FooterNote;