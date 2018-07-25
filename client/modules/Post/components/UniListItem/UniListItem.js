import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './UniListItem.css';

function UniListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.cuid}`} >
          {props.post.name}
        </Link>
      </h3>
      <p className={styles['post-desc']}>{props.post.country}, {props.post.city}</p>
      <hr className={styles.divider} />
    </div>
  );
}

UniListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UniListItem;
