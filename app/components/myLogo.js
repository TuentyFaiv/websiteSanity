import React from 'react';

import styles from './myLogo.css';

import logo from '../assets/logoSanity@1x.png';

const myLogo = () => {
  return (
    <img src={logo} alt="TuentyFaiv Studio logo" className={styles.myLogo} />
  );
}

export default myLogo;