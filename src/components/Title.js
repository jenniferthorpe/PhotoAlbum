import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

const Title = ({ bold, children, margin, semiBold, center }) => {

  return (
    <h1 className={cn({
      [styles.titleBold]: bold,
      [styles.titleMargin]: margin,
      [styles.titleSemiBold]: semiBold,
      [styles.titleCenter]: center
    })}>
      {children}
    </h1>
  )
};

export default Title;
