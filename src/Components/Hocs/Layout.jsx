import React from 'react';
import Navbar from "../Common/Navbar.jsx";
import Footer from '../Common/Footer.jsx';
import NotificationBar from '../Common/NotificationBar.jsx';
import Classes from './../../Styles/Hocs/Layout.module.css';

const Layout = (props) => {
  return (
    <div className={Classes.Layout}>
      <NotificationBar />

      <Navbar />

      {props.children}

      <Footer />

    </div>
  )
}

export default Layout;