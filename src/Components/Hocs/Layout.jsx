import React from 'react';
import Navbar from "../Common/Navbar.jsx";
import Footer from '../Common/Footer.jsx';
import NotificationBar from '../Common/NotificationBar.jsx';

const Layout = (props) => {
  return (
    <div>
      <NotificationBar />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout;