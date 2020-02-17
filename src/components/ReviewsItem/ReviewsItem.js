import React from 'react';
import PropTypes from 'prop-types';

import styles from './ReviewsItem.module.css';

const ReviewsItem = ({ author, content }) => {
  return (
    <li className={styles.ReviewsList__item}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewsItem;
