import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <ul>
        <a href='/'>Home</a>
        <li>
          <a
            href='https://www.notion.so/Community-Guidelines-d0eeb2ca4f094ccfa3f3e58fe5f28435'
            target='_blank'
            rel='noreferrer'
          >
            Guidelines
          </a>
        </li>

        <li>
          <a
            href='https://www.notion.so/Press-75233bffce4547a6a337416c49de1c61'
            target='_blank'
            rel='noreferrer'
          >
            Press
          </a>
        </li>

        <li>
          <a
            href='https://www.notion.so/Privacy-aca26bf8fdfd4a28bf74d8e2d03554f7'
            target='_blank'
            rel='noreferrer'
          >
            Privacy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
