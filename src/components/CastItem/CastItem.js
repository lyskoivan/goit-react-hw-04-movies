import React from 'react';
import PropTypes from 'prop-types';

import styles from './CastItem.module.css';

const CastItem = ({ src, name, character }) => {
  return (
    <li className={styles.CastList__item}>
      <img src={src} alt="" className={styles.CastList__img} />
      <div>
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastItem;
