import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <ul>
        <a href='/'>Home</a>
        <li>
          <a href='/community-guidelines.pdf' target='_blank' rel='noreferrer'>
            Guidelines
          </a>
        </li>

        <li>
          <a href='/press.pdf' target='_blank' rel='noreferrer'>
            Press
          </a>
        </li>

        <li>
          <a href='/privacy-policy.pdf' target='_blank' rel='noreferrer'>
            Privacy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
