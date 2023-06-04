import React from 'react';
import Navbar from "../Common/Navbar.jsx";
import Footer from '../Common/Footer.jsx';
import FooterNote from '../Common/FooterNote.jsx';
import NotificationBar from '../Common/NotificationBar.jsx';
import Classes from './../../Styles/Hocs/Layout.module.css';

const Layout = (props) => {
  return (
    <div className={Classes.Layout}>
      <NotificationBar className={Classes.NotificationBar}/>
      <Navbar className={Classes.Navbar}/>
      <div className={Classes.Container}>
        {props.children}
      </div>
      <Footer className={Classes.Footer}/>
      <FooterNote/>
    </div>
  )
}

export default Layout;