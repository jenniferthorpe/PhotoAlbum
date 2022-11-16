import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.any,
  margin: PropTypes.bool,
  semiBold: PropTypes.bool,
  center: PropTypes.bool
}

export default Title;
