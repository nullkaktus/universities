import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchPost } from '../../PostActions';

// Import Selectors
import { getPost } from '../../PostReducer';

export function PostDetailPage(props) {
  return (
    <div>
      <Helmet title={props.post.name} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.post.name}</h3>
        <img src={props.post.img} alt="" className={styles['university-image']} />
        <p className={styles['author-name']}> {props.post.country}</p>
        <p className={styles['post-desc']}>{props.post.city}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
