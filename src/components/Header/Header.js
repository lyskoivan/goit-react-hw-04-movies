import React from 'react';
// import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

// const ativeStyle = {
//   color: 'rgb(131, 29, 55)',
// };

const Header = () => (
  <ul className={styles.nav_list}>
    {/* <NavLink to="/" exact activeStyle={ativeStyle}>
      <li className={styles.nav_list__element}>Home</li>
    </NavLink>
    <NavLink to="/movies" activeStyle={ativeStyle}>
      <li className={styles.nav_list__element}>Movie</li>
    </NavLink> */}
    <li className={styles.nav_list__element}>Home</li>
    <li className={styles.nav_list__element}>Movie</li>
  </ul>
);

export default Header;
