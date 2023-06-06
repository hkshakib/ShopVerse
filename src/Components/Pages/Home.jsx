import React from 'react';
import Classes from './../../Styles/Pages/Home.module.css';
import Bannar from './../../Assets/OfferBanner.jpg';
function Home() {

  return (
    <div className={Classes.Home}>
      <div className={Classes.Bannar}>
        <img src={Bannar} alt="" />
      </div>
      
      <div className={Classes.ProductShowCase}>

      </div>
    </div>    
  )
}

export default Home;