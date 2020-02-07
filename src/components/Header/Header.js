import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes/routes';

import styles from './Header.module.css';

const Header = () => (
  <ul className={styles.nav_list}>
    <li className={styles.nav_list__element}>
      <NavLink
        to={routes.HOME_PAGE.path}
        exact
        activeClassName={styles['nav_list__link-active']}
        className={styles.nav_list__link}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.nav_list__element}>
      <NavLink
        to={routes.MOVIES_PAGE.path}
        activeClassName={styles['nav_list__link-active']}
        className={styles.nav_list__link}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Header;
