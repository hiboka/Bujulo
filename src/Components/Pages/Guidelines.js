import React from 'react';
import { Document } from 'react-pdf';

import classes from './style.module.scss';

const Guidelines = () => {
  return (
    <div className={classes.Container}>
      <div>
        <Document
          file='https://bujulo.tech/community-guidelines.pdf'
          onLoadError={(error) => console.log(error)}
        />
      </div>
    </div>
  );
};

export default Guidelines;
