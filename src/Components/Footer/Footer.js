import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <ul>
        <a href='/'>Home</a>
        <li>
          <Link to='/community-guidelines.pdf' target='_blank' rel='noreferrer'>
            Guidelines
          </Link>
        </li>

        <li>
          <Link to='/press.pdf' target='_blank' rel='noreferrer'>
            Press
          </Link>
        </li>

        <li>
          <Link to='/privacy-policy.pdf' target='_blank' rel='noreferrer'>
            Privacy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
