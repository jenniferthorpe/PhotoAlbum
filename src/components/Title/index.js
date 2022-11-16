import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

const Title = ({ bold, children, margin, semiBold, center }) => {

  return (
    <h1 className={cn({
      [styles.bold]: bold,
      [styles.margin]: margin,
      [styles.semiBold]: semiBold,
      [styles.center]: center
    })}>
      {children}
    </h1>
  )
};

export default Title;
