import React from 'react';

import classes from './ContentBox.module.scss';

import logo from '../../Assets/logo.jpg';
import playStoreBtn from '../../Assets/playstore-btn.png';
import appStoreBtn from '../../Assets/appstore-btn.png';
import instagramLogo from '../../Assets/instagram-logo.png';

const ContentBox = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.Container}>
        <span>
          <img src={logo} alt='Bujulo Logo' />
          <p>Bujulo</p>
        </span>
        <p>Hey, we’re still opening up but anyone can register to get early access for the beta version.</p>
        <p>Discover the Difference.</p>
        <p>Messaging, Short-Videos and Livestreams. </p>
        <span>
          <a href='https://play.google.com/store' target='_blank' rel='noreferrer'>
            <img src={playStoreBtn} alt='play store' />
          </a>
          <a href='https://www.apple.com/in/app-store/' target='_blank' rel='noreferrer'>
            <img src={appStoreBtn} alt='app store' />
          </a>
        </span>
      </div>
      <div className={classes.SocailBox}>
        <a href='http://www.instagram.com/Bujulo_byte' target='_blank' rel='noreferrer'>
          <img src={instagramLogo} alt='instagram' />
        </a>
      </div>
    </div>
  );
};

export default ContentBox;
